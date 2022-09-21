function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  //block = view
  modalbg.style.display = "block";
  reservation.style.display = "none"
  form.style.display = "block"
}
// close modal form
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  //none = close
  modalbg.style.display = "none";
}


// Implement from entries

// Values for the DOM

const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");


// Error message

const checkbox = document.getElementById("checkbox1")
const firstError = document.getElementById("firstNameErrorMsg")
const lastError = document.getElementById("lastNameErrorMsg")
const emailError = document.getElementById("emailErrorMsg")
const birthError = document.getElementById("birthErrorMsg")
const quantityError = document.getElementById("quantityErrorMsg")
const locationError = document.getElementById("locationErrorMsg")
const validationError = document.getElementById("validationErrorMsg")

// Reservation complete
const reservation = document.getElementById("reservation")
const btnClose = document.getElementById("btn-close")


// Regex 
const numbersRegEx = new RegExp(/^[0-9]{1,2}$/);
const lettersRegEx = new RegExp(/^[a-zA-ZÀ-ÿ_-]{2,50}$/);
const emailRegEx = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);
const birthRegEx = new RegExp(/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/)


form.addEventListener('submit', (e) => {
  e.preventDefault();
})


// Checking the values of the form

function validate(){
  // boolean default value = false
  let isFirst;
  let isLast;
  let isEmail;
  let isBirth;
  let isQuantity;
  let isRadio;
  let isCheckbox;


  if(!lettersRegEx.test(firstName.value) || firstName.value == null) {
    firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  } else {
    isFirst = true
    firstError.innerText = ""
  }

  if(!lettersRegEx.test(firstName.value) || lastName.value == null) {
    lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  } else {
    isLast = true
    lastError.innerText = ""
  }

  if(!emailRegEx.test(email.value) || email.value == null) {
    emailError.innerText = "Veuillez entrer une adresse mail valide."
  } else {
    isEmail = true
    emailError.innerText = ""
  }

  if(!birthRegEx.test(birthDate.value) || birthDate.value == null) {
    birthError.innerText = "Vous devez entrer votre date de naissance."
  } else {
    isBirth = true
    birthError.innerText = ""
  }

  console.log(birthDate.value)

  if(!numbersRegEx.test(quantity.value) || quantity.value == null) {
    quantityError.innerText = "Vous devez saisir un nombre entre 0 et 99"
  } else {
    isQuantity = true
    quantityError.innerText = ""
  }
  
  if(loc1.checked || loc2.checked || loc3.checked || loc4.checked || loc5.checked || loc6.checked) {
    isRadio = true
    locationError.innerText = ""
  } else {
    locationError.innerText = "Vous devez choisir une option."
  }

  if(checkbox.checked) {
    isCheckbox = true
    validationError.innerText = ""
  } else {
    validationError.innerText = "Vous devez vérifier que vous acceptez les termes et conditions."
  }


  // check that all values are correct

  if((isFirst && isLast && isEmail && isBirth && isQuantity && isRadio && isCheckbox) == true) {
    form.style.display = "none"
    reservation.style.display = "flex"  
  } 
}


// Close button
btnClose.addEventListener("click", closeModal)