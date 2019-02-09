count = 0;
function add() {
    var countValue = document.getElementById('countValue');
    var a = countValue.value;
    var counter = document.getElementById("counter").textContent;
    var c = Number(counter);
    var total = Number(a) + Number(c);
    document.getElementById("counter").innerHTML = total;


}

function subtract() {
    var countValue = document.getElementById('countValue');
    var a = countValue.value;
    var counter = document.getElementById("counter").textContent;
    var c = Number(counter);
    var total = Number(c) - Number(a);
    document.getElementById("counter").innerHTML = total;
}