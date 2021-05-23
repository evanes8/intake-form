const marriedRadio= document.getElementById('gridRadios1');
const form = document.getElementById('no.2');
const fieldset=document.getElementById('marriedRadio');
const myradios= document.getElementById('myradios');
let allow = 'y'	
function choicemade(){


if(marriedRadio.checked&& allow=='y'){
const para = document.createElement('p');
const spouseInput=document.createElement('input');
spouseInput.setAttribute("type", "text");
spouseInput.setAttribute("Id", "newspouse");
spouseInput.setAttribute("class", "col-md-6");
para.textContent = ' Name of Spouse:';
fieldset.appendChild(para);
fieldset.appendChild(spouseInput);
  allow='n';
}
else{ 

	para2=document.querySelector('p');
	para2.remove();
	spouseInput2=document.getElementById('newspouse');
	spouseInput2.remove();
	 allow='y';

}
//set it to do nothing if its pressed again

}

marriedRadio.addEventListener('click', choicemade);




//make a function that does something when something is clicked
//prevent double clicking
//whenever a different option is clicked that thing that was created goes away


//how to do this?
//add event listerner for each positive and negative choice
//prevent double clicking, prevent negative from