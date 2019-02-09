count = 0;
function add() {
    var countValue = document.getElementById('countValue');
    var a = countValue.value;
    var counter = document.getElementById("counter").textContent;
    var total = Number(a) + Number(counter);
    document.getElementById("counter").innerHTML = total;
}

function subtract() {
    var countValue = document.getElementById('countValue');
    var a = countValue.value;
    var counter = document.getElementById("counter").textContent;
    var total = Number(counter) - Number(a);
    document.getElementById("counter").innerHTML = total;
}