interface MyInterface {
    public function interfaceMethod($argumentOne, $argumentTwo);
}

class Myclass implements MyInterface {
    public function interfaceMethod($argumentOne, $argumentTwo) {
        return $argumentOne . $argumentTwo;
    }
}
