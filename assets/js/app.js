//event listener for all button elements on a page
document.querySelector("#container").addEventListener("click", function(event) {

  //why uppercase?
  if (event.target.tagName == "BUTTON") {
    console.log(event);

    //replaces spaces with + signs
    var buttons = event.target.dataset.buttons.replace(' ', '+');

    //constructing search query URL for button name
    var queryURL = `https://api.giphy.com/v1/gifs/search?q="${buttons}&api_key=ZjUY0xPzP6S5TW9QVWkwsTP2dVWs2fkf&limit=20`;
  }

  //AJAX request
  fetch(queryURL, {
    method: "GET"
  })
  //now the data comes back from the API and we use the .then method to return a promise of the JSON returned
  .then(function(response) {
    return response.json();
  })
  //we now use the .then method to save the response again as an itialized results variable (of the data)
  var results = response.data;
});

//document.getElementById("textBox").val.trim();