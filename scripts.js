function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
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