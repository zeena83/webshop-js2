window.addEventListener('load', function(){
	
	
	// hämta elementer
	
let inputObject1 = document.getElementById('input1');
let inputObject2 = document.getElementById('input2');
let inputObject3 = document.getElementById('input3');
let btnAdd = document.getElementById('add');
let showData = document.getElementById('show');



	btnAdd.addEventListener('click', function(){
	     showData.innerHTML = "";
		firebase.database().ref('inputInformation/').push({
			Project: inputObject1.value,
			Antal: inputObject2.value,
			färje:inputObject3.value
			

		})


	});
	
	
	
	
	
	//visa innehållet i database
	
firebase.database().ref('inputInformation/').on('value', function(snapshot){
	 let dataobject = snapshot.val();
	 for(let i in dataobject){
		 let li = document.createElement('li');
		 console.log('data', dataobject[i]);
		 li.innerHTML = dataobject[i].Project + " " + dataobject[i].Antal + " : " + dataobject[i].färje;
		 
		// För att få data att hamna längst up
		//showData.insertBefore(li, chatMe.firstChild);
		 
	 }
		
	
	console.log(snapshot.val());
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});


