function Stack() {
	this.arr = [];
	this.top = 0;
	this.push = function push(x) {
		this.arr.push(x);
	}
	this.pop = function pop() {
		return this.arr.pop();
	}
	this.isEmpty = function isEmpty() {
		this.length === 0 ? true : false;
	}
}



var s = new Stack();
var t = new Stack();
word = prompt("Enter a word: ");
var isPalindrome = true;


for(var i = 0; i < word.length; i++) {
	s.push(word[i]);
	t.push(word[word.length - 1 - i]);
}

for(var i = 0; i < word.length && isPalindrome; i++) 
	if(s.pop() != t.pop())
		isPalindrome = false;

var result;
isPalindrome ? result = "Yes, it is a " : result = "No, it is not a ";
alert(result + "palindrome");
