// Immediately-Invoked Functions Expressions (IIFE)

// IIFE allows you to keep your code private, so no matter if your function has variables that shared the name with 
// other variables outside it, the function will run independently of those outside functions, as will those outside
// varaibles.
// Basically what you're doing is tricking the JS parser into thinking you have an expression and not a declaration.
// You do this by wrapping the entire function inside a parentheses, then add '()' to call such function.
// If you want to pass arguments you place them in these parentheses.
// Remember that IIFE can only be used once due to not being assigned to variables.
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);