describe('isVowel', function() {
	it('Should be false if first letter is not a, e, i, o, u', function() {
		isVowel('word').should.equal(false);
	});
	
	it('Should be true if first letter is a, e, i, o, u', function() {
		isVowel('apple').should.equal(true);
	});
});

describe('addAy', function() {
	it('Should not add ay to a word that does not start with a vowel', function() {
		addAy('word').should.equal(false);
	});

	it('Should add ay to a word that starts with a vowel', function() {
		addAy('apple').should.equal('appleay');
	});
});

describe('moveCon', function() {
	it('Should leave alone a word that starts with a vowel', function() {
		moveCon('apple').should.equal(false);
	}); 
	
	it('Should move first consonants to the end and add ay', function() {
		moveCon('word').should.equal('ordway');
	});
	
	it('Should move first set of consonants to the end and add ay', function() {
		moveCon('wheel').should.equal('eelwhay');
	}); 
});

describe('wordBreak', function() {
	it('Should split words in a sentence into an array', function() {
		wordBreak('I like apples').should.equal(['I', 'like', 'apples']);
	});
});

describe('pigLatin', function () {
	it('Should return a pig-Latinized version of the sentence', function() {
		pigLatin('I like apples').should.equal('Iay ikelay applesay');
	});
});