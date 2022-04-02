"use strict";

let myForm      = document.getElementById("myForm");
let rangeInput  = document.getElementById('rangeInput');
let rangeSelect = document.getElementById('rangeSelect');
let index = 0;

// display range value when user move selector
rangeSelect.textContent = rangeInput.value;
rangeInput.oninput = function ()
{
    rangeSelect.textContent = rangeInput.value;
};

//
// FUNCTION CALLBACK collatzSyracuse(testNumber as integer)
// while testNumber <> 1
// if number is odd then testNumber / 2
// else testNumber = testNumber * 3 + 1
// 
    
function collatzSyracuse(testNumber)
{
    index++; // displayed the number the operation 
    let p = document.createElement("p");

    if (testNumber % 2 == 0 && testNumber !== 1)
    {
        p.innerHTML = "<b class='text-muted'>" + index + "# " + "</b>" + testNumber + " / 2 = " + testNumber / 2;
        result.appendChild(p);
        collatzSyracuse(testNumber / 2);
    }
    else if (testNumber % 2 == 1 && testNumber !== 1)
    {
        p.innerHTML= "<b class='text-muted'>" + index + "# " + "</b>" + "( " + testNumber + " * 3 ) + 1 = " + ((testNumber * 3) + 1);
        result.appendChild(p);
        collatzSyracuse((3 * testNumber) + 1);
    }
    return(testNumber);
}

//
// on form submit calling function collatzSyracuse
//

myForm.addEventListener('submit', () =>
{
    let body        = document.querySelector('body');
    let btn         = document.getElementById('btn');
    let result      = document.createElement("div");

    // insert a div for the result
    result.setAttribute('id', 'result'); 
    body.appendChild(result);

    // when btn clear is clicked
    btn.addEventListener('click', (e)=> {
        result.remove();
    });

    // set and displayed the range value
    let p = document.createElement("p");
    let testNumber  = rangeInput.value;
    p.innerHTML="<h3>Result step by step with number " + testNumber + "</h3>";
    result.appendChild(p);
    
    // Calling the function to display results
    collatzSyracuse(testNumber);
    
    //
    // FOOTER EXPLAIN RESULT
    // display result and some explanations when calcul is over
    //

    let p2 = document.createElement("p");
    p2.innerHTML="When result is 1, this the end of the Collatz/Syracuse Conjecture, because:</br>"
    +"One is odd so, ( 1 * 3 ) + 1 = 4</br>"
    +"Four is even so, 4 / 2 = 2</br>"
    +"Two is even so, 2 / 1 = 1</br>"
    +" to infinity !";
    result.appendChild(p2);

});