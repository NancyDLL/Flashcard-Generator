//the inquirer module will be required to be able to ask the questions.
var inquirer = require('inquirer');

//the question file will be required
var questions = require("./questions.json");

//the cloze file will be required if game selected is cloze
var cloze = require("./ClozeCard.json");

//initialize integer variable for queryList
var i = 0;


//This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
module.exports = BasicCard;

//The constructor needed for front and back of the basic card.
function BasicCard (basicFront, basicBack){
	if (this instanceof BasicCard){
		this.basicFront = basicFront;
		this.basicBack = basicBack;
	} else {
		return new BasicCard (basicFront, basicBack);
	}
};


//prompt to ask questions and get responses
inquirer.prompt([
	{
		type: "input",
		name: "question1",
		message: BasicCard.question1.front
	}
	]).then(function(userAnswer) {
		console.log(userAnswer);
});

//Questions:
//Is it better to use JSON(require) or JS(export) for question file? 
//What does the module.export do, and why is it somethimes at the top of the file and sometimes the bottom?


