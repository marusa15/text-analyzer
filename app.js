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

function makeUniqueArray(array) {
	var uniqueArray = [];
	for (i=0; i < array.length; i++) {
	    if (uniqueArray.indexOf(array[i]) === -1) {
	      uniqueArray.push(array[i]);
	    }
    }
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

// If I insert one word or nothing with a sentence in it, it doesn't work.
/* I get this error: app.js:43 Uncaught TypeError: Cannot read property 'length' of null
Why is there no test if user actually inserted the correct input?

To do:
-refactor both for loops
-reduce excess code -> re-use

bar bar foo keep keep keep

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Stop! Help? Moving on!!!

*/



