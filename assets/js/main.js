// Scrivo un programma che stampi i numeri da 1 a 100

var outpout = [];

for (var i=1; i <= 100; i++) {
    if (i % 15 == 0) {
        outpout += "<span id='numeri' style='color:#FF0000;'>FizzBuzz</span>"  + "<br>";
    }else if (i % 3 == 0){
        outpout += "<span id='numeri' style='color:#008000;'>Fizz</span>"  + "<br>";

    }else if (i % 5 == 0){
        outpout += "<span id='numeri' style='color:#0000FF;'>Buzz</span>"  + "<br>";
    }else{
        outpout += i + "<br>";
    }

}

document.getElementById("numeri").innerHTML = outpout;




