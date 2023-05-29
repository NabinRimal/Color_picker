let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let Colval;

const changed1 = () => {
    let colorbox = document.getElementById("col").value;
    document.body.style.background = colorbox;
    Colval = document.getElementById("text1").value = colorbox;
}

const changed2 = () => {
    let textarea = document.getElementById("text").value;
    document.body.style.background = textarea
}

button1.addEventListener("click", changed1);
button2.addEventListener("click", changed2);