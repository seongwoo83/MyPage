window.addEventListener("DOMContentLoaded",()=>{
    const loginForm = document.querySelector("#login_form");
    const loginInput = document.querySelector(".inputBx");
    const greeting = document.querySelector("#greeting");
        
    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";
    
        
    function onLoginSubmit(event){
        event.preventDefault();
        const username = loginInput.value;
        if(!username){
            window.alert("Please Write Your Name.")
            loginInput.focus();
            return false;
        }else if(username.length > 15){
            window.alert("Your name is too long.")
            loginInput.focus();
            return false;
        }
        localStorage.setItem("USERNAME_KEY", username);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreetings(username);
    }

    function paintGreetings(username){
        greeting.innerText = `Hello! ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }

    const savedUserName = localStorage.getItem("USERNAME_KEY");
    if(savedUserName === null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }else{
        paintGreetings(savedUserName);
    }
});