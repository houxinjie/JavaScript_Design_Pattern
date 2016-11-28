var Book = (function() {

    var numOfBooks = 0; //静态私有属性

    function checkIsbn(isbn) {} //静态私有方法

    return function(newIsbn, newTitle, newAuthor) {
        var isbn, title, author; //私有属性

        this.getIsbn = function() { return isbn; }; //公开特权方法
        this.setIsbn = function(newIsbn) {
            if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
            isbn = newIsbn;
        };
        this.getTitle = function() { return title; };
        this.setTitle = function(newTitle) {
            title = newTitle || 'No title specified';
        };
        this.getAuthor = function() { return author;};
        this.setAuthor = function(newAuthor) {
            author = newAuthor || 'No author specified';
        };

        numOfBooks++;
        if(numOfBooks > 50) throw new Error('Book: Only 50 instances of Book can be created.');

        this.setIsbn(newIsbn);
        this.setTitle(newTitle);
        this.setAuthor(newAuthor);
    };

}());

Book.convertToTitleCase = function(inputString) {}; //静态公开方法

Book.prototype = {
    display: function() {} //公开非特权方法
};
