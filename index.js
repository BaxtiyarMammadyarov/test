const login = document.getElementById("login");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
ar = []
login.addEventListener('click',(e)=>{
   let arr = JSON.parse(localStorage.getItem("db")) ;
   arr.forEach(element => {
     if(element.email === email.value){
        if(element.password === pass.value){
            window.location.pathname = "/login/home.html"
            sessionStorage.setItem("user",JSON.stringify({email:email.value,password : pass.value}))
        }
        else{
            pass.value = "";
            alert("Incorrect password")
        }
     } 
     else{
        window.location.pathname = "/login/registre.html"
     }
    });

  
})