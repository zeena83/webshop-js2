window.addEventListener('load', function(){
	
	
	// hämta elementer
	
let inputObject1 = document.getElementById('input1');
let inputObject2 = document.getElementById('input2');
let inputObject3 = document.getElementById('input3');
let inputObject4 = document.getElementById('input4');
let btnAdd = document.getElementById('add');
let showData = document.getElementById('show');
let btnsortNamn = document.getElementById('sort1');
let btnsortAntal = document.getElementById('sort2');
let btnsortFärg = document.getElementById('sort3');
let btnsortPris = document.getElementById('sort4');


	btnAdd.addEventListener('click', function(){
		show.innerHTML ="";
		firebase.database().ref('inputInformation/').push({
			Produkt: inputObject1.value,
			Antal: inputObject2.value,
			Färg:inputObject3.value,
			Pris:inputObject4.value
			

		})


	});
	
	
	
	
	
	//visa innehållet i database
	
firebase.database().ref('inputInformation/').on('value', function(snapshot){
	 let dataobject = snapshot.val();
	 for(let i in dataobject){
		 let li = document.createElement('li');
		 console.log('data', dataobject[i]);
		 li.innerHTML = dataobject[i].Produkt + " ," + dataobject[i].Antal + " , " + dataobject[i].Färg + " , " + dataobject[i].Pris;
		
		 //
		 show.insertBefore(li,show.firstChild);
		 
	 }
		
	
	console.log(snapshot.val());
	});
	
	
	
	
	
	
	
	
// sortering efter produkts namn
	
	btnsortNamn.addEventListener('click', function(){	
	  show.innerHTML ="";
	    let db = firebase.database();
            db.ref('inputInformation/').orderByChild('Produkt').on('value', function(snapshot) {
	           snapshot.val();  // VARNING! Behåller inte sorteringen
	           
				snapshot.forEach( child => {
		             let objekt = child.val();// objekten kommer i ordning
				      console.log (child.val());
				   
				     let li = document.createElement('li');
		
		            li.innerHTML = objekt.Produkt + " , " + objekt.Antal + " , " + objekt.Färg + " , " + objekt.Pris;
		 
		           show.appendChild(li);
	           })
		 });
	});	
		
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});


