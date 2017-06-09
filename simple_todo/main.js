// create a ToDo list that does the following:
// - user inputs text to a field
// - user input is added as a <li>
// - <input> field clears on "enter"
// - <li> text strike-through on hover
// - fade li to hide/remove on click

console.log("linked!");

//grab <input> element
var inputTag = document.getElementsByClassName('new-todo');

//grab <ul> element
var ulParent = document.getElementsByClassName('todo-list');

inputTag.addEventListener('keypress', function(event){
  if (event.keyPress === 13) {
  //create new child elemnt, <li>
  var newLI = document.createElement('li');
  //add user input to <li>
  newLI.textContent = inputTag.value;
  //append <li> to <ul>
  ulParent.appendChild(newLI);
  }
});

document.getElementById("demo").innerHTML = "Hello World";
