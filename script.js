document.addEventListener('DOMContentLoaded', function() {

    const r1Text = document.getElementById("r1").textContent;

    var r1Chars = [];

    for (var i = 0; i < r1.text.length; i++) {
        r1Chars.push(r1Text.charAt(i));
    }

    document.querySelector('body').onkeypress = function() {
        var key_pressed = event.which || event.keyCode;
        if (key_pressed == 97) {
            toggleColor("#r1");
        }
        else if (key_pressed == 115) {
            toggleColor("#r2");
        }
        else if (key_pressed == 100) {
            toggleColor("#r3");
        }
    };
});

function toggleColor(id) {
    const color = document.querySelector(id).style.color;

    if(color == "red") {
        document.querySelector(id).style.color = "white";
    }
    else{
        document.querySelector(id).style.color = "red";
    }

}

function showKeyCode () {
    var character = document.getElementById("character").value.substring(0, 1);
    var code = document.getElementById("character").value.charCodeAt(0);
    var msg = "The Key Code for the \"" + character + "\" character is " + code + ".";
    alert(msg);
}