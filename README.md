# Introduction
For the test we're going to ask you to implement a fun little app that gets data from a public API and does dom manipulation to add/update data onto the page. The basics of a single page application!

We are going to use an open API for Game of Thrones data (try to forget about season 8) to function as a backend that delivers data to you. The app will help George R.R. Martin decide which lord to kill next by randomly selecting the current lord of one of the great houses to replace.

You can read documentation of the API here: https://anapioficeandfire.com/, but we will provide the endpoints for you. The end points you will need are:
- For a house: `https://anapioficeandfire.com/api/houses/<id>`. This will give you a JSON object with multiple properties of the house, you will need the `name`, the `currentLord` and the array of `swornMembers`.
- For a character: `https://anapioficeandfire.com/api/characters/<id>`. This will give you a JSON object with multiple properties of the character, you will need the `name` property.

# Goal / Requirements
Read the instructions carefully and tackle them one by one, in the end you should have a project with that works as follows: https://robvk.github.io/js3-test-class29/

After finishing the project, look at the ANSWERME.md file to answer some questions about the code you just wrote in the project.

You can adjust the project files to your wishes. *BUT* the `index.html` file should be left alone as much as possible. You *are* allowed (and encouraged) to add/edit script or css files if you want. Part of the project is to add html using javascript, so don't add any html tags other than importing other files.

Below is a checklist of functionality in slightly smaller steps for you. You can follow this or go your own way, as long as you can check all the boxes at the end. You may also want to do it in smaller steps, that is totally up to you.
- [ ] Got the list of house ids from the `data.js` file and added the name of the house to the dom (via javascript).
  - TIP: `https://anapioficeandfire.com/api/houses/<id>` is the url to grab the data of a house. In that data there is a `name` field that gives the name of the house
  - TIP: in the `index.html` there is a comment that identifies the structure and classnames the css expects to make it look the same as the example. You do not need to follow this, but it will be less work to not have to worry about the way it looks.
- [ ] Added the current lord name of the house to the html
  - TIP: in the data of the house you get from the API, the property `currentLord` is the character you need to put in the html. This is a url to grab data.
  - TIP: `https://anapioficeandfire.com/api/characters/<id>` is the url to grab the data of a character. It has a `name` field that gives their name.
  - WATCH OUT: there is a house that does not have a currentLord set, make sure you deal with that in some way
- [ ] Added functionality that when the button with id `kill-random-lord-button` is clicked the lord of a random house in the list is replaced with someone in the `swornMembers` list of that house
  - TIP: look up how to pick a random house from the list in the `data.js` file
  - TIP: in the data of the house you get from the API, the property `swornMembers` gives you a list of character urls that can be used to grab the names

# Step by step help
What to do:
1. Thoroughly read through this file to understand whatand the `ANSWERME.md` file to get a feel of what needs to happen
2. Think of your solution, what is your approach going to be
3. Start programming (the fun part!)
4. Check the functionality list to ensure that you have built everything that is expected
5. Go over your code and ensure that it is clean (code clarity / modularisation). That means:
  - No more `console.log` test lines
  - No commented out code
  - Comments for functions/lines of code that can be unclear for other programmers
  - Are the variables/functions named nicely
  - Check that the code is split logically (no repeated code in multiple functions, functions that are used for the same step close together in a file or in a separate file)
6. Answer the questions in the `ANSWERME.md` file
7. Upload your final files to your github
8. Send the link to your github project to @Rob van Kruijsdijk on slack

# Grading
What you will be graded on:
- That the end project works as expected (the functionality list above and the gif show what is expected) [up to 8 points]
- That the code is nicely organised and clean (step 5) [up to 4 points]
- The answers to the questions [up to 8 points]

The final grade will then be those points divided by 20 (to get a number between 1 and 10).

# Rules during the exam
1. You are allowed to use Google
2. In case you copy (a line of) code from somewhere else, you must place a reference. Otherwise it is seen as plagiarism. 
3. No contact with others during the test. 
4. Do not share your test with anybody
5. Hand in your work on time. You have 3 hours in total.
