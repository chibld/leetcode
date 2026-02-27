function createHelloWorld() {
    return function(...args) {
        return "Hello World";
    }
}

const f = createHelloWorld();
console.log(f(1, "test"));
