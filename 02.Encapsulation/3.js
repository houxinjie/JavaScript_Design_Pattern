var Book = function(newIsbn, newTitle, newAuthor) {

    var isbn, title, author; //私有属性

    function checkIsbn(isbn) {} //私有方法

    this.getIsbn = function() { return isbn; } //公开特权方法

    this.setIsbn = function(newIsbn) {
        if(!this.checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
        isbn = newIsbn;
    }

    this.getTitle = function() { return title; }

    this.setTitle = function(newTitle) {
        title = newTitle || 'No title specified';
    }

    this.getAuthor = function(Author) { return author; }

    this.setAuthor = function(newAuthor) {
        author = newAuthor || 'No author specified';
    }

    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);
};

Book.prototype = {
    display: function() {} //公开非特权方法
};
