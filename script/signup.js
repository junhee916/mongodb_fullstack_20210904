const signupBtn = document.getElementById("signupBtn")

const loginBtn = document.getElementById("loginBtn")

signupBtn.addEventListener('click', function(){

    const name = $('#name').val()
    const email = $('#email').val()
    const password = $('#password').val()

    $.ajax({
        type : "POST",
        url : "/user/signup",
        data : {
            name : name,
            email : email,
            password : password
        },
        success : function(){
            window.location.href = "/login"
        }
    })
})

loginBtn.addEventListener('click', function(){

    window.location.href = "/login"
})