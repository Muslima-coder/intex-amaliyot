let isUser = document.querySelector(".logined-user")
let findedUser = JSON.parse(localStorage.getItem("user"))
isUser.innerHTML = `${findedUser.firstName} ${findedUser.lastName}`


let modalWrapper = document.querySelector(".modal-wrapper")
let modalInner = document.querySelector(".modal-inner")

let elCategoryList = document.querySelector(".category-list")

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

//change category 
elCategoryList.addEventListener("click", function(e){
    if(e.target.textContent == "Каркасные"){
        e.target.className = "border-b-[3px] cursor-pointer border-[#009398] text-[#009398] font-bold text-[30px]"
        e.target.nextElementSibling.className = "text-[#A6A6A6] border-b-[3px] border-transparent cursor-pointer font-bold text-[30px]"
    }
    else if(e.target.textContent == "Надувные"){
        e.target.className = "border-b-[3px] cursor-pointer border-[#009398] text-[#009398] font-bold text-[30px]"
        e.target.previousElementSibling.className = "text-[#A6A6A6] border-b-[3px] border-transparent cursor-pointer font-bold text-[30px]"
    }

})

//Add pool part start
function handleAddBtnClick(){
    modalWrapper.classList.remove("scale-0")
    modalInner.innerHTML = `
    <form autocomplete="off" class="w-[1000px] p-3 rounded-[20px]" >
    <label>
    <input type="file" class="hidden" />
    <div class="relative mx-auto flex items-center justify-center border-[2px] border-slate-500 w-[591px] h-[216px] bg-white rounded-[20px]">
    <img class="absolute w-full h-full hidden" src="" alt="choose img"/>
    <p class="text-[25px] text-center">Выберите Изображение</p>
    </div>
    </label>
    <div class="flex justify-between mt-10">
    <div class="w-[49%] flex flex-col gap-[30px]">
    <label>
    <span class="pl-5 text-[18px] text-[#898989]"> Выберите категорию </span>    
    <select name="categoryId"  class="w-full pl-5 text-[20px] py-5 bg-white shadow-md">
    <option value="0" >Каркасные</option>
    <option value="1" >Надувные</option>
    </select>
    </label>
    <label>
    <span class="pl-5 text-[18px] text-[#898989]"> Введите старую цену</span>
    <input name="oldPrice" type="number" class="w-full pl-5 text-[20px] py-3 bg-white shadow-md" placeholder="Старая цена" />
    </label>
    <label>
    <span class="pl-5 text-[18px] text-[#898989]"> Введите новую цену</span>
    <input name="newPrice" type="number" class="w-full pl-5 text-[20px] py-3 bg-white shadow-md" placeholder="Новая цена" />
    </label>
    </div>

    <div class="w-[49%] flex flex-col gap-[30px]">
    <label>
    <span class="pl-5 text-[18px] text-[#898989]"> Введите количество</span>
    <input name="quantity" type="number" class="w-full pl-5 text-[20px] py-3 bg-white shadow-md" placeholder="Количество" />
    </label>
    <label>
    <span class="pl-5 text-[18px] text-[#898989]"> Введите рамку</span>
    <select name="frameId" class="w-full pl-5 text-[20px] py-3 bg-white shadow-md">
    <option value="0"> Металлический</option>
    <option value="1">Рамка призмы </option>
    <option value="2"> Прямоугольная</option>
    </select>
    </label>
    <button class="bg-[#009398] text-white py-[10px] rounded-[30px] mt-[20px] font-bold text-[22px] px-[14px] border-[2px] border-[rgba(0,147,152,1)] hover:bg-transparent hover:text-[rgba(0,147,152,1)] duration-300">Добавить</button>
    </div>
    </div>
    </form>
    
    
    `
}

