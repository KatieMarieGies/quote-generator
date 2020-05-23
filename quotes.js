// Array of objects below 
let quotes = [
    { 
        quote: 'In America, first you get the sugar, then you get the power, then you get the women.',
        source: 'Homer Simpson',
        citation: 'The Simpsons, Season 6, Episode 2',
    },
    { 
        quote: 'Now I am become Death, the destroyer of worlds.',
        source: 'Robert Oppenheimer',
        year: '1945',
    },
    { 
        quote: 'Good environmental policy is good economic policy.',
        source: 'Bernie Sanders',
        category: 'Politics',
    },
    { 
        quote: 'Peace is always beautiful.',
        source: 'Walt Whitman',
        category: 'Transcendentialism',
    },
    { 
        quote: 'When someone shows you who they are, believe them the first time.',
        source: 'Maya Anjelou',
    }
    ]

    /***
 * `getRandomQuote` function
***/

 function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length)) ;
    for ( var i = 0; i < quotes.length; i++ );
    let randomQuote = quotes[randomNumber]; 
    return randomQuote;   
    }
   
    var display = getRandomQuote(quotes);
    // testing that it works
    console.log(display);
    // console displays random quotes

/***
 * `printQuote` function
***/

getRandomQuote(quotes);

function printQuote() {
  let currentQuote = getRandomQuote(quotes);
  // Text output for object property values below
  let text = "<p class='quote'> " + currentQuote.quote + "</p>";
    text += "<p class='source'> " + currentQuote.source + "</p>";
    if ("citation" in currentQuote) {
        text += "<span class='citation'> " + currentQuote.citation + "</span>";
    }
    if ("date" in currentQuote) {
        text += "<span class='year'> " + currentQuote.date + "</span>";
    }
    if ("category" in currentQuote) {
   text += "<span class='category'> " + currentQuote.category + "</span>";
    }

   document.getElementById('quote-box').innerHTML = text();
   
}
// As soon as the page is refreshed, a quote is printed to the page 
printQuote();


document.getElementById('load-quote').addEventListener("click", printQuote, false);




  
