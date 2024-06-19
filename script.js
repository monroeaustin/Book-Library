const myLibrary = [
];

// Button Sync

let btn = document.querySelector("button#addToLibrary");
let titleForm = document.querySelector("input#title");
let AuthorForm = document.querySelector("input#author");
let PagesForm = document.querySelector("input#pages");
let readForm = document.querySelector("input#flexSwitchCheckDefault");
let bottomGrid = document.querySelector(".grid-books");
let librarybtn = document.querySelector('#library');
let entireForm = document.querySelector('form#booksubmissions');
let removeButtons = document.querySelectorAll('.remove');
// Document Sync End

function createBookonScreen(author,title,pageCount,readStatus){
let bottomGrid = document.querySelector(".grid-books");
let newDiv = document.createElement("div");
newDiv.className = "book-item";
let newDivCard = document.createElement("div");
newDivCard.className = "card";
let cardTitle = document.createElement("h3");
let cardAuthor = document.createElement("h3");
let cardPage = document.createElement("h3");
let cardStatus = document.createElement("div");

bottomGrid.appendChild(newDiv);
newDiv.appendChild(newDivCard);
cardTitle.innerText = title;
cardAuthor.innerText = "Author: " + author;
cardPage.innerText =  "Pages: " + pageCount;
cardStatus.innerText = readStatus;

newDivCard.appendChild(cardTitle);
newDivCard.appendChild(cardAuthor);
newDivCard.appendChild(cardPage);
newDivCard.appendChild(cardStatus);

let removeBookBtn = document.createElement("button");
removeBookBtn.innerText = "Remove Book";
removeBookBtn.setAttribute("class","btn btn-primary remove");
newDivCard.appendChild(removeBookBtn);

let toggelReadStatus = document.createElement("button");
toggelReadStatus.innerText = "Toggle Read Status";
toggelReadStatus.setAttribute("class","toggle");
newDivCard.appendChild(toggelReadStatus);

toggelReadStatus.addEventListener('click', function (event){

    event.stopPropagation();
    let oneParentUp2 = this.parentNode;
    let dataNode2 = oneParentUp2.parentNode;
    let arrayIndex2 = dataNode2.getAttributeNode("data");
    let currentArrayState = myLibrary[arrayIndex2.value].readStatus
    if (currentArrayState === "Not-Read"){
    myLibrary[arrayIndex2.value].readStatus = "Read";
    cardStatus.innerText = "Read";
}
else {
    myLibrary[arrayIndex2.value].readStatus = "Not-Read";
    cardStatus.innerText = "Not-Read";
}
    
} )


for (let i = 0; i < myLibrary.length; i++) {
    
    
    newDiv.setAttribute("data", i);
    
    // Add Event Listener To Button
    
    }

    removeBookBtn.addEventListener('click', function (event, e){
        event.stopPropagation();
        let oneParentUp = this.parentNode;
        let dataNode = oneParentUp.parentNode;
        let arrayIndex = dataNode.getAttributeNode("data");

        myLibrary.splice(arrayIndex.value, 1);
        oneParentUp.parentNode.parentNode.removeChild(oneParentUp.parentNode);
    })

}

function addBookToLibrary(author,title,pageCount,readStatus){

    let bookAlias = new book(author,title,pageCount,readStatus);
    myLibrary.push(bookAlias);
createBookonScreen(author,title,pageCount,readStatus);
 }


function book(author,title,pageCount, readStatus, index) {

    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.readStatus = readStatus;


}
 




function resetForm () {
    entireForm.reset();
    readForm.setAttribute("value", "Not-Read");
}
function moveData () {
    let title = titleForm.value;
    let author = AuthorForm.value ;
    let pageCount = PagesForm.value;
    let readStatus = readForm.value ;
    titleForm.innerText = "";
    addBookToLibrary(author,title,pageCount,readStatus);
    resetForm ();
}



// Button Listener
entireForm.addEventListener("submit", function(event){
    event.stopPropagation();
    event.preventDefault();
    moveData();


});

readForm.addEventListener('click', function(){
    if (readForm.value === "Not-Read"){
        readForm.setAttribute("value", "Read");
    }

    else {
        readForm.setAttribute("value", "Not-Read");
    }
})

librarybtn.addEventListener("click", function (){
    librarybtn.setAttribute('style', 'display: none;');
    entireForm.setAttribute('style', 'display: block;')

})
