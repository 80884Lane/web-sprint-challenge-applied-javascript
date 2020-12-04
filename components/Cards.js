// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardMaker({artObj}) {
    const card = document.createElement("div");
    const headLine = document.createElement("div");
    const author = document.createElement("div");
    const imgCon = document.createElement("div");
    const imgEle = document.createElement("img");
    const name = document.createElement("span");


    headLine.textContent = headline;
    imgEle.src = imageURL;
    name.textContent = name;
    
    imgEle.classList.add("authors-image");
    headLine.classList.add("Headline-of-article");
    name.classList.add("authors-name");

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgCon);
    author.appendChild(name);
    imgCon.appendChild(imgEle);

    card.addEventListener("click", (event) => {
        console.log(headLine);
    });
    return card;

}