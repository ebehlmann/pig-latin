// For words that start with a vowel, add "ay" to the end

var isVowel = function(word) {
	var char = word.slice(0,1);
	// var char = word[0];
	return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
}

var isCon = function(word) {
	return !isVowel(word);
}

var isQ = function(letter) {
	if (letter === 'Q' || letter === 'q') {
		return true;
	} else {
		return false;
	}
}

var isU = function(letter) {
	if (letter === 'U' || letter === 'u') {
		return true;
	} else {
		return false;
	}
}

var addAy = function(word) {
	if (isVowel(word)) {
		return word + 'ay';
	} else {
		return false;
	}
}

var moveCon = function(word) {
	if (isVowel(word)===false) {
		var position = -1;
		for (var i=0; i<word.length; i++) {
			if (isCon(word.charAt(i))) {
				position = position + 1;
			} else {
				break;
			}
		}
		return word.slice(position+1, word.length) + word.slice(0, position+1) + 'ay';	
	} else {
		return false;
	}
}

var wordBreak = function(sentence) {
	return sentence.split(' ');
};

var pigLatin = function(sentence) {
	var pigLatinized = [];
	var words = wordBreak(sentence);
	words.forEach(function(word) {
		if (isCon(word)) {
			word = moveCon(word);
			pigLatinized.push(word);
		} else {
			word = addAy(word);
			pigLatinized.push(word);
		};
	});
	return pigLatinized.join(' ');
};

$(document).ready(function() {
	$("form#input").submit(function(event) {
		var sentence = $("#english").val();
		var translated = pigLatin(sentence);
		
		$("#result").empty().append(translated);
		
		$("#result").show();
		
		event.preventDefault();
	});
});