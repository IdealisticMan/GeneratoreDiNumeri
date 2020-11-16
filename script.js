// JavaScript Document
function Random() { 
var notRandomNumbers = [1, 1, 2, 2, 3, 3, 3, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 9, 9, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 16, 16, 17, 17, 18, 18, 18];
var rnd = Math.floor(Math.random() * notRandomNumbers.length); 
document.getElementById('tb').value = notRandomNumbers[rnd];
}
