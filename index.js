//preview/template variable
const preview = document.getElementById('preview')

//variables for the buttons
const casual = document.getElementById("casual")
const floral = document.getElementById("floral")
const simple = document.getElementById("simple")

//preview/template event listeners
casual.addEventListener("click", onCasualClick)
function onCasualClick(event){
  preview.classList.remove('floral')
  preview.classList.remove('simple')
  preview.classList.add('casual')
}
floral.addEventListener("click", onFloralClick)
function onFloralClick(event){
  preview.classList.remove('casual')
  preview.classList.remove('simple')
  preview.classList.add('floral')
}
simple.addEventListener("click", onSimpleClick)
function onSimpleClick(event){
  preview.classList.remove('floral')
  preview.classList.remove('casual')
  preview.classList.add('simple')
}

//input variables for input fields
const name1 = document.getElementById("name1")
const name2 = document.getElementById("name2")
const lastName = document.getElementById("lastName")
const dateInput = document.getElementById("dateInput")
const locationW = document.getElementById("locationW")
//output variables for input fields

// event listeners for the input fields
name1.addEventListener("input", onName1Input)
function onName1Input(event){
  const name1Display = document.getElementById("name1Display")
  name1Display.innerHTML = name1.value + (" & ")
}
name2.addEventListener("input", onName2Input)
function onName2Input(event){
const name2Display = document.getElementById("name2Display")
name2Display.innerHTML = name2.value
}
lastName.addEventListener("input", onlNameInput)
function onlNameInput(event){
  const lastNameDisplay = document.getElementById("lastNameDisplay")
  lastNameDisplay.innerHTML = lastName.value
}
dateInput.addEventListener("input", ondateInput)
function ondateInput(event){
  const dateInputDisplay = document.getElementById("dateInputDisplay")
  dateInputDisplay.innerHTML = dateInput.value
}
locationW.addEventListener("input", onLocationInput)
function onLocationInput(event){
  const locationDisplay = document.getElementById("locationDisplay")
    locationDisplay.innerHTML= locationW.value
}
