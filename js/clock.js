window.addEventListener("DOMContentLoaded", ()=>{

    const clock = document.querySelector(".clockbx");
    
    
    
    function getClock(){
        const date = new Date();
        clock.innerHTML = `
        <h2>${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()}<br>
        ${String(date.getHours()).padStart(2, "0")} : ${String(date.getMinutes()).padStart(2, "0")} : ${String(date.getSeconds()).padStart(2, "0")}</h2>
        `;
    }

    getClock();
    setInterval(getClock, 1000);

})