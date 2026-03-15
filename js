const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if(hamburger){

hamburger.addEventListener("click", function(){

navLinks.classList.toggle("active");

});

}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

if(window.scrollY > 300){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
});

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(event){

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

if(name.value.trim() === ""){
alert("Please enter your name");
event.preventDefault();
return;
}

if(!email.value.includes("@")){
alert("Please enter a valid email");
event.preventDefault();
return;
}

if(message.value.length < 10){
alert("Message must be at least 10 characters");
event.preventDefault();
return;
}

});

}

const questions = document.querySelectorAll(".question");

questions.forEach(function(q){

q.addEventListener("click", function(){

const answer = q.nextElementSibling;

answer.classList.toggle("active");

});

});
