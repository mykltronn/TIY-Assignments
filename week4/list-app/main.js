// Select the input element with the id 'todoInput' and store in a variable `todoInput`.

var todoInput = document.getElementById('todoInput');

// Select the ordered list element with the id 'todoList' and store in a variable `todoList`.

var todoList = document.getElementById('todoList');

// Add a keypress event listener to `todoInput`.
// Pass an anonymous function as the second argument to the event listener.
// Don't forget to provide the anonymous function with an `event` argument.

todoInput.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    var todoContent = todoInput.value;
    todoInput.value = "";
    var newToDoLi = document.createElement('li');
    newToDoLi.textContent = todoContent;
    todoList.append(newToDoLi);
  }
  return event;
});



  // Within the function body check to see if the event's `keyCode` property is equal to 13
  // (This checks for [Enter] key press)

    // Within the conditional statement
    // Get the event target element's value and store it in a variable `todoContent`.

    // Set the event tartget element's value to empty string.

    // Create a new list item element and store it in a variable `newTodoLi`.

    // Set the new list item's text content to `todoContent`.

    // Append the new list item to `todoList`


  // Outside of the conditional
  // Return the event object
