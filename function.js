function sumbmitAnswers(){
	var total = 5;
	var score = 0;
	
	//Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	//Validation
	for(i = 1; i <= total;i++){
		if (eval('q+1') == null || eval(q+1)==''){
			alert('You missed question' + i );
			return false;
		}
	}
	
	//Correct Answers
	var answers = ["d","d","e","a","e"];

	//Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i-1]){
			score++;
		}
	}
	
	//Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h1>You scored <span>' + score + '<span/> out of <span>' + total + '</span></h1>';
	alert('You scored' + score + 'out of ' + total );
	
	return false
	
}