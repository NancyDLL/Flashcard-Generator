//the inquirer module will be required to be able to ask the questions.
var inquirer = require('inquirer');

//the question file will be required
var questions = require("./questions.json");

// will the user selecet basic or cloze first from node? I beleive that I need a process argv statement for basic or cloze.
//This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
module.exports = BasicCard;

//The constructor should accept two arguments: front and back.
function BasicCard(front, back){
	//The constructed object should have a front property that contains the text on the front of the card.
	this.front = front;
	//The constructed object should have a back property that contains the text on the back of the card.
	this.back = back;
};

var question1 = new BasicCard("What Kansas City park, at 1,805 acres, is more than twice the size of Central Park in New York City?","Swope Park");
//console.log(question1);

var question2 = new BasicCard("What largest maker of boxed chocolate in the world, has been based in KC since 1932?","Russell Stover");
//console.log(question2);

var question3 = new BasicCard("What famous animator opened his first studio, Laugh-O-Gram Studios, in Kansas City?","Walt Disney");
//console.log(question3);

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
//I do not understand what the module.export does?
// do the questions need to held in a separate file?

