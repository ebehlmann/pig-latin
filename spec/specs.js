describe('isVowel', function() {
	it('Should be false if first letter is not a, e, i, o, u', function() {
		isVowel('w').should.equal(false);
	});
	
	it('Should be true if first letter is a, e, i, o, u', function() {
		isVowel('a').should.equal(true);
	});
});

// describe('addAy', function() {
// 	it('Should not add ay to a word that does not start with a vowel', function() {
// 		addAy('word').should.equal(false);
// 	});
// 
// 	it('Should add ay to a word that starts with a vowel', function() {
// 		addAy('apple').should.equal('appleay');
// 	});
// });

describe('moveCon', function() {
	it('Should add ay to a word that starts with a vowel', function() {
		moveCon('apple').should.equal('appleay');
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
		wordBreak('I like apples').should.deep.equal(['I', 'like', 'apples']);
	});
});

describe('pigLatin', function () {
	it('Should return a pig-Latinized version of the sentence', function() {
		pigLatin('I like apples').should.equal('Iay ikelay applesay');
	});
});

describe('isQ', function() {
	it('Should return true if the letter is a q', function() {
		isQ('q').should.equal(true);
	});
	
	it('Should return false if the letter is not a q', function() {
		isQ('e').should.equal(false);
	});
});

describe('isU', function() {
	it('Should return true if the letter is a u', function() {
		isU('u').should.equal(true);
	});
	
	it('Should return false if the letter is not a u', function() {
		isU('e'). should.equal(false);
	});
});