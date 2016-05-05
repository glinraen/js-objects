

//## Independent Monkey Exercise (20 minutes)

//- Create a `monkey` object, which has the following properties:

  //- `name`
  //- `species`
  //- `foodsEaten`

var eatSomething = function() { 
  console.log("a ripe banana");
};

var introduce = function() {
  console.log("Hi, I am ", + name ". I am a " + species + "I've eaten a " + foodsEaten + ".") ;
};

var monkeyOne = {"name": "Mickey", "species": "monkey", "foodsEaten": "bananas"};
monkeyOne.eatSomething();
monkeyOne.introduce();

var monkeyTwo = {"name": "Davey", "species": "monkey", "foodsEaten": "bananas"};
monkeyTwo.eatSomething();
monkeyTwo.introduce();

var monkeyThree = {"name": "Peter", "species": "monkey", "foodsEaten": "bananas"};
monkeyThree.eatSomething();
monkeyThree.introduce();



  //And the following methods:

  //- `eatSomething(thingAsString)`
  //- `introduce`: producers a string introducing itself, including its name, species, and what it's eaten

//- Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

//- Exercise your monkeys by retrieving their properties and using their methods. 
//Practice using both syntaxes for retrieving properties (dot notation and brackets).
