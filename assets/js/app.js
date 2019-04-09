//event listener for all button elements on a page
document.querySelector("#container").addEventListener("click", function(event) {

  //why uppercase?
  if (event.target.tagName == "BUTTON") {
    console.log(event);

    //replaces spaces with + signs
    var buttons = event.target.dataset.buttons.replace(' ', '+');

    //constructing search query URL for button name
    var queryURL = `https://api.giphy.com/v1/gifs/search?q="${buttons}&api_key=ZjUY0xPzP6S5TW9QVWkwsTP2dVWs2fkf`;
  }

  //
});

//document.getElementById("textBox").val.trim();