function Stack() {
	this.arr = [];
	this.top = 0;
	this.push = function push(x) {
		this.arr.push(x);
	}
	this.pop = function pop() {
		return this.arr.pop();
	}
	this.peek = function peek() {
		return this.arr[this.top];
	}
	this.isEmpty = function isEmpty() {
		this.length === 0 ? true : false;
	}
}

function Queue() {
	this.arr = [];
	this.top = 0;
	this.enqueue = function enqueue(x) {
		this.arr.push(x);
	}
	this.dequeue = function dequeue() {
		return this.arr.shift();
	}
	this.peek = function peek() {
		return this.arr[this.top];
	}
	this.isEmpty = function isEmpty() {
		this.length === 0 ? true : false;
	}
}

var s = new Stack();
var t = new Queue();
word = prompt("Enter a word: ");
var isPalindrome = true;

for(var i = 0; i < word.length; i++) {
	s.push(word[i]);
	t.enqueue(word[i]);
}

alert("First letter: "+ s.peek());

for(var i = 0; i < word.length && isPalindrome; i++) 
	if(s.pop() != t.dequeue())
		isPalindrome = false;

var result;
isPalindrome ? result = "Yes, it is a " : result = "No, it is not a ";
alert(result + "palindrome");	