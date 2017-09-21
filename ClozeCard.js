//the inquirer module will be required to be able to ask the questions.
var inquirer = require('inquirer');

//the question file will be required
var questions = require("./questions.json");

//the cloze file will be required if game selected is cloze
var basic = require("./ClozeCard.json");

//initialize integer variable for queryList
var i = 0;