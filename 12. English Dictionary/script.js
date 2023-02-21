let inputElement = document.querySelector('input');
let posElement = document.querySelector('#pos');
let meaningElement = document.querySelector('#meaning');
let exampleElement = document.querySelector('#eg');


inputElement.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        let inputWord = inputElement.value;
        console.log(inputWord);

        // getOutput(inputWord);

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log(data);
            const partOfSpeech = data[0].meanings[0].partOfSpeech;

            const meaning = data[0].meanings[0].definitions[0].definition;

            const example = data[0].meanings[0].definitions[0].example;

            // console.log(partOfSpeech, meaning, example);

            updateDom(partOfSpeech, meaning, example);
        }).catch(error => console.error('Error:', error));


    }

})

function updateDom(pos, meaning, eg){
    posElement.innerHTML = `<i>${pos}</i>`;
    meaningElement.innerHTML = `<i>Meaning:</i> ${meaning}`;
    exampleElement.innerHTML = `<i>Example:</i> ${eg}`;
}





//You don't have to use async and await when using the fetch() function, but they can make your code easier to read and handle asynchronous requests more cleanly.

// The fetch() function returns a Promise that resolves to a Response object. Without async and await, you would need to use .then() and .catch() methods to handle the Promise and extract the response data,
// async function getOutput(inputWord) {

//     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;

//     const result = await fetch(url).then((res) => res.json());
//     const partOfSpeech = result[0].meanings[0].partOfSpeech;
//     const meaning = result[0].meanings[0].definitions[0].definition;
//     const examples = result[0].meanings[0].definitions[0].example;

//     // console.log(partOfSpeech, meaning, examples);
// }



