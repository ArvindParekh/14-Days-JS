//steps are the round divs

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let steps = document.querySelectorAll('.steps');
let frontHR = document.querySelector('.front-hr');
let icons = document.querySelectorAll('i');
let currentStepIndex = 0;
let addWidth = 25; //multiply this number with the currentStepIndex


nextBtn.addEventListener('click', function () {
    if (currentStepIndex < steps.length - 1) {
        let allActiveSteps = document.querySelectorAll('.active');
        let lastActiveStep = allActiveSteps.item(allActiveSteps.length - 1);

        currentStepIndex = lastActiveStep.getAttribute('data-key');
        console.log(currentStepIndex);
        //style the hr accordingly
        frontHR.style.width = `${addWidth * currentStepIndex}%`;  //to style the hr on button click
        frontHR.style.transition = "all 1s";

        //to style the next step on button click
        let nextStep = parseInt(currentStepIndex) + 1;
        // console.log(nextStep);
        let nextStepEl = document.querySelector(`.steps[data-key="${nextStep}"]`);
        // console.log(nextStepEl);
        nextStepEl.classList.add('active');

        //to change the icon on button click
        let nextIconEl = document.querySelector(`.fa-solid[data-key="${nextStep}"`);
        nextIconEl.classList.remove('fa-circle-xmark');
        nextIconEl.classList.add('fa-circle-check')
    }

    else {
        alert("You've reached the end. Please go back:)")
    }
})

prevBtn.addEventListener('click', function () {
    if (currentStepIndex >= 1) {
        let allActiveSteps = document.querySelectorAll('.active');
        let lastActiveStep = allActiveSteps.item(allActiveSteps.length - 1);

        // to change the icon on button click
        let currentIconEl = document.querySelector(`.fa-solid[data-key="${parseInt(currentStepIndex) + 1}"`);
        currentIconEl.classList.remove('fa-circle-check');
        currentIconEl.classList.add('fa-circle-xmark');

        //to remove the border of the current active element
        lastActiveStep.classList.remove('active');
        currentStepIndex -= 1;
        console.log(currentStepIndex);

        //style hr accordingly;
        frontHR.style.width = `${addWidth * currentStepIndex}%`;
        frontHR.style.transition = "all 1s";
    }
    
    else {
        alert("You've reached the beginning, please mover forward:)");
    }
})