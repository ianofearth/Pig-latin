function pigLatin(word) {
  if (startsWithVowel(word)) {
    return word + "ay"
  } else {
    var splitWord = word.split("");

    while(!startsWithVowel(splitWord.join(""))) {
      splitWord.push(splitWord.shift());
    }
    return splitWord.join("") + "ay";


    // splitWord.forEach(function(letter) {
    //   if (!startsWithVowel(word)) {
    //     splitWord.push(splitWord.shift());
    //     debugger;
    //   } else {
    //     return splitWord.join("") + "ay";
    //   }
    // })
  }
}


// function pigLatin(word) {
//   if (startsWithVowel(word)) {
//     return word + "ay"
//   } else {
//     var splitWord = word.split("");
//     var newSplitWord = splitWord.slice()
//     var finalSplitWordStart = []
//     var finalSplitWordEnd = []
//     splitWord.forEach(function(letter) {
//       if (!startsWithVowel(newSplitWord[0])) {
//         var firstLetter = newSplitWord[0];
//         newSplitWord.shift()
//         debugger;
//         finalSplitWordEnd.push(firstLetter);
//       } else {
//         newSplitWord.forEach(function(letter) {
//         finalSplitWordStart.push(letter);
//         });
//       }
//     });
//     var finalSplitWord = finalSplitWordEnd.concat(finalSplitWordStart);
//     return finalSplitWord.join("") + "ay";
//   }
// }
//
// function pigLatin(word) {
//   if (startsWithVowel(word)) {
//     // return word + "ay";
//     return word + "ay"
//   } else {
//     var splitWord = word.split("");
//     var finalWord;
//     splitWord.forEach(function(letter) {
//       if (!startsWithVowel(letter)) {
//         var firstLetter = splitWord.shift();
//         splitWord.push(firstLetter);
//         finalWord = splitWord.join("");
//       } else {
//         debugger;
//         return finalWord + "ay";
//       }
//     });
//   }
// }

function startsWithVowel(phrase) {
  var newString = phrase;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (newString.charAt(0) === "a"){
    return true;
  } else if (newString.charAt(0) === "e"){
    return true;
  } else if (newString.charAt(0) === "i"){
    return true;
  } else if (newString.charAt(0) === "o"){
    return true;
  } else if (newString.charAt(0) === "u"){
    return true;
  } else {
    return false;
  }
}

  // vowels.forEach(function(vowel) {
  //   if (newString.charAt(0) === "a") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
// };
