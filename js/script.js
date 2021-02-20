//VARIABLES

const slider = document.getElementById("slider")
let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length -1]
const btnRight = document.getElementById("btn-right")
const btnLeft = document.getElementById("btn-left")

//CON INSERTADJACENTELEMENT PODEMOS POSICIONAR UN NODE ELEMENT EN LAS 4 OPCIONES QUE NOS OTORGA DICHO METODO
slider.insertAdjacentElement("afterbegin",sliderSectionLast)

//HASTA ACA TENEMOS MODIFICADO EL ORDEN NUESTRAS IMAGENES. LAS VARIABLES ANTERIORES NO NOS SERVIRAN PARA LAS FUNCIONES QUE VIENEN YA QUE LAS IMAGENES CAMBIARAN DE POSICION 


//FUNCIONES

const next = () => {
  //ACA DECLARAMOS UNA VARIABLE QUE USAREMOS EN ESTA FUNCION EN ESPECIFICO, NO USAMOS LA VARIABLE SLIDERSECTION YA QUE NO NOS SERVIRIA POR EL MOVIMIENTO DE IMAGENES, POR ESO USAMOS  "DOCUMENT.QUERYSELECTORALL(".SLIDER__SECTION")[0]"
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]
  slider.style.marginLeft = "-200%"
  slider.style.transition = "all 0.5s"

  //SETTIMEOUT SIRVE PARA EJECUTAR CODIGO DESPUES DE UNA CANTIDAD DE TIEMPO DETERMINADA
  setTimeout( () =>{
    slider.style.transition = "none"
    slider.insertAdjacentElement("beforeend" , sliderSectionFirst)
    slider.style.marginLeft = "-100%"
  }, 500)
}


const prev = () => {
  //ACA VOLVEMOS A DECLARAR LA VARIABLE SLIDERSECTION PORQUE CADA VEZ QUE SE EJECUTE ESTA FUNCION LA POSICION DE LAS IMAGENES SERA DISTINTA. POR ESO DECLARAMOS LAS VARIABLES DOS VECES, AL PRINCIPIO Y DENTRO DE ESTA FUNCION
  let sliderSection = document.querySelectorAll(".slider__section")
  let sliderSectionLast = sliderSection[sliderSection.length - 1]
  slider.style.marginLeft = "0"
  slider.style.transition = "all 0.5s"
  setTimeout( () => {
    slider.style.transition = "none"
    slider.insertAdjacentElement("afterbegin",sliderSectionLast)
    slider.style.marginLeft = "-100%"
  }, 500)
}


btnRight.addEventListener("click" , () =>{
  next()
})

btnLeft.addEventListener("click" , () => {
  prev()
})

setInterval(() => {
  next()
}, 5000);