1. In the project there was a house that did not have a lord. Which house was this? And what did you do to deal with this situation?

The house was (House Arryn of the Eyrie).
I did if statemet when fetch the api, if the house doesn't have any lord it will execute "addNewLord" function which will search for a new lord
from the "sworn Members" list.

2. You could have used XMLHttpRequest, the library axios or the fetch API to get the data from the server. And you could have used callbacks, async/await and/or promises. What did you use and why?
(_TIP: There is no right way, all have their advantages and disadvantages. Explain your decision making listing the advantages/disadvantages of each technology/approach_)

I chose fetch API because it is modern way to handle ajax request, and it is also return promise which make it more easy to handle and easy to handle errors and it doesn't required any extra libraries.

on the contrast with axios which requred extra library althought it is easy to handle but I perffered "fetch" way.

I didn't perferred XMLHttpRequest althought it is combatiblie with old browsers but it is old and long structered and it doesn't return promises , plus I believe not many peoples use old browsers. 


3. Let's say you were a huge fan of Object Oriented Programming and the api offered the option to get all the data you needed at once. What classes would you make and what functions would they have?
(_TIP: You do not have to write out the implementation of the functions (but you can if it makes it easier to think it through)_)
(_TIP: If you are unsure between two decisions, then write a comment with the alternative you considered but decided against with arguments. There is again no one correct answer here, but we want to see you think in an OOP way_)
(_TIP: If you want the code highlighting, it is also fine to create a `.js` file and then write down here what file to look at_)

Example (taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
```
class GameOfThronesHouses {
  constructor(name, region, coatOfArms, words, titles, seats, currentLord, swornMembers) {
    this.name = name;
    this.region = region;
    this.coatOfArms = coatOfArms;
    this.words = words;
    this.titles = titles;
    this.seats = seats;
    this.currentLord = currentLord;
    this.swornMembers = swornMembers;
  }

  name() {
    return this.name;
  }

  region() {
    return this.region;
  }

  coatOfArms() {
    return this.coatOfArms;
  }

  swornMembers() {
      let swornMember = '';
      const len = this.swornMembers.length;
      for (let i = 0; i < len; i++) {
          swornMember += `${this.swornMembers[i]}.`;
      }
      return swornMember
  }
}
