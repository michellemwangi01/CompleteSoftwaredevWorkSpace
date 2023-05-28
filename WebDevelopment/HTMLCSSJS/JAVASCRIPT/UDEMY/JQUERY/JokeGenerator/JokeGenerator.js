const mainDiv = $('<div class="mainDiv">');
const heading = $('<h5 id="heading">').html('Just for Laughs &#128517;')
const quoteContainerDiv = $('<div class="quoteContainerDiv">');
const quoteDiv = $('<div class="quoteDiv">');
const quote = $('<p id="quote">').text(' "They say laughter is the best medicine. Have a shot" ');
const categoryDiv = $('<div class="categoryDiv">')
const category = $('<p id="category">');
const breakLine = $('<br>');
const newQuoteButton = $('<button id="newQuoteButton">').text("Generate");
const footerDiv = $('<div class="footerDiv">');
const featuresDiv = $('<div class="featuresDiv">');
const audioJoke = $('<button class="features">');
const copyJoke =  $('<button class="features">');
const tweetJoke = $('<button class="features">');
var tweetIcon = $('<i class="fa-brands fa-twitter"></i>');
var copyIcon =  $('<i class="fa-solid fa-copy"></i>');
var audioIcon = $('<i class="fa-solid fa-file-audio"></i>');

$(tweetJoke).prepend(tweetIcon);
$(copyJoke).prepend(copyIcon);
$(audioJoke).prepend(audioIcon);



$('body').append(mainDiv);
$(mainDiv).append(quoteContainerDiv);
$(quoteContainerDiv).append(heading);
$(quoteContainerDiv).append(quoteDiv);
$(quoteContainerDiv).append(categoryDiv);
$(quoteDiv).append(quote);
$(categoryDiv).append(category);

$(mainDiv).append(footerDiv);
$(footerDiv).append(featuresDiv);
$(featuresDiv).append(audioJoke);
$(featuresDiv).append(copyJoke);
$(featuresDiv).append(tweetJoke);
$(footerDiv).append(newQuoteButton);


$(newQuoteButton).on("click", function randomJokeGenerator() {
    $(newQuoteButton).text("Loading Joke...").addClass("loading");
    url = "https://v2.jokeapi.dev/joke/any?blacklistFlags=racist,explicit&type=single&amount=1";
    fetch(url).then(res => res.json()).then(result => {
        console.log(result);
        $(quote).text('"'+ result.joke + '"');
        $(category).text('~'+ result.category);
        $(newQuoteButton).text("New Joke").removeClass("loading");;

    })
});

$(audioJoke).on("click", ()=>{
    console.log($(quote).text())
    let audioQuoteDesc = new SpeechSynthesisUtterance($(quote).text())
    speechSynthesis.speak(audioQuoteDesc);
});

$(copyJoke).on("click", ()=>{
    navigator.clipboard.writeText($(quote).text());

})

$(tweetJoke).on("click", ()=>{
    let tweetURL = `https://twitter.com/intent/tweet?url=${$(quote).text()}`;
    window.open(tweetURL, "_blank");

})









