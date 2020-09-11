// Reverse a string
// Solution 3 - Decrementing for loop
function reverseString3(str) {
  let revString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
};

console.log('Reverse of trappy is '+ reverseString3("trappy"))
console.log('Reverse of island is ' + reverseString3("island"))

//Palindrome
//Solution 1 - Split, reverse, join, boolean statement

function isPalindrome(str) {
  let newStr =  str.split('').reverse().join('');
  return newStr === str
}

console.log(isPalindrome('racecar')); //true
console.log(isPalindrome('hello')); //false
console.log(isPalindrome('madam')); //true

 //Reverse an Integer

 //Solution 1 - Higher order functions split, reverse, join, parseInt

function reverseInteger(int) {
   let revInt = int.toString().split('').reverse().join('');
   return parseInt(revInt) * Math.sign(int)
 };

 console.log(reverseInteger(325));
 console.log(reverseInteger(-901));
 console.log(reverseInteger(246));

 //Solution 2 - Spread operator with reverse, join, parseInt, and Math.sign

 function reverseInteger2(int) {
 let revInt = [...int.toString()].reverse().join('');
 return parseInt(revInt) * Math.sign(int)
 };

console.log(reverseInteger2(746));
 console.log(reverseInteger2(-1286));
 console.log(reverseInteger2(402));
  
//Capitalize the first letter
/*Solution 1 - new variable = lowercase, split, 
middle - For loop incrementing, substrings, and
End join*/

function capFirstLetter(str) {
  let newCap = str.toLowerCase().split(' ');
  for (let i = 0; i < newCap.length; i++) {
    newCap[i] = newCap[i].substring(0,1).toUpperCase() + newCap[i].substring(1)
  }
  return newCap.join(' ');
}

console.log(capFirstLetter('i love to live'));

//Solution 2 - Using higher order map method
/* 1) toLowerCase, split(' '). map() with substring + join
*/

function capFirstLetter2(str) {
  return str.toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ');
}

console.log(capFirstLetter2('we living the best life'));
