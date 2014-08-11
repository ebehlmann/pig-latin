var isVowel = function(letter) {
	return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(letter) !== -1;
}

var isQ = function(letter) {
	return (letter === 'Q' || letter === 'q'); 
}

var isU = function(letter) {
	return (letter === 'U' || letter === 'u');
}

var moveCon = function(word) {
	var position = -1;
	for (var i=0; i<word.length; i++) {
		if (isQ(word.charAt(i))) {
			position = position + 1;
			if (isU(word.charAt(i+1))) {
				position = position + 1;
			}
		} else if (isVowel(word.charAt(i))===false) {
			position = position + 1;
		} else {
			break;
		}
	}
	return word.slice(position+1, word.length) + word.slice(0, position+1) + 'ay';	
}

var wordBreak = function(sentence) {
	return sentence.split(' ');
};

var pigLatin = function(sentence) {
	var pigLatinized = [];
	var words = wordBreak(sentence);
	words.forEach(function(word) {
		word = moveCon(word);
		pigLatinized.push(word);
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