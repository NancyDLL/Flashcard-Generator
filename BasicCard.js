//the inquirer module will be required to be able to ask the questions.
var inquirer = require('inquirer');

//the question file will be required
var questions = require("./questions.json");

//the cloze file will be required if game selected is cloze
var cloze = require("./ClozeCard.js");

//initialize integer variable for queryList
var i = 0;


//This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
module.exports = runBasic;

//The constructor needed for front and back of the basic card.
function BasicCard (basicFront, basicBack){
	if (this instanceof BasicCard){
		this.basicFront = basicFront;
		this.basicBack = basicBack;
	} else {
		return new BasicCard (basicFront, basicBack);
	}
};

//when user types in "node basiccard basic" the game function starts
if(process.argv[2] === "basic"){
	runBasic();
	}
	//function for running the actual basic game
	function runBasic(){
		//set variable for card selection
		var questionToAsk = new BasicCard(questions.queryList[i].basicFront, questions.queryList[i].basicBack);
		//prompt to ask questions and get responses
		inquirer.prompt([
			{
				type: "input",
				name: "userAnswer",
				message: questionToAsk.basicFront
			}
		//evaluate the responses entered by the user
		]).then(function(response) {
			if(response.userAnswer === questionToAsk.basicBack){
				console.log("Correct answer.");
			} else {
				console.log("Incorrect answer. The correct answer is " + questionToAsk.basicBack);
			}
			//if condition to keep asking questions until all the way through the list
			if(i<questions.queryList.length -1) {
				i++;
				runBasic();
			}
		})
	}
	//runBasic();




