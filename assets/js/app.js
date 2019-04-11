//event listener for all button elements on a page
document.querySelector("#container").addEventListener("click", function(event) {

  //why uppercase?
  if (event.target.tagName == "BUTTON") {
    console.log(event);

    //replaces spaces with + signs
    var buttons = event.target.dataset.button.replace('', '+');

    //constructing search query URL for button name
    var queryURL = `https://api.giphy.com/v1/gifs/search?q="${buttons}&api_key=ZjUY0xPzP6S5TW9QVWkwsTP2dVWs2fkf&limit=20`;

    //AJAX request
    fetch(queryURL, {
      method: "GET"
    })
    //now the data comes back from the API and we use the .then method to return a promise of the JSON returned
    .then(function(response) {
      return response.json();
    })
    //need help/explaination on this part
    .then(function(response) {
      //check up on results
      console.log(queryURL);
      console.log(response);
      //we now use the .then method to save the response again as an itialized results variable (of the data)
      var results = response.data;

      //using the new "let.. of loop" to loop over every result item in object(?)
      for (let item of results) {
        //institute the rating for the  images of not allowing r and pg13 raings!
        if(item.rating !== "r" && item.rating !== "pg-13") {
          //creating the div element to display the giphy result images
          var giphyDiv = document.createElement("div");

          //initalize the ratings variable for the giphy images and store them in rating variable
          var rating = item.rating;

          //create an element to display the rating of the image
          var p = document.createElement("p");
          //this is where the actual rating shows in the element from the interpolated string
          p.innerText = `Image Rating: ${rating}`;

          //initialize a variable that will have the img tag that we need
          var buttonImg = document.createElement("img");

          //put on the img tag the source attribute from whats on the results JSON gathered
          buttonImg.setAttribute("src", item.images.fixed_height.url);

          //attach as a child element the p and buttonImg to the giphyDiv (first declared above)
          giphyDiv.appendChild(p);
          giphyDiv.appendChild(buttonImg);

          //prepend the giphyDiv to giphyImgHere div. but first create the container to do so then select where it is to appear in the DOM.
          let giphyContainer = document.querySelector("#giphyImgHer");
          //insert before new child then the reference child
          giphyContainer.insertBefore(giphyDiv, giphyContainer.firstChild);
        }
      }
    });
  }
});
//document.getElementById("textBox").val.trim();