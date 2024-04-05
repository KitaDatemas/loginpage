let signInSelection = document.querySelector("#signIn");
let signUpSelection = document.querySelector("#signUp");
let signInTab = document.querySelector(".signInTab");
let signUpTab = document.querySelector(".signUpTab");

signUpTab.style.display = "none";

signInSelection.addEventListener('click', function(){
    signInSelection.classList.remove("disable");
    signUpSelection.classList.remove("enable");
    signUpSelection.classList.add("disable");
    signInSelection.classList.add("enable");
    signInTab.style.display = "block";
    signUpTab.style.display = "none";
})

signUpSelection.addEventListener('click', function(){
    signInSelection.classList.remove("enable");
    signUpSelection.classList.remove("disable");
    signUpSelection.classList.add("enable");
    signInSelection.classList.add("disable");
    signInTab.style.display = "none";
    signUpTab.style.display = "block";
})