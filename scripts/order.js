/* Student name: Kei Wai Tsui
Student ID: 300361374
This the js file for my final project page - order */

//JS for accordion panel

//function to toggle icons
function toggleFaIcons(element,className1,className2){
	element.classList.toggle(className1)
	element.classList.toggle(className2)
}

//ref the container Element
let wrapperForAccordion = document.getElementsByClassName("wrapper_for_accordion")

//add event listener to wrapper
for (let i=0; i<wrapperForAccordion.length; i++){
	//add event listener
	wrapperForAccordion[i].addEventListener('click', function(){
		this.classList.toggle('active')

        //ref the selected div content element and icon
        let currentItem = wrapperForAccordion[i]
		let content = currentItem.querySelector(".fa")
		let down_icon = "fa-angle-down"
		let up_icon = "fa-angle-up"
		
		//call toggleFaIcons() function
		toggleFaIcons(content,down_icon,up_icon)
		})
}

//JS for the model dialog panel

//ref button and modal dialogArguments
let modalbtn = document.getElementById("modalBtn")
let modal = document.getElementById("modal")

//when the button is clicked, show the modal dialog 
modalbtn.onclick = function(){
	modal.style.display = "block";
}

//JS for the order form
//ref the buttons, checkboxes,radio buttons, label and text
let reset = document.getElementById("btnReset");
let submit = document.getElementById("btnSubmit");
let btnConfirm = document.getElementById("btnConfirm");

let pickup = document.getElementById("pickup");
let burnaby = document.getElementById("burnaby");
let nVancouver = document.getElementById("nVancouver");
let richmond = document.getElementById("richmond");
let eVancouver = document.getElementById("eVancouver");

let checkbox = document.getElementsByName("food");
let radiobtn = document.getElementsByName("delivery_address");
let quantity_text = document.getElementsByName("quantity");

let charSiu = document.getElementById("charSiu");
let charSiuQnty = document.getElementById("charSiuQnty");
let dimSum = document.getElementById("dimSum");
let dimSumQnty = document.getElementById("dimSumQnty");
let kimchi = document.getElementById("kimchi");
let kimchiQnty = document.getElementById("kimchiQnty");
let maPoTofu = document.getElementById("maPoTofu");
let maPoTofuQnty = document.getElementById("maPoTofuQnty");
let mushroomRisotto = document.getElementById("mushroomRisotto");
let mushroomRisottoQnty = document.getElementById("mushroomRisottoQnty");
let kimbap = document.getElementById("kimbap");
let kimbapQnty = document.getElementById("kimbapQnty");
let pasta = document.getElementById("pasta");
let pastaQnty = document.getElementById("pastaQnty");
let yakisoba = document.getElementById("yakisoba");
let yakisobaQnty = document.getElementById("yakisobaQnty");
let ramen = document.getElementById("ramen");
let ramenQnty = document.getElementById("ramenQnty");
let kungPaoChicken = document.getElementById("kungPaoChicken");
let kungPaoChickenQnty = document.getElementById("kungPaoChickenQnty");
let sakeSteamedClams = document.getElementById("sakeSteamedClams");
let sakeSteamedClamsQnty = document.getElementById("sakeSteamedClamsQnty");
let pizza = document.getElementById("pizza");
let pizzaQnty = document.getElementById("pizzaQnty");

let output = document.getElementById("foodPrice");

//ref the delivery cost and food cost
let deliveryCost =0;
let foodCost =0;
let total=0;
let discount = "0%";

//function to calculate the cost
function calculateCost(){
    //calculate the delivery cost
    if(pickup.checked){
        deliveryCost += Number(pickup.value);
    }
    if(burnaby.checked){
        deliveryCost +=Number(burnaby.value);
    }
    if(nVancouver.checked){
        deliveryCost +=Number(nVancouver.value);
    }
    if(richmond.checked){
        deliveryCost +=Number(richmond.value);
    }
    if(eVancouver.checked){
        deliveryCost +=Number(eVancouver.value);
    }
    //calculate the food cost
    if(charSiu.checked){
        foodCost += (Number(charSiu.value) * charSiuQnty.value);
    }
    if(dimSum.checked){
        foodCost += (Number(dimSum.value) * dimSumQnty.value);
    }
    if(kimchi.checked){
        foodCost += (Number(kimchi.value) * kimchiQnty.value);
    }
    if(maPoTofu.checked){
        foodCost += (Number(maPoTofu.value) * maPoTofuQnty.value);
    }
    if(mushroomRisotto.checked){
        foodCost += (Number(mushroomRisotto.value) * mushroomRisottoQnty.value);
    }
    if(kimbap.checked){
        foodCost += (Number(kimbap.value) * kimbapQnty.value);
    }
    if(pasta.checked){
        foodCost += (Number(pasta.value) * pastaQnty.value);
    }
    if(yakisoba.checked){
        foodCost += (Number(yakisoba.value) * yakisobaQnty.value);
    }
    if(ramen.checked){
        foodCost += (Number(ramen.value) * ramenQnty.value);
    }
    if(kungPaoChicken.checked){
        foodCost += (Number(kungPaoChicken.value) * kungPaoChickenQnty.value);
    }
    if(sakeSteamedClams.checked){
        foodCost += (Number(sakeSteamedClams.value) * sakeSteamedClamsQnty.value);
    }
    if(pizza.checked){
        foodCost += (Number(pizza.value) * pizzaQnty.value);
    }
    //calculate the total cost
    if(foodCost >=50 && foodCost <= 80){
        total = (deliveryCost + foodCost) * 0.9;
        discount = "10%"
    }
    else if(foodCost >=81 && foodCost <= 100){
        total = (deliveryCost + foodCost) * 0.85;
        discount = "15%"
    }
    else if(foodCost > 100){
        total = (deliveryCost + foodCost) * 0.8;
        discount = "20%"
    }
    else{
        total = deliveryCost + foodCost;
        discount = "0%"
    }
    //display the output on the summary
    output.innerHTML = `Food Cost: ${foodCost.toFixed(2)} <br> Delivery Cost: $${deliveryCost.toFixed(2)} <br> Your discount: ${discount} <br> Total Cost: $${total.toFixed(2)}`;
    //reset the cost
    deliveryCost =0;
    foodCost =0;
    total =0;
}

//function to reset the summary and the input from user
function clearCost(){
    output.innerHTML = "";
    //reset the checkboxes
    for(let i=0;i<checkbox.length;i++){
        checkbox[i].checked = false;
    }
    //reset the radio buttons
    for(let i=0;i<radiobtn.length;i++){
        radiobtn[i].checked = false;
    } 
    //reset the quantity 
    for(let i=0;i<quantity_text.length;i++){
        quantity_text[i].value = "0";
    }  
}   
//function to promt user to pay
function inputPayment(){
    let input = prompt(`Please enter youe credit card no or online bank receipt:`, "");
    if(input == ""){
        alert("Not receive your input, Please enter youe credit card no or online bank receipt:")
    }
    else if(input !=null){
        alert("Thank you")
    }
}
//call the calculateCost, inputPayment and clearCost functions
submit.onclick = function(){calculateCost();}
reset.onclick = function(){clearCost();}
btnConfirm.onclick = function(){inputPayment();}