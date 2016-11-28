function extend(subClass, superClass) {
    var F = function() {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superclass = superClass.prototype; //增加superClass属性
    if(superClass.prototype.constructor === Object) {
        superClass.prototype.constructor = superClass;
    }
}

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

function Author(name, books) {
    Author.superclass.constructor.call(this, name);
    this.books = books;
}

extend(Author, Person);
Author.prototype.getBooks = function() {
    return this.books;
};

Author.prototype.getName = function() {
    var name = Author.superclass.getName.call(this);
    return name + ', Author of ' + this.getBooks().join(', ');
}
