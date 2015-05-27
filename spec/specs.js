describe('pigLatin', function(){
  it("should return a string", function(){
    expect(typeof(pigLatin("are"))).to.eq('string');
  });

  it("should add 'ay' to the end of the word if it starts with a vowel", function(){
    expect(pigLatin("are")).to.eq("areay");
  });

  it("should move all first consecutive consonants to the end and add 'ay'", function(){
    expect(pigLatin("strong")).to.eq("ongstray");
  });
});

describe("startsWithVowel", function() {
  it("should identify words starting with a vowel", function() {
    expect(startsWithVowel("are")).to.equal(true);
  });

  it("should identify words starting with a consonant", function() {
    expect(startsWithVowel("bummer")).to.equal(false);
  });

  it("should identify words starting with o", function() {
    expect(startsWithVowel("on")).to.equal(true);
  });
});
