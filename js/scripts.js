function piglatin(phrase) {
  var newString = phrase;
  if (startsWithVowel(newString)){
    newString = newString + "ay";
    return newString;
  } else {
    return newString;
  }
};

function startsWithVowel(phrase) {
  var newString = phrase;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for(var i = 0; i < vowels.length; i++) {
    if (vowels[i] === newString.charAt(0)) {
      return true;
    } else {
      return false;
    }
  };
};
