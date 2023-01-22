# creditCardNumbers
<!DOCTYPE HTML>
<h2>Instructions</h2>
Run through terminal with command node main.js

<h3>Features</h3>
<p>Implementation of the Luhn algorithm

<ul>
    <li>
        <strong>validateCred</strong>
        <p>Takes a credit card number array and runs generateLuhn Number, totalOfArray and 
        checkRemainder to determine if card is valid</p> 
        <ul>
            <li>
                <strong>generateLuhnNumber</strong>
                <p> Starting with the digit (the check digit) 
        in the far right of the credit card number array parameter
        Iterate to the left, every other digit is doubled (the check digit is not doubled).
        If the number is greater than 9 after doubling, subtract 9 from its value.
        Store this as a newArr</p> 
            </li>
            <li>
                <strong>totalOfArray</strong>
                <p>Sums the digits in a given number array</p> 
            </li>
            <li>
                <strong>checkRemainder</strong>
                <p>Checks if total modulo 10 equals zero (valid card)</p> 
            </li>
        </ul>
    </li>
    <li>
        <strong>findInvalidCards</strong>
        <p>Takes a nested number array input, of credit card numbers. Finds the invalid cards
        and returns a new array of invalid cards</p> 
    </li>
    <li>
        <strong>findInvalidCards</strong>
        <p>Takes a nested number array input, of credit card numbers. Finds the invalid cards
        and returns a new array of invalid cards</p> 
    </li>
    <li>
        <strong>idInvalidCardCompanies</strong>
        <p>Takes a nested number array input, of invalid credit card numbers. Returns an array of
        unique companies sending invalid cards</p> 
    </li>
    <li>
        <strong>Extension: validateCredString</strong>
        <p>Takes a credit card number given in string format as an input and determines if card 
        is valid </p> 
    </li>
     <li>
        <strong>Extension: createValidCard</strong>
        <p>Takes an invalid card number array and returns a valid card number array </p> 
    </li>
</ul>
