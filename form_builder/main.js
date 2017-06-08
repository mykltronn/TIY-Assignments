// Using the form data, create the HTML form you see in the screenshot below. You'll need to write your own CSS styles as well.

// HARD MODE
//
// Use Font Awesome to add in the icons to the left of the inputs. You'll notice the fa- is in the data for each element.

//select <form> object from DOM

//create an array containing new element of type <input>

//loop through existing array "formData"

// on each loop append properties

var formObject = document.getElementById('form-actual')


// each item in the array contains an object with all the input data required. the question is, how do I take an object and parse out its contents to an element

//create fo0!


for (i = 0; i <formData.length; i++) {
  if (formData[i].type != "select") {
    var newInput = document.createElement('input');
    newInput.setAttribute('type', formData[i].type);
    newInput.setAttribute('label', formData[i].label);
    newInput.setAttribute('id', formData[i].id);
    newInput.setAttribute('icon', formData[i].icon);
    newInput.setAttribute('options', formData[i].options);
  }
  else {
    var newSelect = document.createElement('select');
  }
  // new <input> tag is appended to <form>
  formObject.appendChild(newInput);
  formObject.appendChild(newSelect);
}
