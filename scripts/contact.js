/* Student name: Kei Wai Tsui
Student ID: 300361374
This the js file for my final project page - contact */

//ref texts, buttons
let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let email = document.getElementById("email");
let teleP = document.getElementById("tele");
let comment = document.getElementById("comment");
let btnSubmit = document.getElementById("btnSubmit");
let btnreset = document.getElementById("btnReset");
let radiobtn_info = document.getElementsByName("infoLikehood");
let radiobtn_food = document.getElementsByName("foodLikehood");

//funcction to check wether the input is valid and entered
function CheckForInvalidInput(){
    try{
        //throw an exception if no inputs have been entered
        if(lastName.value == ""){      
            throw "Please enter your last name";
        }
        if(firstName.value == ""){
            throw "Please enter your first name";
        }
        if(email.value == ""){
            throw "Please enter your email";
        }
        if(teleP.value == ""){
            throw "Please enter your telephone number";
        }
        //throw an exception if the inputs of telephone is not a numeric value
        if(isNaN(teleP.value)){        
            throw "Invalid input for telephone number. please enter a numeric value";
        }
        confirm("Do you confirm to submit?");
        alert("Thank you");  
        resetInput(); 
    }
    catch(e){
        alert(e);
    }
}
//function to reset the user's input
function resetInput() {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    teleP.value = "";
    comment.value = "";
    //reset the radio buttons
    for(let i=0;i<radiobtn_info.length;i++){
        radiobtn_info[i].checked = false;
    }
    for(let i=0;i<radiobtn_food.length;i++){
        radiobtn_food[i].checked = false;
    }   
}
//call the CheckForInvalidInput and resetinput function
btnSubmit.onclick = function(){CheckForInvalidInput();}
btnreset.onclick = function(){resetInput();}