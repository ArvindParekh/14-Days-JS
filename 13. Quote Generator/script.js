let quoteBtn = document.querySelector('#quoteBtn');
let quoteContentEl = document.querySelector('#quote');
let quoteAuthorEl = document.querySelector('#author');
let quoteTagsEl = document.querySelector('#tags');
let container = document.querySelector('.container');
let mainContainer = document.querySelector('.main-container');

const url = "https://api.quotable.io/random?minLength=10&maxLength=70";

const backgroundColors = ['#2B3467', '#E96479', '#443C68', '#2b2d42', '#ee6c4d'];

quoteBtn.addEventListener('click', function () {

    quoteContentEl.innerHTML = "Getting a quote...";

    const result = fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let quoteContent = data.content;
            let quoteAuthor = data.author;
            let quoteTags = data.tags;

            updateDOM(quoteContent, quoteAuthor, quoteTags);
        })
        .then(function (error) {
            console.log(error);
        })
})


function updateDOM(content, author, tags) {
    //update content
    quoteContentEl.innerHTML = `\u201C${content}\u201D`;
    quoteAuthorEl.innerHTML = `- ${author}`;
    quoteTagsEl.innerHTML = `Tags: ${tags}`;

    //update colors
    let randomColorIndex = Math.floor(Math.random() * backgroundColors.length);
    container.style.backgroundColor = backgroundColors[randomColorIndex];
    mainContainer.style.color = backgroundColors[randomColorIndex];
    quoteBtn.style.backgroundColor = backgroundColors[randomColorIndex];
}

//copy the quote on click
quoteContentEl.addEventListener('click', function () {
    const text = quoteContentEl.textContent;
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    alert('Text copied to clipboard!');
})