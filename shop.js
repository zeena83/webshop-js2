window.addEventListener('load', function(){
	
	
	// hämta elementer
	
let inputObject1 = document.getElementById('input1');
let inputObject2 = document.getElementById('input2');
let inputObject3 = document.getElementById('input3');
let inputObject4 = document.getElementById('input4');
let btnAdd = document.getElementById('add');
let showData = document.getElementById('show');
let showDataShow = document.getElementById('showshow');
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
	    show.style.display ='none';
	    showshow.style.display = 'inline';
	
	      let db = firebase.database();
            db.ref('inputInformation/').orderByChild('Produkt').on('value', function(snapshot) {
	           snapshot.val();  // VARNING! Behåller inte sorteringen
	           
				snapshot.forEach( child => {
		             let objekt = child.val();// objekten kommer i ordning
				      console.log (child.val());
				   
				     let li = document.createElement('li');
		
		            li.innerHTML = objekt.Produkt + " , " + objekt.Antal + " , " + objekt.Färg + " , " + objekt.Pris;
		 
		           showshow.appendChild(li);
	           })
		 });
	});	
	
	
	
	// sortering efter produkts antal
	
	btnsortAntal.addEventListener('click', function(){	
	    show.style.display ='none';
	    showshow.style.display = 'inline';
		showshow.innerHTML = "";
	      let db = firebase.database();
            db.ref('inputInformation/').orderByChild('Antal').on('value', function(snapshot) {
	           snapshot.val();  // VARNING! Behåller inte sorteringen
	           
				snapshot.forEach( child => {
		             let objekt = child.val();// objekten kommer i ordning
				      console.log (child.val());
				   
				     let li = document.createElement('li');
		
		            li.innerHTML = objekt.Produkt + " , " + objekt.Antal + " , " + objekt.Färg + " , " + objekt.Pris;
		 
		           showshow.appendChild(li);
	           })
		 });
	});	
		
	
	
	
	
	// sortering efter produkts färg
	
	btnsortFärg.addEventListener('click', function(){	
	    show.style.display ='none';
	    showshow.style.display = 'inline';
		showshow.innerHTML = "";
	      let db = firebase.database();
            db.ref('inputInformation/').orderByChild('Färg').on('value', function(snapshot) {
	           snapshot.val();  // VARNING! Behåller inte sorteringen
	           
				snapshot.forEach( child => {
		             let objekt = child.val();// objekten kommer i ordning
				      console.log (child.val());
				   
				     let li = document.createElement('li');
		
		            li.innerHTML = objekt.Produkt + " , " + objekt.Antal + " , " + objekt.Färg + " , " + objekt.Pris;
		 
		           showshow.appendChild(li);
	           })
		 });
	});	
		
	
	
	// sortering efter produkts pris
	
	btnsortPris.addEventListener('click', function(){	
	    show.style.display ='none';
	    showshow.style.display = 'inline';
		showshow.innerHTML = "";
	      let db = firebase.database();
            db.ref('inputInformation/').orderByChild('Pris').on('value', function(snapshot) {
	           snapshot.val();  // VARNING! Behåller inte sorteringen
	           
				snapshot.forEach( child => {
		             let objekt = child.val();// objekten kommer i ordning
				      console.log (child.val());
				   
				     let li = document.createElement('li');
		
		            li.innerHTML = objekt.Produkt + " , " + objekt.Antal + " , " + objekt.Färg + " , " + objekt.Pris;
		 
		           showshow.appendChild(li);
	           })
		 });
	});	
		
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});


