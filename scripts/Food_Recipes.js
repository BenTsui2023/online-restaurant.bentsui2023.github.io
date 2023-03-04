/* Student name: Kei Wai Tsui
Student ID: 300361374
This the JS for my final project page - Food Recipes */

function addRemoveClass(event){
    let active_recipes = document.querySelectorAll(".current")

	for (active_recipe of active_recipes){       
	active_recipe.className = active_recipe.className.replace("current","")
	}
    
	//ref anchor
	let anchor = event.target
	
	//ref list
	let list = anchor.parentElement
	
	//add current class to the li element
	list.className += " current"
	
	//add "current" class to the  associated content panel
	let id = anchor.href.substring(anchor.href.length-9)
	
	//ref tab content and add "current" class
	document.getElementById(id).className += " current"
}

//call function
//ref ul element
let ul = document.getElementById("ul_recipes")

//add event listener
ul.addEventListener("click",addRemoveClass,false)