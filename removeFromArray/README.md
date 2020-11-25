# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

the first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  

<br>
<br>

<h1 style="font-size:2em">My Pseudo Code:</h1>

To pass the removeFromArray function an array, and sequentually, with a variable number of arguments, we will need to utilize the arguments object.<br><br>
(1) First, the removeFromArray function needs to be declared with a single argument that represents the placeholder of the array that will be modified.<br><br>
(2) Then, a for loop is needed to analyze each additional argument that is called.<br><br>
(3) The for loop will stop at the last called argument.<br><br>
(4) Lastly, the modified array is then returned to the function caller.<br><br>