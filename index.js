const firstNameText= document.getElementById('first-name')

    function onKeyDownFirst(event) {
    const text=firstNameText.value
     const first= document.getElementById("first")
      first.innerHTML=text
}
 firstNameText.addEventListener('keyup', onKeyDownFirst)
 
 
 const secondNameText= document.getElementById('second-name')
    function onKeyDownSecond(event) {
    const text=secondNameText.value
     const second= document.getElementById("second")
      second.innerHTML=text
}
 secondNameText.addEventListener('keyup', onKeyDownSecond)
 
 const lastNameText= document.getElementById('last-name')
    function onKeyDownThird(event) {
    const text=lastNameText.value
     const third= document.getElementById("third")
      third.innerHTML=text
}
 lastNameText.addEventListener('keyup', onKeyDownThird)
 
  const dateText= document.getElementById('date')
    function onKeyDownFourth(event) {
    const text=dateText.value
     const fourth= document.getElementById("fourth")
      fourth.innerHTML=text
}
 dateText.addEventListener('keyup', onKeyDownFourth)
 
  const locationText= document.getElementById('location')
    function onKeyDownFifth(event) {
    const text=locationText.value
     const fifth= document.getElementById("fifth")
      fifth.innerHTML=text
}
 locationText.addEventListener('keyup', onKeyDownFifth)


    
    // const themeClick=document.getElementById("hidden")
    // function toggle_visibility(event) {
    //   var e = document.getElementById("Pretty Posies");
    //   if(e.style.display == 'block')
    //       e.style.display = 'none';
    //   else
    //       e.style.display = 'block';
    // }
    
    // themeClick.addEventListener("onClick")

// function clickOnTheme (img) { 
//   const currentPosition = 
//     if (clickOnTheme){display.img.right}
//     .addEventListener(clickOnTheme)
    
// // 2 - Add the event listener
// }
const template= document.getElementById('right')


const prettyPosieButton = document.getElementById('Pretty-Posies')
 function onprettyPosieClick() {
  template.classList.remove('Bowl-of-Flowers')
  template.classList.remove('Painted-Flowers')
  template.classList.remove('Roses-and-Cake')
  template.classList.add('Pretty-Posies')
   
 }
 
const bowlOfFLowersButton = document.getElementById('Bowl-of-Flowers')
 function onbowlOfFlowersClick() {
   template.classList.remove('Pretty-Posies')
   template.classList.remove('Painted-Flowers')
   template.classList.remove('Roses-and-Cake')
   template.classList.add('Bowl-of-Flowers')
}

const paintedFLowersButton = document.getElementById('Painted-Flowers')
 function onPaintedFlowersClick() {
   template.classList.remove('Pretty-Posies')
   template.classList.remove('Bowl-of-Flowers')
   template.classList.remove('Roses-and-Cake')
   template.classList.add('Painted-Flowers')
}


const rosesAndCakeButton = document.getElementById('Roses-and-Cake')
 function rosesAndCakeClick() {
   template.classList.remove('Pretty-Posies')
   template.classList.remove('Bowl-of-Flowers')
   template.classList.remove('Painted-Flowers')
   template.classList.add('Roses-and-Cake')
 }
 
prettyPosieButton.addEventListener('click',onprettyPosieClick)
bowlOfFLowersButton.addEventListener('click', onbowlOfFlowersClick)
paintedFLowersButton.addEventListener('click', onPaintedFlowersClick)
rosesAndCakeButton.addEventListener('click', rosesAndCakeClick)

