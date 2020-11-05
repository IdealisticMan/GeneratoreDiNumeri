// JavaScript Document
function Random() { 
    var notRandomNumbers = [10,11,6,7]; 
    var rnd = Math.floor(Math.random() * notRandomNumbers.length); 
    document.getElementById('tb').value = notRandomNumbers[rnd]; 
}
