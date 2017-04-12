/*
PRACTICE
Write a program (p.26)...

REQUIREMENTS
PROGRAM - calculate total price of phone purchase
- purchase phones until you run out of money in bank account
- plus accessories for each phone as long as your purchase amount is below your mental threshold
-   
- then calculated purchase amount + tax
- print out purchase amount (w/ proper format)


- check amount >= bank account
- can you afford it? 

Further NOTE: 

• set up some constants
“tax rate” 
“phone price” 
“accessory price”  
“spending threshold"

variable 
“bank account balance”

• define functions for calculating the tax 
and for formatting the price with a “$” & rounding to two decimal places.

• Bonus Challenge: Try to incorporate input into this program,
perhaps with the prompt(..) covered in “Input” on page 6. You
may prompt the user for their bank account balance, for example.
Have fun and be creative!
*/

const TAX_RATE = .0825, 
      phonePrice = 299.99, 
      accessoryPrice = 19.99,
      spendingThreshold = 1800.00;

var bankAccountBalance = 1900.78;

//function calculateTax(int);
//function priceFormat();

alert("Welcome to kingzLoCellular!");



var amount;
var totalAmount;


// first function called
function phoneTotalAmount() {
    amount = prompt("How many phones would you like?");
    console.log(amount);

    totalAmount = amount * phonePrice;
    console.log(totalAmount);
        
    // calling second function
    totalLowHigh();
}

// second function called from within first function
function totalLowHigh() {
    if (totalAmount <= spendingThreshold) {
        console.log("Your total for " + amount + " phones = " + totalAmount + ".");
        
        // third function call
        addAccessories();
    } else {
        console.log("Your total for " + amount + " phones = " + totalAmount + " is too high.  Please try again.");
        
        // fourth function calls on else condition only
        tryAgain();
    }      
}

//function priceFormat();





// third function called
// third function called
// third function called
function addAccessories() {
    console.log("Note: I will add accessories for your phone(s).");
    var finalCost = totalAmount + (accessoryPrice * amount);
    console.log("Final Cost variable " + finalCost);

    
     
     
    function calculateTax() {
        var plusTaxTotal = finalCost + (finalCost * TAX_RATE);
        console.log("Plus Tax variable: " + plusTaxTotal);
        
        function priceFormat() {
            var ptTotalFixed = plusTaxTotal.toFixed(2);
            console.log("Plus Tax w/ fixed decimal: " + ptTotalFixed);
        }
        
        priceFormat();
     }
    
    
    
    
    var totali = calculateTax();
    
    
   // if (priceWithTax <= bankAccountBalance) {
        console.log("Your total amount comes to " + totali);
   /* } else {
        console.log("You went over your Bank Balance.");
                
        // fourth function calls on else condition only
        tryAgain();
    }*/
}

// 4th function called
function tryAgain() {
        var answer = prompt("Would you like to try again (yes/no)? ");

        if (answer === "yes" || answer === "Yes") {
            phoneTotalAmount();
        } else if (answer === "no" || answer === "No") {
            console.log("Thank you for shopping.");
        } else {
            console.log("You entered the wrong answer.  Trying again...")
            tryAgain();
        }
}


// Start of the program by calling this function
phoneTotalAmount();





// OPTIONAL
var answer = prompt("Would you like fries with that?");

if (answer === "yes" || answer === "Yes") {
    alert("Here is some fries and a drink on us (Wendy's complimentary next door).  Thanks for shopping for " + amount + " cellular phones totalling " + totalAmount);
} else if (answer === "no" || answer === "No") {
    console.log("Thanks for shopping for " + amount + " cellular phones totalling " + totalAmount);
} else {
    console.log("There seems to be an error. I'm only requesting a yes/no answer");
}

