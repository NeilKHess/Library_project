let myLibrary = [];

function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(){

}

function displayAllBooks(){
    let i = 0;
    while (i < myLibrary.length){
        console.log(myLibrary[i]);
        i++;
    }
}

book.prototype.getTitle = function() {
    console.log(this.title)
}

book.prototype.getAuthor = function() {
    console.log(this.author)
}

book.prototype.getPages= function() {
    console.log(this.pages)
}

book.prototype.getStatus = function() {
    console.log(this.status)
}
