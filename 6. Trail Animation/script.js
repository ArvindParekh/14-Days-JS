document.addEventListener("mousemove", function(e){
    let body = document.querySelector('body');
    let star = document.createElement("span");

    let x = e.offsetX;
    let y = e.offsetY;

    star.style.left = `${x}px`;
    star.style.top = `${y}px `;

    let size = Math.random () * 170;
    star.style.width = size+'px';
    star.style.height = size+'px';
    
    body.appendChild(star);
    
    setTimeout(() => {
        body.removeChild(star)
    }, 2000);
});
