// Select the input element with the id 'todoInput' and store in a variable `todoInput`.
var todoInput = document.querySelector('#todoInput');
// Select the ordered list element with the id 'todoList' and store in a variable `todoList`.
var todoList = document.querySelector('#todoList');

// Add a keypress event listener to `todoInput`.
// Pass an anonymous function as the second argument to the event listener.
// Don't forget to provide the anonymous function with an `event` argument.
todoInput.addEventListener('keydown', function addListItem(event) {
  // Within the function body check to see if the event's `keyCode` property is equal to 13
  // (This checks for [Enter] key press)
  if ( event.keyCode == 13 ) {
    // Within the conditional statement
    // Get the event target element's value and store it in a variable `todoContent`.
    var todoContent = event.target.value;
    // Set the event tartget element's value to empty string.
    event.target.value = "";
    // Create a new list item element and store it in a variable `newTodoLi`.
    var newTodoLi = document.createElement('li');
    // Set the new list item's text content to `todoContent`.
    newTodoLi .textContent = todoContent;
    // Append the new list item to `todoList`
    todoList.appendChild(newTodoLi);
  }
  // Outside of the conditional
  // Return the event object
  return event;
});
