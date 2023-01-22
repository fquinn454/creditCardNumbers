# creditCardNumbers
<!DOCTYPE HTML>
<h2>Instructions</h2>
Run through terminal with command node main.js

<h3>Features</h3>
<p>Implementation of the Luhn algorithm

<ul>
    <li>
        <h6>generateLuhnNumber</h6>
        <p> Starting with the digit (the check digit) 
in the far right of the credit card number array parameter
Iterate to the left, every other digit is doubled (the check digit is not doubled).
If the number is greater than 9 after doubling, subtract 9 from its value.
Store this as a newArr</p> 
    </li>
    <li>
        <h6>totalOfArray</h6>
        <p>Sums the digits in a given number array</p> 
    </li>
    <li>
        <h6>checkRemainder</h6>
        <p>Checks if total modulo 10 equals zero (valid card)</p> 
    </li>
</ul>
