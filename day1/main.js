document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    const userName = document.getElementById('usernamE').value;
    const userPWD = document.getElementById('userPWD').value;
    if(userName && userPWD){
        alert('Login Successfully!');
    }
    else{
        alert('enter the both Filds')
    }
})