/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;

    if (len1 != len2) {
        return false;
    } else if (len1 == 0 & len2 == 0) {
        return true;
    }

    let possible = false;

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (str1[i] == str2[j]) {
                possible = true;
                break
            } else {
                possible = false;
            }
        }
    }
    return possible;
}

if (isAnagram("", "")) {
    console.log("Yes");
} else {
    console.log("No");
}