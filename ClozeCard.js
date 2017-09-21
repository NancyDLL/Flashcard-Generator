//the inquirer module will be required to be able to ask the questions.
var inquirer = require('inquirer');

//the question file will be required
var questions = require("./questions.json");

//the basic file will be required if game selected is basic
var basic = require("./BasicCard.json");

//initialize integer variable for queryList
var i = 0;

//This file should define a Node module that exports a constructor for creating cloze flashcards, e.g.:
module.exports = ClozeCard;

//The constructor needed for front and back of the cloze card.
function ClozeCard (clozeFront, clozeBack){
	if (this instanceof ClozeCard){
		this.clozeFront = clozeFront;
		this.clozeBack = clozeBack;
		this.partialText = function(){
			if(this.clozeFront.includes(this.clozeBack)){
				return this.fullText.replace(this.clozeBack, "____________");
			}else{
				console.log("An error has occured.")
			}
		};
	} else {
		return new ClozeCard (clozeFront, clozeBack);
	}
};

//when user types in node the game function starts
if(process.argv[2] === "cloze"){
	runCloze();
	}
	//function for running the actual cloze game
	function runCloze(){
		//set variable for card selection
		var questionToAsk = new ClozeCard(questions.queryList[i].clozeFront, questions.queryList[i].clozeBack);
		//prompt to ask questions and get responses
		inquirer.prompt([
			{
				type: "input",
				name: "userAnswer",
				message: questionToAsk.clozeFront
			}
		//evaluate the responses entered by the user
		]).then(function(response) {
			if(response.userAnswer === questionToAsk.clozeBack){
				console.log("Correct answer.");
			} else {
				console.log("Incorrect answer. The correct answer is " + questionToAsk.clozeBack);
			}
			//if condition to keep asking questions until all the way through the list
			if(i<questions.queryList.length -1) {
				i+=1;
				runCloze();
			}
		});
	}
