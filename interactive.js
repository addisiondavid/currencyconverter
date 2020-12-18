'use strict';

let inputbar1 = document.querySelector(".currency");
let inputbar2 = document.querySelector("#currency1");
let slidedowncontent = document.querySelector("#dropdown");
let slidedowncontent2 = document.querySelector(".dropdown2");
let dateselector = document.querySelector(".input-group-text");
let date = document.querySelector(".form-control");
let amount1;
let amount2;


slidedowncontent2.addEventListener('change',Calculate);
slidedowncontent.addEventListener('change',Calculate);
inputbar1.addEventListener('input',Calculate);
inputbar2.addEventListener('input',Calculate);
dateselector.addEventListener('click',Calculate);
date.addEventListener('input',Calculate);


function Calculate(e){

    let currency1 = slidedowncontent.value;
    let currency2 = slidedowncontent2.value;
    if (!inputbar1.value){
        inputbar1.value = 0;
        amount1 = parseInt(inputbar1.value);
    }else{
        amount1 = parseInt(inputbar1.value); 
    }

    if (!inputbar2.value){
        inputbar2.value = 0;
        amount2 = parseInt(inputbar2.value);
    }else{
        amount2 = parseInt(inputbar2.value); 
    
    }   

    //fetch exchange rate from api 
    fetch(`https://api.exchangeratesapi.io/${date.value}?base=${currency1}`)
        .then(res => res.json())
		.then(res => {
        const rate = res.rates[`${currency2}`];
     
        inputbar2.value = (amount1 * rate).toFixed(4);

    });
    
};  

    function setDatepicker(_this) { 
    
        /* Get the parent class name so we  
            can show date picker */ 
        let className = $(_this).parent() 
            .parent().parent().attr('class'); 

        // Remove space and add '.' 
        let removeSpace = className.replace(' ', '.'); 

        // jQuery class selector 
        $("." + removeSpace).datepicker({ 
            format: "yyyy-mm-dd", 

            // Positioning where the calendar is placed 
            orientation: "bottom auto", 
            // Calendar closes when cursor is  
            // clicked outside the calendar 
            autoclose: true, 
            showOnFocus: "false" 
        }); 
    } 
  




