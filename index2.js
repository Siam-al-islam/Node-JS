const people = ['John', 'Doe', 'Jane', 'Doe'];

let a = 4;
function test() {
    console.log("test");
}
module.exports = people;

(function () {
    var a = 3;
})(); // IIFE (Immediately Invoked Function Expression) - this function will be executed immediately after it has been defined (it will not be stored in memory) and it will not be accessible from the outside.