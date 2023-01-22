// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, 
    invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, 
    mystery3, mystery4, mystery5];



// Add your functions below:

//Implementation of the Luhn algorithm
function validateCred(arr){
    let index = arr.length - 1;
    let newArr = [];
    let total = 0;
    /*
     Starting with the digit (the check digit) 
     in the far right of the credit card number array parameter
     Iterate to the left, every other digit is doubled (the check digit is not doubled).
     If the number is greater than 9 after doubling, subtract 9 from its value.
     Store this as a newArr
    */
    while(index >= 0){
        newArr.unshift(arr[index]);
        if(arr[index-1]){
            let num = arr[index-1] * 2;
                if( num >= 9){
                    newArr.unshift(num-9);
                }
                else{
                    newArr.unshift(num);
                }
            }
        index -= 2;
    }
    // sum the digits in newArr and save in total variable
    for( i = 0; i < newArr.length; i++){
        total += newArr[i];
    }
    
    // check if total % 10 = zero (valid card)
    if( total % 10 === 0){
        return true;
    }
    // else invalid card
    else{
        return false;
    }
};

/*
Take an array of credit card numbers
Check that those card numbers are valid
If invalid, add to an invalid card number array
Return the numbers of invalid cards
*/
function findInvalidCards(batch){
    let i = 0;
    let invalidCards = [];
    for(i=0; i < batch.length; i++){
        if(!validateCred(batch[i])){
            invalidCards.push(batch[i]);
        }
    };
    return invalidCards;
};

/** 
Take an array of invalid card numbers
Check which company sent out the cards
Return an array of unique companies that have sent out invalid cards
*/
function idInvalidCardCompanies(arr){
    let companyArr = [];
    for ( i = 0; i<arr.length; i++){
        if (arr[i][0] === 3){
            companyArr.push('Amex (American Express)');
        }
        else if (arr[i][0] === 4){
            companyArr.push('Visa');
        }
        else if (arr[i][0] === 5){
            companyArr.push('Mastercard');
        }
        else if (arr[i][0] === 6){
            companyArr.push('Discover');
        }
        else{
            console.log('Company not found');
        }
    }
    return companyArr.filter((v, i, a) => a.indexOf(v) === i);
};


// Take a string input and validate card
function validateCredString(str){
    let card = [];
    for(i = 0; i < str.length; i++){
        card.push(parseInt(str[i]));
    }
    return validateCred(card);

}

// Convert invalid card numbers to valid ones


//tests
console.log(validateCred(valid1)); // true
console.log(validateCred(invalid1)); // false
console.log(findInvalidCards(batch).length); // 8
console.log(findInvalidCards(batch)[3]); //  [6, 0, 1, 1, 1, 2,7, 9, 6, 1, 7, 7,7, 9, 3, 5]
console.log(validateCredString('4024007104695753')); // true
console.log(idInvalidCardCompanies(findInvalidCards(batch))); // [ 'Visa', 'Mastercard', 'Amex (American Express)', 'Discover' ]