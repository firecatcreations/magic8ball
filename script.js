$(document).ready(function(){
	var eightBall = {};
	eightBall.answers = ["Yes", "No", "Definitely", "Count on it", "In your dreams", "Never", "Maybe", "Signs point to yes"];
	$("#answer").hide();
	
	eightBall.askQuestion = function(question) {
		$("#8ball").attr("src"," https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#answer").fadeIn(4000);
		var randomNumber = Math.random();
		var randomNumberArray = randomNumber * 				this.answers.length;
		var randomIndex = 					Math.floor(randomNumberArray);
		var randomAnswer = this.answers[randomIndex];
		$("#answer").text(randomAnswer);
		
		console.log(question);
		console.log(randomAnswer);
};
	
	var onClick = function() {
		$("#answer").hide();
		$("#8ball").attr("src"," https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
		
		setTimeout( function() {
		var question = prompt("Ask a Yes/No Question");
		$("#8ball").effect("shake");
		eightBall.askQuestion(question);
		}, 500);
};
				   
	$("#button").click(onClick);

});