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

The removeFromArray function will take two arguments: an "array" AND an "arrayElement" that contains an element from said array<br>
Then find the position of the element within the array, by using "var arrayPosition = array.indexOf(arrayElement)"<br>
Then to remove the element from the array, do "array.splice(arrayPosition, 1)"<br>
This will return a new array with that element removed<br>
Add "return array" on the last line to return the array to global<br>
