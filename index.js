// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

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

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

//Solution 1 - Split, reverse, join, boolean statement
function isPalindrome(str) {
  let newStr =  str.split('').reverse().join('');
  return newStr === str
}

console.log(isPalindrome('racecar')); //true
console.log(isPalindrome('hello')); //false
console.log(isPalindrome('madam')); //true

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse

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

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// Solution 1 - Use an object as a map. For in to loop throug object instead of array
// String split so its an array
// Look at each key value pair in the arry
//Count the number of times letter appears in object

//For of - Loop through array
//For in - Loop through object

function maxCharacter(str) {
  let charMap = {}; //Empty opbject literal
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  console.log(charMap);
  for (let char in charMap) {
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char
    }
  }
  return maxChar
}

console.log(maxCharacter("javascript"));

//Solution 2
function maxCharacter2(str) {
 var max = 0,
     maxChar = '';
  str.split('').forEach(function(char){
    if(str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
     }
  });
  return maxChar;
};

console.log('The maximum character appearing in javascript is ' + ' " ' + maxCharacter2('entrepreneur') + ' " ');

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

//Solution 1

function fizzBuzz() {
  // Loop from 1 to 100
  for (let i = 1; i <= 100; i++) {
      // If and else statements for "Fizz","Buzz", and "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  } 
}

console.log(fizzBuzz());

//Part 2

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

//Solution 1 - For Loop
//In this approach we first separate the sentence into an array of words using the .split() method. We use the variable maxLength to hold the maximum length encountered at each point of iteration using the for-loop. It is initially set to 0.
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}

console.log(longestWord("These are really cool people"));


//Solution 2 - Sort method

//In this solution, we use this method to rearrange the array of words from the sentence in the order of decreasing length, such that the first element in the array becomes the longest word.

function longestWord2(text) {
    var sortedArray = text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}

console.log(longestWord2("Live your best life and prosper"))

//Challenge alternate: Find the Longest Word in a String in JavaScript
function longestWordLength(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

console.log(longestWordLength('Hi there, my name is Brad'));

//Solution 2 - Using 2 steps
// 
function longestWordLength2(str) {
  const arrLength = str.split(' ').map(s => s.length);
  return Math.max(...arrLength);
}

console.log(longestWordLength2('Hi there, my name is Brad'));

//Solution 3 - Using reduce

function longestWordLength3(str) {
  return str.split(' ').reduce((maxNumber, current) => {
    return current.length > maxNumber ? current.length : maxNumber;
  }, 0);
}

console.log(longestWordLength3('Hi there, my name is Looonnng'));

//Solution 4 - Reverse

function longestWordLength4(str) {
  return str
    .split(' ')
    .map(s => s.length)
    .reverse()[0];
};

console.log(longestWordLength4('Hi therrrrre, my name is Don'));