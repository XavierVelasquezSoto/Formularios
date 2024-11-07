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

const errorFirstElement = document.getElementById("error1") //span error!!
const errorSecondElement = document.getElementById("error2")
const errorThirdElement = document.getElementById("error3")
const errorFourthElement = document.getElementById("error4")
const errorFifthElement = document.getElementById("error5")

const cardFrontName = () => {
  if (nameCardElement.value === "")
    {
    cardFrontNameElement.textContent = "JANE APPLESSED"
    }
  else{
    cardFrontNameElement.textContent = nameCardElement.value.toUpperCase()
  }
}   //front card name


const cardFrontNumber = () => {
  if (numberCardElement.value === "")
    {
      cardFrontNumberElement.textContent = "0000 0000 0000 0000"
    }
  else
    {
      cardFrontNumberElement.textContent = numberCardElement.value
    }
}   //front card numbers


const cardMonth = () => {
  if (monthCardElement.value === "")
    {
      cardMonthElement.textContent = "00"
    }
    else
    {
      cardMonthElement.textContent = monthCardElement.value      
    }
}   //front card month


const cardYear = () => {
  if (yearCardElement.value === "")
    {
      cardYearElement.textContent = "00"
    }
  else
    {
    cardYearElement.textContent = yearCardElement.value
    }
}   //front card year


const cardCVC = () => {
  if (cvcCardElement.value === "")
    {
      cvcCardElement.textContent = "000"
    }
    else
    {
      cardCvcElement.textContent = cvcCardElement.value
    }
}   //back card cvc



const formInfo = event => {
  event.preventDefault();

  const name = formElement.name.value
  const number = formElement.number.value
  const month = formElement.month.value
  const year = formElement.year.value
  const cvc = formElement.cvc.value
  
  if (nameCardElement.value === "") //error1
    {
      errorFirstElement.classList.remove("errorDisplay")
    }
  else
    {
      errorFirstElement.classList.add("errorDisplay")
    }

    
  if (numberCardElement.value === "") //error2
    {
      errorSecondElement.classList.remove("errorDisplay")
    }
  else
    {
      errorSecondElement.classList.add("errorDisplay")
    }


  if (monthCardElement.value === "") //error3
    {
      errorThirdElement.classList.remove("errorDisplay")
    }
    else
    {
      errorThirdElement.classList.add("errorDisplay")
    }


    if (yearCardElement.value === "") //error4
    {
      errorFourthElement.classList.remove("errorDisplay")
    }
    else
    {
      errorFourthElement.classList.add("errorDisplay")
    }


    if (cvcCardElement.value === "") //error5
    {
      errorFifthElement.classList.remove("errorDisplay")
      
    }
    else
    {
      errorFifthElement.classList.add("errorDisplay")
      
    }

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