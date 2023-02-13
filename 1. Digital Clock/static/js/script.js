function showTime(){
    let clock = document.querySelector("#clock-area");
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    setTimeout(function() {showTime()}, 1000);
}

function changeColor(){
    let colorDiv = document.querySelector(".container-1");
    let colorDbs = [, '#EEA47FFF', '#EE4E34', '#2F3C7E', '#234E70', '#F96167', '#317773', '#8AAAE5', '#E3B448', '#CBD18F'];
    let btnColorDbs = ['btn-danger', 'btn-secondary', 'btn-warning', 'btn-primary', 'btn-success', 'btn-info', 'btn-light', 'btn-dark'];

    let btnClass = document.querySelector('.btn');
    
    let randomNum = Math.floor(Math.random() * 9);
    let btnRandomNum = Math.floor(Math.random() * 8);

    colorDiv.style.background = colorDbs[randomNum];
    btnClass.classList.remove(btnClass.classList[1]);
    btnClass.classList.add(`${btnColorDbs[btnRandomNum]}`);
}
