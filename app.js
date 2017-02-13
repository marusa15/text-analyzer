$(function() {
 $('.js-text-form').submit(function(event) {
 	event.preventDefault();
 	var text = $('#user-text').val();
 //	console.log(text.split(" ").length);
 	//I do realise this is flawed; if there is more than one space
 	console.log(text.split(" "));
 	var wordArray = text.split(" ");
 	var wordCount = text.split(" ").length;
 	var uniqueCount = makeUniqueArray(wordArray).length;
 	var wordAverage = calculateAverageWordLength(wordArray);
 	var sentenceArray = text.match( /[^\.!\?]+[\.!\?]+/g );
 	console.log("sentence: " + sentenceArray);
 	var sentenceAverage = calculateAverageWordLength(sentenceArray);



 	



 	$('.text-report').removeClass('hidden');
 	$('.js-word-count').text(wordCount);
 	$('.js-unique-count').text(uniqueCount);
 	$('.js-average-word-length').text(wordAverage);
 	$('.js-average-sentence-length').text(sentenceAverage);
 });
});

// makes an array of unique words from an array of all words
function makeUniqueArray(array) {
	//return uniqueArray;
    var uniqueArray = array.filter(function(elem, index, array) {
        return array.indexOf(elem) === index;
    });
    return uniqueArray;
 
}

function calculateAverageWordLength(array) {
	var sum = 0;

	for (i=0; i < array.length; i++) {
  	
  		sum += array[i].split("").length;
  		
  		var average = sum / array.length;
  		
  		
	}
	return average;
}





