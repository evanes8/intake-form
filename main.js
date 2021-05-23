const marriedRadio= document.getElementById('gridRadios1');
const divorcedRadio= document.getElementById('gridRadios2');
const widowedRadio= document.getElementById('gridRadios3');
const nevermarriedRadio= document.getElementById('gridRadios4');

const form = document.getElementById('no.2');
const fieldset=document.getElementById('marriedRadio');
const myradios= document.getElementById('myradios');
let allow = 'y'	



function switchon(){
if(allow=='y'){
 para = document.createElement('p');
spouseInput=document.createElement('input');
spouseInput.setAttribute("type", "text");
spouseInput.setAttribute("Id", "newspouse");
spouseInput.setAttribute("class", "col-md-6");
para.textContent = ' Name of Spouse:';
fieldset.appendChild(para);
fieldset.appendChild(spouseInput);
  allow='n';

}

}

function switchoff(){
	if(allow='n'){
	para.remove();
	spouseInput.remove();
	 allow='y';


	}


}


marriedRadio.addEventListener('click', switchon);
divorcedRadio.addEventListener('click', switchoff);
widowedRadio.addEventListener('click', switchoff )
nevermarriedRadio.addEventListener('click', switchoff)



//functionize this
//parameters:   no of total targets, pos of positive target,  func_if_posiitive, func_if_negative, targets,
//this should really be a class 


//just create a class for yes no questiond with a consturctor,
//yesno class is gonna be constructed with what dom stuff it will create when switched on
//yesno(yes DOM obj, no Dom obj, label to be displayed when yes is clicked along wit input)


function Yesno(yesDom, noDom, inputLabel){
this.yesDom=yesDom;
this.noDom=noDom;
this.inputLabel=inputLabel;
}



Yesno.prototype.execute = function(){

	function yesScript(){
		if(allow=='y'){
 para = document.createElement('p');
spouseInput=document.createElement('input');
spouseInput.setAttribute("type", "text");
spouseInput.setAttribute("Id", "newspouse");
spouseInput.setAttribute("class", "col-md-6");
para.textContent = ' Name of Spouse:';
fieldset.appendChild(para);
fieldset.appendChild(spouseInput);
  allow='n';

}



	}

	function noScript(){

	}




yesDom.addEventListener('click',  )
noDom.addEventListener('click',)
}



