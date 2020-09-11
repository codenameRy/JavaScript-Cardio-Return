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

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

//Solution 1 While Loop
function chunkArray(arr, len) {
  //Initialize chunked array
  const chunkedArr = [];
  //Set index
  let i = 0; 

  //Loop while index is less than array length
  while (i < arr.length) {
    //Slice out from the index to the index + the chunked length and push onto the chunked array
    chunkedArr.push(arr.slice(i,i + len));
  //increment by chunked length
  i += len;
  }
  return chunkedArr
}

let output2 = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(output2)

//Solution 2 For Each High Order Array
function chunkArray2(arr, len) {
 //Initialize chunked array
  const chunkedArr = [];
// Loop through array
arr.forEach(val => {
  //get last element
  const last = chunkedArr[chunkedArr.length - 1]

  // Check if last and if last length is equal to the chunk len
  if (!last || last.length === len) {
    chunkedArr.push([val])
  } else {
    //Else pass in array of value
    last.push(val);
  }
  });
  return(chunkedArr)
}
 
let output3 = chunkArray2([1, 2, 3, 4, 5, 6, 7], 3);
console.log(output3)


// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

//Solution 1
function flattenArray(arrays) {
return arrays.reduce( (a,b) => {
  return a.concat(b)
})
}

let output4 = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
console.log(output4)

//Solution 2
function flattenArray2(arrays) {
return[].concat.apply([],arrays)
}

let output5 = flattenArray2([[1, 2], [3, 4], [5, 6], [7]]);
console.log(output5)

//Solution 3 Spread Operator
function flattenArray3(arrays) {
return[].concat(...arrays)
}

let output6 = flattenArray3([[1, 6], [3, 1], [8, 6], [7]]);
console.log(output6)

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

//Solution 1 with Main and Helper Functions
function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2)
}
  //Helper function

  function formatStr(str) {
    return str
    //Anything that doesn't match word character, replace with empty string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('') //Convert to arrays
    .sort()
    .join('') //Convert back to string
  }


let output7 = isAnagram('elbow', 'below');
console.log(output7)

let output8 = isAnagram('Dormitory', 'dirty room##');
console.log(output8)

//Solution 2 Function using Every Method
function isAnagramx (str1,str2){
    const arr1 = str1.toLowerCase().split('').sort()
    const arr2 = str2.toLowerCase().split('').sort()
    return arr1.every((value,index) => value === arr2[index])
}

let output9 = isAnagramx('elbow', 'Below');
console.log(output9)

//Solution 3 Variable
let isAnagramx2 = (str1,str2) => str1.toLowerCase().split('').sort().every((value,index) => value ===  str2.toLowerCase().split('').sort()[index])

let output10 = isAnagramx2('Listen', 'siLent');
console.log(output10)

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  //Create new variable for string replace letters a-z gi for global insensitive
  let newStr = str.toLowerCase().replace(/[a-z]/gi, 
  //takes in function as second paramter
  function (char) {
    if ( char === 'z' || char === 'Z') {
      return 'a'
    } else {
      //Use String object and use character code. Add 1 to give us the next letter
      return String.fromCharCode(char.charCodeAt() + 1)
    }
  })

//New string to capitalize vowels. Reg expressions. takes in function as 2nd parameter
  newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  return newStr
}

// Call Function
const output11 = letterChanges('hello there'); 

console.log(output11);

//Part 3

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

//Solution 1 - Using Reduce method ES6 with rest operator
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function addAll (...numbers) {
return numbers.reduce((acc, curr) => acc + curr)
}

console.log(addAll(2,5,6,7)) //20

//Solution 2 - Using forEach method ES6
function addAll2(...numbers) {
let total = 0;
numbers.forEach((num)=> (total += num));
  return total;
}

console.log(addAll2(10,20,30,40)) //100

//Solution 3 - Using splice method. Arguments object and for Loop ES4

function addAll3() {
var numbers = Array.prototype.slice.call(arguments)
var total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i]
  }
  return total;
}

console.log(addAll3(2,5,6,10,30)) // 53

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

//Solution 1
function sumAllPrimes(num) {
  let total = 0;

// Secondly, create nested for loop
  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      //
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }
// Initially loop. Set i = 2 since prime number is greater than 2
  for ( let i = 2; i <= num; i++) {
    //Check for prime and add to total
    if (checkForPrime (i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(20)) //[2, 3, 5, 7, 11, 13, 17 19] = 77

//Solution 2 - Using for Loop and 2 functions
function sumAllPrimes2(num) {
  
    let prime = [];
  //This loop references the function 'isPrime'.
  //It passes the 'i' arg to 'isPrime' (which is 2 first time). 
    for(let i = 2; i <= num; i++) {
      if(isPrime(i)) {
          prime.push(i);
      }      
    }
  
  //Function takes 2 (i) and checks it. If it passes the for loop (j = 2; if j < num(2)), it doesn't
  //pass this, so it returns false
    function isPrime(num) {
      for (let j = 2; j < num; j++) {
        if (num % j === 0) {
          return false;
        }
      }
      return true;
    }  
  
  return prime.reduce((acc, curr) => acc + curr)
  
}

console.log(sumAllPrimes2(10)); // Sum of [2, 3, 5, 7] = 17

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1: arguments, indexOf, filter ES6
function seekAndDestroy(arr) {
  const args = Array.from(arguments);

//Create nested function
  function filterArr(arr) {
    // Return true if its NOT in array. Give true or false
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filterArr);
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

// Solution 2: ...rest, filter & includes
function seekAndDestroy2(arr, ...rest) {
  // Return true if its not in the array
  return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy2([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

//Solution
function sortByHeight(a) {
  const arr1 = []; //Store position in this array of the -1
  const arr2 = []; //Store all the values that are not -1

//val represents each value / i for the position
  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val) ) );

  /* Original a.forEach((val, i) {
    if (val === -1) {
      arr1.push(i);
    } else {
      arr2.push(val);
    }
  });
  */
  
  //Sort values (arr2) lowest to highest
  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
  //Check the position of -1 and numbers in the array
  // console.log(arr1, arr2) 
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

//Solution 2
function sortByHeight2(a) {
// filtering out and sorting all "humans"
const trees = a.filter(v => v !== -1).sort((a, b) => a - b)
// put sorted "trees" back
return a.map(v => v !== -1? trees.shift() : -1)
}

console.log(sortByHeight2([-1, 150, 190, 170, -1, -1, 160, 180]))

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  //Create variable compare
  let compare = str.charCodeAt(0); // first char code of the first letter
  //Initialize variable missing to identify which letter is missing from array
  let missing; 

   str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      //If this is true, we want to move on to the next character code
      ++compare
    } else {
      //Else if the next character code is missing, we want to place that in missing variable. Use String constructor, pass in fromCharCode and pass in compare
      missing = String.fromCharCode(compare)
    }
  });

  return missing;
}

console.log(missingLetters('abcdefgi'));

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  // arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  //Original 
  arr.forEach(num => {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  })

  return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71]))