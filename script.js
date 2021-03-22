const previous1 = document.querySelector(".previous1")
const next1 = document.querySelector(".next1")

const previous2 = document.querySelector(".previous2")
const next2 = document.querySelector(".next2")

const carouselItem1 = document.querySelector(".carousel__item1")
const carouselItem2 = document.querySelector(".carousel__item2")


function changeState(){
    if(carouselItem1.classList.contains("hidden")){
        carouselItem1.classList.remove("hidden");
        carouselItem2.classList.add("hidden");
        console.log("true")

    }else{
        carouselItem1.classList.add("hidden");
        carouselItem2.classList.remove("hidden");
        console.log("false");
    }
}

previous1.addEventListener('click',changeState)
next1.addEventListener('click',changeState)

previous2.addEventListener('click',changeState)
next2.addEventListener('click',changeState)