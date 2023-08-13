//Closure is a function that retains access 
//to variables from its outer
//scope even after the outer function has finished executing
function outerFunction() {
    var outerVariable = 'Outer value';
    function innerFunction() {
        var innerVariable = 'I am inner';
        // Accesses both the outerVariable and innerVariable from its lexical scope
        console.log(outerVariable + ' and ' + innerVariable);
    }
    return innerFunction;
}

// Assigning returned inner function to a variable
var closure = outerFunction();
closure();

