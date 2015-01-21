var letters = []; // this is our stack
var rword = "";
rword = prompt("Enter a word: ");
var word = readline();
for (var i = 0; i < word.length; i++) {
   rword += letters.pop(); // pop off the stack in reverse order
}
if (rword === word) {
   print(word + " is a palindrome.");
}
else {
   print(word + " is not a palindrome.");
}