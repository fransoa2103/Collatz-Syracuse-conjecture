"use strict";

let myForm      = document.getElementById("myForm");
let rangeInput  = document.getElementById('rangeInput');
let rangeSelect = document.getElementById('rangeSelect');

rangeSelect.textContent = rangeInput.value;
rangeInput.oninput = function ()
{
rangeSelect.textContent = rangeInput.value;
}

myForm.addEventListener('submit', () => {

    let index       = 0;
    let testNumber  = 0;


    let body = document.querySelector('body');
    let result      = document.createElement("div");
    result.setAttribute('id', 'result'); 
    body.appendChild(result);

    // Call function and display calculs
    // object.addEventListener("submit", collatzSyracuse(rangeInput.value));

        // display text for start function
        let p = document.createElement("p");
        p.innerHTML="Call function with " + rangeInput.value;
        result.appendChild(p);
        collatzSyracuse(rangeInput.value);
        
        //
        // FOOTER
        //
        // display result and some explanations when calcul is over
        let p2 = document.createElement("p");
        p2.innerHTML="When result is 1, this the end of the Collatz/Syracuse Conjecture, because:</br>"
        +"One is odd so, ( 1 * 3 ) + 1 = 4</br>"
        +"Four is even so, 4 / 2 = 2</br>"
        +"Two is even so, 2 / 1 = 1</br>"
        +" to infinity !";
        result.appendChild(p2);
        
        // Function callback syracuseConjecture(integer)
    // if number is odd and different to one then
    // 
    // 
    function collatzSyracuse(testNumber)
    {
        index++;
        console.log(testNumber);
        if (testNumber % 2 == 0 && testNumber !== 1)
        {
            let p = document.createElement("p");
            p.innerHTML = index + "... " + testNumber + " / 2 = " + testNumber / 2;
            result.appendChild(p);
            collatzSyracuse(testNumber / 2);
        }
        else if (testNumber % 2 == 1 && testNumber !== 1)
        {
            let p = document.createElement("p");
            p.innerHTML= index + "... " + "( " + testNumber + " * 3 ) + 1 = " + ((testNumber * 3) + 1);
            result.appendChild(p);
            collatzSyracuse((3 * testNumber) + 1);
        }
        else if (testNumber == 1) 
        {
            console.log('fin de boucle');
            return;
        }
    }
});