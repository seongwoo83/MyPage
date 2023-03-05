window.addEventListener("DOMContentLoaded", ()=>{
    const bgImg = ["./img/0.jpg","./img/1.jpg","./img/2.jpg","./img/3.jpg"];

    

    const body = document.body;

    setInterval(() => {
        const chosenImage = bgImg[Math.floor(Math.random()*bgImg.length)]
        body.style.backgroundImage = `url(${chosenImage})`;
    }, 3000);
})