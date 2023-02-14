$('#generate-btn').on('click', generatePassword); //adding event listener click on the generate button
$('#copy-btn').on('click', copyPassword);

// This function gives out repetative digits from some reason
// function generatePassword(){  
//     let length = 10;
//     let finalPassword = "";
//     let generators = [generateLower(), generateUpper(), generateNumber(), generateSpecial()]; //storing functions in arrays to call them randomly using a random index
    
//     for(let i = 0; i <= length; i++){
//         let char = generators[Math.floor(Math.random() * 4)];
//         finalPassword += char;
//     }

//     displayPassword(finalPassword);
// }

// function generateLower(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //code to generate a random lower letter as ASCII value of lowercase alphabets ranges from 97-122
// }

// function generateUpper(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //code to generate a random upper letter as ASCII value of uppercase alphabets ranges from 65-90
// }

// function generateNumber(){
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function generateSpecial(){
//     const symbols = '!@#$%^&*(){}[]=<>/,.'
// 	return symbols[Math.floor(Math.random() * symbols.length)];
// }

function generatePassword(){
    const pass = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz(){}[]=<>/,.";
    let length = 10;
    let finalPassword = "";

    for(let i = 0; i <= length; i++){
        let char = pass[Math.floor(Math.random() * pass.length)];
        finalPassword += char;
    }
    animateGenerateButton();
    displayPassword(finalPassword);
}
function displayPassword(result){
    $('#showPassword').html(result);
}

function copyPassword(){
    animateCopyButton();

    let result = $('p').text();
    console.log(result);
    copy(result);
}

function animateGenerateButton(){
    $('#generate-btn').addClass('generate-active');
    setTimeout(() => {
        $('#generate-btn').removeClass('generate-active');
    }, 50);
}

function animateCopyButton(){
    $('#copy-btn').addClass('active');
    setTimeout(() => {
        $('#copy-btn').removeClass('active');
    }, 50);
        
}

function copy(text) {
    const input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    let copiedResult = document.execCommand('copy');
    document.body.removeChild(input);
    
    const alert = document.createElement("div")
    alert.classList.add("alert");
    alert.textContent = "Copied!"
    document.body.appendChild(alert)
    
    setTimeout(() => {
      document.querySelector('.alert').style.display = "none"
      document.body.removeChild(alert)
    }, 1000)
    // return result;
  }
