
let elForm = document.querySelector(".login-form")

let passwordsSaved = JSON.parse(localStorage.getItem("passwords"))

elForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    let data = {
        username: e.target.username.value,
        password: e.target.password.value,
    }
          elForm.lastElementChild.previousElementSibling.innerHTML = `
           <img class="w-[30px] h-[30px] scale-[1.4] mx-auto" src="./images/loading-white.png" alt="loading" width="30" height="30" />
          `

    let isUser = passwordsSaved ? passwordsSaved.some(item => item.username == data.username && item.password == data.password) : passwords.some(item => item.username == data.username && item.password == data.password)

    setTimeout(() => {
        elForm.lastElementChild.previousElementSibling.innerHTML = `Войти`
        setTimeout(() =>{
             if(isUser){
            location.pathname = "/admin.html"
        }
        else{
           alert("Есть ошибка")
        }
        },600)
   
    },1000)
})



