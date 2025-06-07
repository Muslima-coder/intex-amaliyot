let isUser = document.querySelector(".logined-user")
let findedUser = JSON.parse(localStorage.getItem("user"))
isUser.innerHTML = `${findedUser.firstName} ${findedUser.lastName}`


let modalWrapper = document.querySelector(".modal-wrapper")
let modalInner = document.querySelector(".modal-inner")

let elSiteList = document.querySelector(".site-list")

//Sign out start
isUser.parentElement.addEventListener("click", () => {
    modalWrapper.classList.remove("scale-0")
    modalInner.innerHTML = `
    <div class="w-[600px]">
    <h1 class="font-bold mb-[20px] text-[35px] text-center">Хотите выйти?</h1>
    <div class="flex items-center justify-center gap-[20px]">
    <button onclick="handleCancel()" class="hover:bg-transparent hover:text-green-700   border-[2px] border-green-700 duration-300 w-[48%] p-[8px] bg-green-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px] " >
    Остаться
    </button>
    <button onclick="handleSignOut()" class="hover:bg-transparent hover:text-red-700  border-[2px] border-red-700 duration-300 w-[48%] p-[8px] bg-red-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px] ">
    Выйти
    </button>
    </div>
    </div>
    `
})

function handleCancel(){
    modalWrapper.classList.add("scale-0")
}
function handleSignOut(){
    modalWrapper.classList.add("scale-0")
    setTimeout(() => {
        localStorage.clear()
        location.pathname = "/"
    },800)
}

modalWrapper.addEventListener("click", (e) => e.target.id == "wrapper" && modalWrapper.classList.add("scale-0"))

//Add category part start
function handleAddCategoryBtnClick(){
    modalWrapper.classList.remove("scale-0")
    modalInner.innerHTML = `
    <div class="w-[1000px] h-[423px] bg-white rounded-md text-center">
    <strong class="font-semibold text-[50px] text-[rgba(0,147,152,1)] ">Добавить категории</strong>
    </div>
    `
}

//Change site
elSiteList.addEventListener("click", function(e){
    if(e.target.textContent == "Продукты"){
       location.pathname = "/admin.html"
    }
    else if(e.target.textContent == "Заказы"){
       location.pathname = "/order.html"
    }
    else if(e.target.textContent == "Категории"){
       location.pathname = "/category.html"
    }
})