interface MyInterface {
    string interfaceMethod(string argumentOne, String argumentTwo);
}

class Myclass : MyInterface {
    public string interfaceMethod(string argumentOne, string argumentTwo) {
        return argumentOne + argumentTwo;
    }
}
