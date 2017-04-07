window.addEventListener('load', function(){
	
	
	// hämta elementer
	
let inputObject1 = document.getElementById('input1');
let inputObject2 = document.getElementById('input2');
let inputObject3 = document.getElementById('input3');
let inputObject4 = document.getElementById('input4');
let btnAdd = document.getElementById('add');
//let showData = document.getElementById('show');
//let showDataShow = document.getElementById('showshow');
let btnsortNamn = document.getElementById('sort1');
let btnsortAntal = document.getElementById('sort2');
let btnsortFärg = document.getElementById('sort3');
let btnsortPris = document.getElementById('sort4');
let limitFirst = document.getElementById('ex2');
let btnVisa = document.getElementById('visa');








//add

btnAdd.addEventListener('click', function(){
		items.innerHTML ="";
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
	
	
	
	
	/*
	//visa innehållet i database
	
firebase.database().ref('inputInformation/').on('value', function(snapshot){
	 let dataobject = snapshot.val();
	 for(let i in dataobject){
		 let li = document.createElement('li');
		 console.log('data', dataobject[i]);
		 li.innerHTML = dataobject[i].Produkt + " ," + dataobject[i].Antal + " , " + dataobject[i].Färg + " , " + dataobject[i].Pris;
		
		 //
		 items.insertBefore(li,show.firstChild);
		 
	 }
		
	
	console.log(snapshot.val());
	});
	
	*/
	
//cristina
	
	
	function addItem(data) {
                let items = document.getElementById('items');
                let tr = document.createElement('tr');
                tr.style.margin = '1em';
                tr.style.color = 'black';

                tr.innerHTML = `
			<td style="padding:1em;" >${data.Produkt}</td> 
			<td style="padding:1em;width:92px;" >${data.Antal}</td> 
			<td style="padding:1em;width:90px;"  >${data.Färg}</td>
			<td style="padding:1em;width:50px;" >${data.Pris}</td> 
			`;
                items.appendChild(tr);
            }

	
	
	
	
// sortering efter produkts namn
	
	btnsortNamn.addEventListener('click', function(){	
	   // show.style.display ='none';
	    //showshow.style.display = 'inline';
	    items.innerHTML = "";
	      let db = firebase.database();
            db.ref('inputInformation/').orderByChild('Produkt').on('value', function(snapshot) {
	           snapshot.val();  // VARNING! Behåller inte sorteringen
	           
				snapshot.forEach( child => {
		             let objekt = child.val();// objekten kommer i ordning
				      console.log (child.val());
				   
				     //let li = document.createElement('li');
		             let tr = document.createElement('tr');
					 tr.innerHTML = `
			<td style="padding:1em;" >${objekt.Produkt}</td> 
			<td style="padding:1em;width:92px;" >${objekt.Antal}</td> 
			<td style="padding:1em;width:90px;"  >${objekt.Färg}</td>
			<td style="padding:1em;width:50px;" >${objekt.Pris}</td> 
			`;
					
				     //tr.innerHTML = objekt.Produkt + " , " + objekt.Antal + " , " + objekt.Färg + " , " + objekt.Pris;
		 
		           items.appendChild(tr);
	           })
		 });
	});	
	
	
	
	// sortering efter produkts antal
	
	btnsortAntal.addEventListener('click', function(){	
	   // show.style.display ='none';
	   // showshow.style.display = 'inline';
		items.innerHTML = "";
	      let db = firebase.database();
            db.ref('inputInformation/').orderByChild('Antal').on('value', function(snapshot) {
	           snapshot.val();  // VARNING! Behåller inte sorteringen
	           
				snapshot.forEach( child => {
		             let objekt = child.val();// objekten kommer i ordning
				      console.log (child.val());
				   
				     //let li = document.createElement('li');
					let tr = document.createElement('tr');
					 tr.innerHTML = `
			<td style="padding:1em;" >${objekt.Produkt}</td> 
			<td style="padding:1em;width:92px;" >${objekt.Antal}</td> 
			<td style="padding:1em;width:90px;"  >${objekt.Färg}</td>
			<td style="padding:1em;width:50px;" >${objekt.Pris}</td> 
			`;
				
		           // tr.innerHTML = objekt.Produkt + " , " + objekt.Antal + " , " + objekt.Färg + " , " + objekt.Pris;
		 
		           items.appendChild(tr);
	           })
		 });
	});	
		
	
	
	
	
	// sortering efter produkts färg
	
	btnsortFärg.addEventListener('click', function(){	
	    //show.style.display ='none';
	    //showshow.style.display = 'inline';
		items.innerHTML = "";
	      let db = firebase.database();
            db.ref('inputInformation/').orderByChild('Färg').on('value', function(snapshot) {
	           snapshot.val();  // VARNING! Behåller inte sorteringen
	           
				snapshot.forEach( child => {
		             let objekt = child.val();// objekten kommer i ordning
				      console.log (child.val());
				   
				     //let li = document.createElement('li');
					let tr = document.createElement('tr');
					 tr.innerHTML = `
			<td style="padding:1em;" >${objekt.Produkt}</td> 
			<td style="padding:1em;width:92px;" >${objekt.Antal}</td> 
			<td style="padding:1em;width:90px;"  >${objekt.Färg}</td>
			<td style="padding:1em;width:50px;" >${objekt.Pris}</td> 
			`;
					
		
		            //tr.innerHTML = objekt.Produkt + " , " + objekt.Antal + " , " + objekt.Färg + " , " + objekt.Pris;
		 
		           items.appendChild(tr);
	           })
		 });
	});	
		
	
	
	// sortering efter produkts pris
	
	btnsortPris.addEventListener('click', function(){	
	    //show.style.display ='none';
	    //showshow.style.display = 'inline';
		items.innerHTML = "";
	      let db = firebase.database();
            db.ref('inputInformation/').orderByChild('Pris').once('value', function(snapshot) {
	           snapshot.val();  // VARNING! Behåller inte sorteringen
	           
				snapshot.forEach( child => {
		             let objekt = child.val();// objekten kommer i ordning
				      console.log (child.val());
				   
				    // let li = document.createElement('li');
					let tr = document.createElement('tr');
					 tr.innerHTML = `
			<td style="padding:1em;" >${objekt.Produkt}</td> 
			<td style="padding:1em;width:92px;" >${objekt.Antal}</td> 
			<td style="padding:1em;width:90px;"  >${objekt.Färg}</td>
			<td style="padding:1em;width:50px;" >${objekt.Pris}</td> 
			`;
					
		
		            //tr.innerHTML = objekt.Produkt + " , " + objekt.Antal + " , " + objekt.Färg + " , " + objekt.Pris;
		 
		           items.appendChild(tr);
	           })
		 });
	});	
		
	
	
	//limittofrist

	btnVisa.addEventListener('click',function(event){ 
           
            items.innerHTML=""; 
		    //showshow.innerHTML = "";
            
		    let db = firebase.database();   
            let limit= Number(limitFirst.value);  
              //console.log(typeof userrequest);
             
            db.ref('inputInformation/').limitToFirst(limit).once('value',function(snapshot) {
               // snapshot.val();  // VARNING! Behåller inte sorteringen
                snapshot.forEach( inputInformation=>  {
                  console.log(inputInformation.val());
                    //let li= document.createElement('li');
					let tr = document.createElement('tr');
					 tr.innerHTML = `
			<td style="padding:1em;" >${inputInformation.val().Produkt}</td> 
			<td style="padding:1em;width:92px;" >${inputInformation.val().Antal}</td> 
			<td style="padding:1em;width:90px;"  >${inputInformation.val().Färg}</td>
			<td style="padding:1em;width:50px;" >${inputInformation.val().Pris}</td> 
			`;
                   // tr.innerHTML= `Produkt: ${ inputInformation.val().Produkt } Antal:${inputInformation.val().Antal} Färg: ${inputInformation.val().Färg}  pris:${inputInformation.val().Pris}`;
                     items.appendChild(tr);
                      
				}) //snapshot 
                   
                    
                });// db.ref 
                
         
               }); //limitlist event
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});   //load


