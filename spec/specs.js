describe('piglatin', function(){
  it("should return a string", function(){
    expect(typeof(piglatin("test string"))).to.eq('string');
  });

  it("should add 'ay' to the end of the word if it starts with a vowel", function(){
    expect(piglatin("are")).to.eq("areay");
  });
});

describe("startsWithVowel", function() {
  it("should identify words starting with a vowel", function() {
    expect(startsWithVowel("are")).to.equal(true);
  });

  it("should identify words starting with a consonant", function() {
    expect(startsWithVowel("bummer")).to.equal(false);
  });
});
