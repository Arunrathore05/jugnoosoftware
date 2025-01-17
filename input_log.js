
let btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    let use= document.querySelector(".user");
    let pass= document.querySelector(".pass");
    if(use.innerHTML=="arun"&&pass.innerHTML=="singh@123") {
        console.log("BTN CLICKED");
    }else{
        prompt("reenter");
    }
})