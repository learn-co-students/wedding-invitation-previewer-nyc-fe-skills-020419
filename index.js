let outputs = document.getElementById('outputs')
let firstPerson = document.getElementById('firstPerson')
let firstPersonOutput = document.getElementById('firstPersonOutput')
let secondPerson = document.getElementById('secondPerson')
let secondPersonOutput = document.getElementById('secondPersonOutput')
let date = document.getElementById('date')
let dateOutput = document.getElementById('dateOutput')
let locationInput = document.getElementById('location')
let locationOutput = document.getElementById('locationOutput')
let button1 = document.getElementById('button1')


function onTypeFirstPerson(event){
  let firstName = firstPerson.value
  firstPersonOutput.innerHTML = firstName
  document.getElementById('firstPersonInitial').innerHTML = firstName.charAt(0)
  
}

function onTypeSecondPerson(event){
  let secondName = secondPerson.value
  secondPersonOutput.innerHTML = secondName
  document.getElementById('secondPersonInitial').innerHTML = secondName.charAt(0)
}

function onTypeDate(event){
  dateOutput.innerHTML = date.value
}

function onTypeLocation(event){
  locationOutput.innerHTML = locationInput.value
}

function classChangeButton1(event){
  document.getElementById('outputs').classList.remove('hawaii')
  document.getElementById('outputs').classList.remove('wood')
  document.getElementById('outputs').classList.add('easter')
  document.getElementById('output-wrapper').classList.remove('hawaii-wrapper')
  document.getElementById('output-wrapper').classList.remove('wood-wrapper')
  document.getElementById('output-wrapper').classList.add('easter-wrapper')
  document.getElementById('firstPersonOutput').classList.remove('outputNamesHawaii')
  document.getElementById('firstPersonOutput').classList.remove('outputNamesWood')
  document.getElementById('firstPersonOutput').classList.add('outputNamesEaster')
  document.getElementById('secondPersonOutput').classList.remove('outputNamesHawaii')
  document.getElementById('secondPersonOutput').classList.remove('outputNamesWood')
  document.getElementById('secondPersonOutput').classList.add('outputNamesEaster')
}

function classChangeButton2(event){
  document.getElementById('outputs').classList.remove('easter')
  document.getElementById('outputs').classList.remove('hawaii')
  document.getElementById('outputs').classList.add('wood')
  document.getElementById('output-wrapper').classList.remove('easter-wrapper')
  document.getElementById('output-wrapper').classList.remove('hawaii-wrapper')
  document.getElementById('output-wrapper').classList.add('wood-wrapper')
  document.getElementById('firstPersonOutput').classList.remove('outputNamesEaster')
  document.getElementById('firstPersonOutput').classList.remove('outputNamesHawaii')
  document.getElementById('firstPersonOutput').classList.add('outputNamesWood')
  document.getElementById('secondPersonOutput').classList.remove('outputNamesEaster')
  document.getElementById('secondPersonOutput').classList.remove('outputNamesHawaii')
  document.getElementById('secondPersonOutput').classList.add('outputNamesWood')
}

function classChangeButton3(event){
  document.getElementById('outputs').classList.remove('easter')
  document.getElementById('outputs').classList.remove('wood')
  document.getElementById('outputs').classList.add('hawaii')
  document.getElementById('output-wrapper').classList.remove('easter-wrapper')
  document.getElementById('output-wrapper').classList.remove('wood-wrapper')
  document.getElementById('output-wrapper').classList.add('hawaii-wrapper')
  document.getElementById('firstPersonOutput').classList.remove('outputNamesEaster')
  document.getElementById('firstPersonOutput').classList.remove('outputNamesWood')
  document.getElementById('firstPersonOutput').classList.add('outputNamesHawaii')
  document.getElementById('secondPersonOutput').classList.remove('outputNamesEaster')
  document.getElementById('secondPersonOutput').classList.remove('outputNamesWood')
  document.getElementById('secondPersonOutput').classList.add('outputNamesHawaii')
}


firstPerson.addEventListener('keyup', onTypeFirstPerson)
secondPerson.addEventListener('keyup', onTypeSecondPerson)
date.addEventListener('keyup', onTypeDate)
locationInput.addEventListener('keyup', onTypeLocation)
button1.addEventListener('click', classChangeButton1)
button2.addEventListener('click', classChangeButton2)
button3.addEventListener('click', classChangeButton3)


// let inviteName = document.createElement('div')
//   outputs.appendChild(inviteName)
//   inviteName.innerHTML = event.key