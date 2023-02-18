const text = document.querySelector('span');
console.log(text.textContent);

textChange();

function textChange() {
    setTimeout(() => {
        text.textContent = 'Arvind !';
    }, 0);
    setTimeout(() => {
        text.textContent = 'a Learner .';
    }, 2500);
    setTimeout(() => {
        text.textContent = 'a Programmer .';
    }, 5000);

    setTimeout(() => {
        text.textContent = 'a Runner .';
    }, 7500);
}

setInterval(textChange, 10000);