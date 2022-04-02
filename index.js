"use strict";

let body         = document.querySelector('body');
let btnClear     = document.getElementById('btnClear');
let btnSubmit    = document.getElementById('btnSubmit');
let displayRange = document.getElementById('displayRange');
let rangeInput   = document.getElementById('rangeInput');
let index = 0; //  count steps for calcul

//
// DISPLAY RANGE SELECTOR when user move selector
//
displayRange.textContent = rangeInput.value;
rangeInput.oninput = function ()
{
    displayRange.textContent = rangeInput.value;
};

//
// btnClear ONCLICK
//
btnClear.addEventListener('click', (e)=> {
    result.remove();
    btnClear.disabled = true; // disable btnClear when user clear the result on screen
    btnSubmit.disabled = false; // and able btnSubmit for a new calcul
});

//
// btnSubmit ONCLICK
//
btnSubmit.addEventListener('click', ()=> {

    // insert a div for the result
    let result = document.createElement("div");
    result.setAttribute('id', 'result'); 
    body.appendChild(result);
    
    btnSubmit.disabled = true; // disable btnSubmit when user start the calcul
    btnClear.disabled = false; // and able btnClear 

    // display a title with the number rangeInput selection 
    let pTitle = document.createElement("p");
    pTitle.innerHTML="<h3>Result step by step with number " + rangeInput.value + "</h3>";
    result.appendChild(pTitle);

    // Calling the function
    collatzSyracuse(rangeInput.value, 0);
    
    //
    // FOOTER EXPLAIN RESULT
    // display result and some explanations when calcul is over
    //
    let pSuccess = document.createElement("p");
    pSuccess.innerHTML="<div class='bg-success fs-4 p-2 rounded'>When result is 1, this the end of the Collatz/Syracuse Conjecture, because:</br>"
    +"One is odd so, ( 1 * 3 ) + 1 = 4</br>"
    +"Four is even so, 4 / 2 = 2</br>"
    +"Two is even so, 2 / 1 = 1</br>"
    +" and this to infinity !</div>";
    result.appendChild(pSuccess);
    
    /*  START FUNCTION
    -----------------------------------------------------------------
    function method callback collatzSyracuse(testNumber as integer) =>
    while testNumber <> 1 then
    if number is odd then testNumber / 2 and callback the function
        else testNumber = testNumber * 3 + 1 and callback the function
    endWhile */ 

    function collatzSyracuse(testNumber, index)
    {
        index++; // count and displayed the number of the operation 
        let pResult = document.createElement("p");
        
        if (testNumber % 2 == 0 && testNumber !== 1)
        {
            pResult.innerHTML = "<b class='text-muted'>" + index + "# " + "</b>" + testNumber + " / 2 = " + testNumber / 2;
            result.appendChild(pResult);
            collatzSyracuse(testNumber / 2, index);
        }
        else if (testNumber % 2 == 1 && testNumber !== 1)
        {
            pResult.innerHTML= "<b class='text-muted'>" + index + "# " + "</b>" + "( " + testNumber + " * 3 ) + 1 = " + ((testNumber * 3) + 1);
            result.appendChild(pResult);
            collatzSyracuse((3 * testNumber) + 1, index);
        }
        else if (testNumber == 1)
        {
            return;
        }
    };
    /*
    END FUNCTION
    */
   
});