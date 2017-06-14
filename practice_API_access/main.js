//https://learnwebcode.github.io/json-example/animals-1.json

// var ourRequest = new XMLHttpRequest();
//
// ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//
// ourRequest.onload = function() {
//   var ourData = JSON.parse(ourRequest.responseText)
//   var contentDiv = document.getElementById('API-data')
//   contentDiv.textContent = ourData[0].name;
//
// };
//
//
//
// ourRequest.send();

// create a new XMLHttpRequest and store it in a variable.

// run the .open() method on that shit.
// .open() takes as its first argument the type of request. That's either "GET" or "POST" or some other stuff
// as its second request it takes the URL from which the request is being made

// then, using dot notation, assign a function to the request.onload.
// this function will determine what to do with the data.
// remember two things:
// -- this data is currently raw text or some raw format.
// -- also, this data has not actually been requested yet. We've only architected the request. Up to now.

// the first item in the function stores the actual data in a variable. It sets the new variable to:
// -- the request promise
// -- the request promises "response text"
// -- parsed, interpreted as JSON

// then the function DOES stuff to it, or calls another function that does stuff to it.

// THEN! you have to actually send the request (ourRequest.send());



// ******************************************************************************
// so that was all XMLHttpRequest.
// Here's how to do it with FETCH
// first, link to the FETCH API in your HTML, above your local JS link

// this example uses template literals ${data}
// and ` ` "backticks"

console.log("Linked!");

fetch('https://swapi.co/api/films')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log("IT'S A TRAP" + response.status);
        return
      }
      response.json().then(function(data) {
        let title = data.results[0].title;
        console.log(`The first Star Wars film is ${title}`);

        var characters = data.results[0].characters;

        function renderCharacters() {
          return `
          <ul>
            ${characters.map(character => `<li>${character}</li>`)}
          </ul>
          `;
        }

        let markup = `
            <div class="title">
              <p>Title: ${title}</p>
              <p>Episode ID: ${data.results[0].epsiode_id}</p>
            </div>

            ${renderCharacters(data.results)}
          `
          document.body.innerHTML += markup;

      })

  }
)

// get films






















// shtio
