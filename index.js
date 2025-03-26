// Reverse String
function reverseString() {
    let str = document.getElementById("stringInput").value;
    let reversed = str.split("").reverse().join("");
    document.getElementById("reversedOutput").innerText = "Reversed: " + reversed;
}

// Palindrome Checker
function checkPalindrome() {
    let num = document.getElementById("numberInput").value;
    let reversed = num.split("").reverse().join("");
    let result = num === reversed ? "It's a palindrome!" : "Not a palindrome.";
    document.getElementById("palindromeOutput").innerText = result;
}

// Tip Calculator
function calculateTotal() {
    let subtotal = parseFloat(document.getElementById("billSubtotal").value);
    let tipPercent = parseFloat(document.getElementById("tipPercentage").value);
    let total = subtotal + (subtotal * tipPercent / 100);
    document.getElementById("totalOutput").innerText = "Total: $" + total.toFixed(2);
}