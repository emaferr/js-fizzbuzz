// Scrivo un programma che stampi i numeri da 1 a 100

var text = [];
var i;

for (i = 1; i <= 100; i++) {
    text += i + "<br>";
    if ( (i % 3 == 0) && (i % 5 == 0) ) {
        text += "FizzBuzz" + "<br>";
    } else if (i % 3 == 0) {
        text += "Fizz" + "<br>";
    } else if (i % 5 == 0) {
        text += "Buzz" + "<br>";
    } else {
    }
}
document.getElementById("numeri").innerHTML = text;


