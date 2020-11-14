# Exercise 02 - Reverse a String.

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

You will notice in this exercise that there are multiple tests, after making the first one pass, enable the others one by one by deleting the `x` in front of the `it()` function.




## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.




/* 

My Pseudo Code:

reverseString will have an argument that takes a string
Put the string in variable "userString"
Split the string into an array using var arrayString = userString.split("");
Make a loop: for (let i = 0; i < arrayString.length;)
Access the last element of the array by using var lastElement = arrayString.pop()
Declare a variable outside the loop that represents a blank string: finalString = "";
Place letter into finalString = finalString + lastElement;
Repeat loop until there are no more letters

*/