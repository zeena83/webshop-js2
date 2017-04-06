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
let limitFirst = document.getElementById('ex2');
let btnVisa = document.getElementById('visa');








//add

btnAdd.addEventListener('click', function(){
		show.innerHTML ="";
		firebase.database().ref('inputInformation/').push({
			Produkt: inputObject1.value,
			Antal: Number(inputObject2.value),
			Färg:inputObject3.value,
			Pris:Number(inputObject4.value)
			

		})

firebase.database().ref('inputInformation/').on('child_added', function(snapshot, prevChildKey) {

                let data = snapshot.val();
                addItem(data);

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
	
	
	
//cristina
	
	
	function addItem(data) {
                let items = document.getElementById('items');
                let tr = document.createElement('tr');
                tr.style.margin = '2em';
                tr.style.color = 'black';

                tr.innerHTML = `
			<td style="padding:1em;" >${data.Produkt}</td> 
			<td style="padding:1em;" >${data.Antal}</td> 
			<td style="padding:1em;"  >${data.Färg}</td>
			<td style="padding:1em;" >${data.Pris}</td> 
			`;
                items.appendChild(tr);
            }

	
	
	
	
// sortering efter produkts namn
	
	btnsortNamn.addEventListener('click', function(){	
	    show.style.display ='none';
	    showshow.style.display = 'inline';
	    showshow.innerHTML = "";
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
            db.ref('inputInformation/').orderByChild('Pris').once('value', function(snapshot) {
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
		
	
	
	//limittofrist

	btnVisa.addEventListener('click',function(event){ 
           
            show.innerHTML=""; 
		    show.innerHTML = "";
            
		    let db = firebase.database();   
            let limit= Number(limitFirst.value);  
              //console.log(typeof userrequest);
             
            db.ref('inputInformation/').limitToFirst(limit).once('value',function(snapshot) {
               // snapshot.val();  // VARNING! Behåller inte sorteringen
                snapshot.forEach( inputInformation=>  {
                  console.log(inputInformation.val());
                    let li= document.createElement('li');
                    li.innerHTML= `Produkt: ${ inputInformation.val().Produkt } Antal:${inputInformation.val().Antal} Färg: ${inputInformation.val().Färg}  pris:${inputInformation.val().Pris}`;
                     show.appendChild(li);
                      
				}) //snapshot 
                   
                    
                });// db.ref 
                
         
               }); //limitlist event
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});   //load


