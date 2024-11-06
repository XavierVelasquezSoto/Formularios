const formElement = document.getElementById("form")

const nameCardElement = document.getElementById("nameCard") //input
const numberCardElement = document.getElementById("numberCard")
const monthCardElement = document.getElementById("dateCard1")
const yearCardElement = document.getElementById("dateCard2")
const cvcCardElement = document.getElementById("cvcCard")

const cardFrontNameElement = document.getElementById("cardColorName") //span
const cardFrontNumberElement = document.getElementById("cardColorNumber")
const cardMonthElement = document.getElementById("cardMonth")
const cardYearElement = document.getElementById("cardYear")
const cardCvcElement = document.getElementById("cardCvc")


const cardFrontName = () => {
  if (nameCardElement.value === "")
    {
    cardFrontNameElement.textContent = "JANE APPLESSED"
    }
  else{
    cardFrontNameElement.textContent = nameCardElement.value.toUpperCase()
  }

}
const cardFrontNumber = () => {
  if (numberCardElement.value === "")
    {
      cardFrontNumberElement.textContent = "0000 0000 0000 0000"
    }
  else
    {
      cardFrontNumberElement.textContent = numberCardElement.value
    }
}
const cardMonth = () => {
  if (monthCardElement.value === "")
    {
      cardMonthElement.textContent = "00"
    }
    else
    {
      cardMonthElement.textContent = monthCardElement.value      
    }
}
const cardYear = () => {
  if (yearCardElement.value === "")
    {
      cardYearElement.textContent = "00"
    }
  else
    {
    cardYearElement.textContent = yearCardElement.value
    }
}
const cardCVC = () => {
  if (cvcCardElement.value === "")
    {
      cvcCardElement.textContent = "000"
    }
    else
    {
      cardCvcElement.textContent = cvcCardElement.value
    }
}



const formInfo = event => {
  event.preventDefault();

  const name = formElement.name.value  
  const number = formElement.number.value
  const month = formElement.month.value
  const year = formElement.year.value
  const cvc = formElement.cvc.value
  //console.log(form.age.value);
  
}

nameCardElement.addEventListener("input", cardFrontName)
numberCardElement.addEventListener("input", cardFrontNumber)
monthCardElement.addEventListener("input", cardMonth)
yearCardElement.addEventListener("input", cardYear)
cvcCardElement.addEventListener("input", cardCVC)

formElement.addEventListener("submit", formInfo)

















/* const formElement = document.getElementById("form")

const formInfo = event => {
    event.preventDefault(); //es importante para evitar que se actualicé la pagina
}

formElement.addEventListener("submit", formInfo)  */


/* estas lineas es necesario en todos los formularios, siempre

const formElement = document.getElementById('form');
const formInfo = event => {
  event.preventDefault();
};
formElement.addEventListener('submit', formInfo); */


/* console.log(formElement.age.value); */
//formElement.elNomberQueLeHayasDado.value
//formElement.addEventListener("input", printFormInfo)