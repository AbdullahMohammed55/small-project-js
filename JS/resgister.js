let first = document.querySelector('#firstnam')
let second = document.querySelector('#secondnam')
let email = document.querySelector('#emai')
let username = document.querySelector('#usernam')
let password = document.querySelector('#passwor')

let registerBtn = document.querySelector('#sign_up')

registerBtn.addEventListener('click', function(e)
{
    e.preventDefault()
    if(first.value ==="" || second.value === "" || email.value === "" || password.value === ""  || username.value === "")
    {
        alert("please set data")
    }else
    {
        localStorage.setItem('firstnam', first.value)
        localStorage.setItem('secondnam', second.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('username' , username.value)
        localStorage.setItem('password', password.value)

        setTimeout(()=>{
            window.location= "login.html"
        } , 1500)
    }

})
