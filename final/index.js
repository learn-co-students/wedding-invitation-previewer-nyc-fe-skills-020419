

function info() {
    let fInitial = ''
    let first = document.getElementById("first").value;
    if (first.length > 0){
    fInitial = first[0];
    }
    
    let sInitial = ''
    let second = document.getElementById("second").value;
    if (second.length > 0){
    sInitial = second[0];
    }
    
    let last = document.getElementById("last").value;
    let location = document.getElementById("location-input").value;
    let date = document.getElementById('date-input').value;
  
    document.getElementById("initials").innerHTML = fInitial + " & " +sInitial;
    document.getElementById("both-names").innerHTML = first + " & " + second;
    document.getElementById("last-name").innerHTML = last; 
  	document.getElementById("date").innerHTML = date;
    document.getElementById("location").innerHTML = location; 

}

// function onDateChange (event) {
//   let timeDateOutput = document.getElementById("time_date_input").value;
//   timeDateOutput.innerHTML = (event.target.value)
// }


const input = document.getElementById('first');
 
// input.onkeyup = function(){
//     document.getElementById('first-name').innerHTML = input.value;
// }

// first.addEventListener('keyup',onKeyUp);


function changeBackground(){
  const templateText = document.getElementById('templateTextContainer') 
	document.getElementById("templateChange").style.backgroundImage = "url(https://i.ibb.co/sjDsxZc/e583b3350ca80016dcdc28cc5fea3d01.png)";
	templateText.classList.add('formalText')
	templateText.classList.remove('springText')
	templateText.classList.remove('artDecoText')
}

function changeBackground2(){
  const templateText = document.getElementById('templateTextContainer') 
	document.getElementById("templateChange").style.backgroundImage = "url(https://i.ibb.co/tbgWJBZ/blank-wedding-invitation-card-designs-empty-black-dgfitness-co-732x1024.jpg)";
	templateText.classList.add('springText')
	templateText.classList.remove('formalText')
	templateText.classList.remove('artDecoText')
}

function changeBackground3(){
  const templateText = document.getElementById('templateTextContainer') 
	document.getElementById("templateChange").style.backgroundImage = "url(https://i.ibb.co/n1FwHjh/Ombre-invitation.jpg)";
	console.log('hi')
	templateText.classList.add('artDecoText')
	templateText.classList.remove('springText')
	templateText.classList.remove('formalText')
}


