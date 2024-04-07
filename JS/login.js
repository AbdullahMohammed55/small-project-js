let username = document.querySelector('#usernam')
let password = document.querySelector('#passwor')

let loginBtn = document.querySelector('#sign_in')

let getUsername = localStorage.getItem('username')
let getPassword = localStorage.getItem('password')

loginBtn.addEventListener('click', function (e){
    e.preventDefault();
    if(username.value === "" || password.value === ""){
        alert('please enter data')
    }else{
        if(getUsername && getUsername.trim()=== username.value.trim() && getPassword.trim() && getPassword === password.value){
            setTimeout(()=>{
                window.location = 'index.html' 
            }, 1500)
        }else 
        {
            alert ('this username or password is incorrect')
        }
    }
})