document.getElementById('login').addEventListener('click', function() {
    window.location.href = 'login.html'; 
});

document.getElementById('signup').addEventListener('click', function() {
    
    window.location.href = 'signup.html'; 
});

document.getElementById('login-nav').addEventListener('click',function(){
    window.location.href = 'login.html'; 
});
document.getElementById('signup-nav').addEventListener('click',function(){
    window.location.href = 'signup.html'; 
});


document.getElementById('bot-btn').addEventListener('click',function(){
    alert("Please login/signup to be able to interact with the Bot");
});

document.getElementById('speech-btn').addEventListener('click',function(){
    alert("Please login/signup to be able to do speech analysis");
});

