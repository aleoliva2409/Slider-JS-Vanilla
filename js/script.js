//VARIABLES

const slider = document.getElementById("slider")
let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length -1]
const btnRight = document.getElementById("btn-right")
const btnLeft = document.getElementById("btn-left")

slider.insertAdjacentElement("afterbegin",sliderSectionLast)

const next = () => {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]
  slider.style.marginLeft = "-200%"
  slider.style.transition = "all 0.5s"
  setTimeout( () =>{
    slider.style.transition = "none"
    slider.insertAdjacentElement("beforeend" , sliderSectionFirst)
    slider.style.marginLeft = "-100%"
  }, 500)
}



btnRight.addEventListener("click" , () =>{
  next()
})

