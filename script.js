const myLibrary = [];

function addBookToLibrary(author,title,pageCount,readStatus){
    let bookAlias = new book(author,title,pageCount,readStatus);
    myLibrary.push(bookAlias);

 }


function book(author,title,pageCount, readStatus) {
this.author = author;
this.title = title;
this.pageCount = pageCount;
this.readStatus = readStatus;

}
 

addBookToLibrary("David Reagny", "How to Survive Women", 55, false);
addBookToLibrary("Dick Moby", "How to Lose Weight", 78, true);

console.log(myLibrary[0]);