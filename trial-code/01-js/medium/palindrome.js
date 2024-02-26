/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Removes punctuation marks while keeping alphanumeric characters
  const newStr = str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '');

  const lowerStr = newStr.toLowerCase();

  return lowerStr === lowerStr.split('').reverse().join('');
}

console.log(isPalindrome("Able, was I ere I saw Elba!"));
console.log(isPalindrome("Eva, can I see bees in a cave?"));
console.log(isPalindrome("Mr. Owl ate my metal worm."));
console.log(isPalindrome("A man, a plan, a canal. Panama"));