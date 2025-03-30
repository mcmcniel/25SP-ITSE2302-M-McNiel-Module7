// ITEMS USED
// 1. LET
// 2. VARIABLES
// 3. EVENT LISTENERS
// 4. ARRAYS
// 5. IF ELSE
// 6. CONSTANT
// 7. BOOLEAN
// 8. ARITHMETIC OPERATORS
// 9. STRING METHODS

// SHIRT LOGO BUTTONS ===================================================================
// Getting the buttons for the shirt logos
let btnNone = document.getElementsByClassName("btnNone"); // LET
let btnDog = document.getElementsByClassName("btnDog"); // LET
let btnBuffalo = document.getElementsByClassName("btnBuffalo"); // LET
let btnSplat = document.getElementsByClassName("btnSplat"); // LET
let btnButterfly = document.getElementsByClassName("btnButterfly"); // LET
let btnEagle = document.getElementsByClassName("btnEagle"); // LET

// Getting the image that will hold the shirt logo itself
var shirtLogo = document.getElementsByClassName("shirtLogo"); // VARIABLES

// When NONE button is clicked...
btnNone[0].addEventListener("click", function (event) { // EVENT LISTENERS
    // Hiding the logo image and setting the image to respective .png file
    shirtLogo[0].style.visibility = "hidden"; // ARRAYS
    shirtLogo[0].setAttribute("src", "Images/none.png"); // ARRAYS
});
// When DOG button is clicked...
btnDog[0].addEventListener("click", function (event) { // EVENT LISTENERS
    // Showing the logo image and setting the image to respective .png file
    shirtLogo[0].style.visibility = "visible"; // ARRAYS
    shirtLogo[0].setAttribute("src", "Images/dog.png"); // ARRAYS
});
// When BUFFALO button is clicked...
btnBuffalo[0].addEventListener("click", function (event) { // EVENT LISTENERS
    // Showing the logo image and setting the image to respective .png file
    shirtLogo[0].style.visibility = "visible"; // ARRAYS
    shirtLogo[0].setAttribute("src", "Images/buffalo.png"); // ARRAYS
});
// When SPLAT button is clicked...
btnSplat[0].addEventListener("click", function (event) { // EVENT LISTENERS
    // Showing the logo image and setting the image to respective .png file
    shirtLogo[0].style.visibility = "visible"; // ARRAYS
    shirtLogo[0].setAttribute("src", "Images/splat.png"); // ARRAYS
});
// When BUTTERFLY button is clicked...
btnButterfly[0].addEventListener("click", function (event) { // EVENT LISTENERS
    // Showing the logo image and setting the image to respective .png file
    shirtLogo[0].style.visibility = "visible"; // ARRAYS
    shirtLogo[0].setAttribute("src", "Images/butterfly.png"); // ARRAYS
});
// When EAGLE button is clicked...
btnEagle[0].addEventListener("click", function (event) { // EVENT LISTENERS
    // Showing the logo image and setting the image to respective .png file
    shirtLogo[0].style.visibility = "visible"; // ARRAYS
    shirtLogo[0].setAttribute("src", "Images/eagle.png"); // ARRAYS
});

// SHIRT SIZES AND QUANTITIES ===========================================================
// Getting the checkboxes of the shirt sizes
var largeCheckbox = document.getElementById("shirtLarge"); // VARIABLES
var mediumCheckbox = document.getElementById("shirtMedium"); // VARIABLES
var smallCheckbox = document.getElementById("shirtSmall"); // VARIABLES

// Variables to store the result of whether or not the checkbox is checked
var largeIsChecked = false; // VARIABLES
var mediumIsChecked = false; // VARIABLES
var smallIsChecked = false; // VARIABLES

// When the large checkbox is checked or unchecked...
largeCheckbox.addEventListener("change", function() { // EVENT LISTENERS
    // If checkbox is checked...
    if (this.checked) { // IF ELSE STATEMENTS
        // Enabling the large shirt number input field and setting isChecked to true
        document.getElementById("largeShirtCount").disabled = false;
        largeIsChecked = true;
    }
    // If checkbox is not checked...
    else {
        // Disabling the large shirt number input field and setting isChecked to false
        document.getElementById("largeShirtCount").disabled = true;
        largeIsChecked = false;
    }
});
// When the Medium checkbox is checked or unchecked...
mediumCheckbox.addEventListener("change", function() { // EVENT LISTENERS
    // If checkbox is checked...
    if (this.checked) { // IF ELSE STATEMENTS
        // Enabling the medium shirt number input field and setting isChecked to true
        document.getElementById("mediumShirtCount").disabled = false;
        mediumIsChecked = true;
    }
    // If checkbox is not checked...
    else {
        // Disabling the medium shirt number input field and setting isChecked to false
        document.getElementById("mediumShirtCount").disabled = true;
        mediumIsChecked = false;
    }
});
// When the Small checkbox is checked or unchecked...
smallCheckbox.addEventListener("change", function() { // EVENT LISTENERS
    // If checkbox is checked...
    if (this.checked) { // IF ELSE STATEMENTS
        // Enabling the small shirt number input field and setting isChecked to true
        document.getElementById("smallShirtCount").disabled = false;
        smallIsChecked = true;
    }
    // If checkbox is not checked...
    else {
        // Disabling the small shirt number input field and setting isChecked to false
        document.getElementById("smallShirtCount").disabled = true;
        smallIsChecked = false;
    }
});

// SHIRT COLOR PICKER ===================================================================
// Getting the color picker input field and the shirt color overlay element
var shirtColorPicker = document.getElementById("shirtColor"); // VARIABLES
var shirtColor = document.getElementsByClassName("shirtColorOverlay")[0]; // VARIABLES & ARRAY

// When the color picker input is changed...
shirtColorPicker.addEventListener("input", function(event) { // EVENT LISTENERS
    // Setting the color overlay to the same color as the color picker, which colors the shirt
    shirtColor.style.backgroundColor = shirtColorPicker.value;
});

// FORM VALIDATION ======================================================================
// Adding an event listener to the submit button that calls the checkOrderInformation function
document.getElementsByClassName("designPanelContainer")[0].addEventListener("submit", checkOrderInformation); // EVENT LISTENERs & ARRAY

// Variables to hold the count of the shirts
var largeShirtCount = 0; // VARIABLES
var mediumShirtCount = 0; // VARIABLES
var smallShirtCount = 0; // VARIABLES

// Variables to hold the total cost of the shirts
var largeTotalCost = 0.00; // VARIABLES
var mediumTotalCost = 0.00; // VARIABLES
var smallTotalCost = 0.00; // VARIABLES

// Constant to hold the tax rate
const TAX = 0.0825; // CONSTANT

// Variables to hold the totals
var subtotal = 0.00; // VARIABLES
var taxAmt = 0.00; // VARIABLES
var total = 0.00; // VARIABLES

// Function to check the order information called by the submit button
function checkOrderInformation(event) {
    // Preventing the screen from refreshing
    event.preventDefault();

    // Validating the names and email address and storing the result in these boolean variables
    var namesValid = validateNames(); // BOOLEAN
    var emailValid = validateEmail(); // BOOLEAN

    // If both names and email are valid...
    if (namesValid && emailValid)
    {
        // If a shirt size is checked...
        if (largeIsChecked || mediumIsChecked || smallIsChecked) { // IF ELSE STATEMENTS
            // Validate the rest of the shirt info
            validateShirtInfo();
        }
        // If a shirt size wasn't selected...
        else {
            // Show error message and focus on elements
            alert("Please select a shirt size or shirt sizes for your order.");
            largeCheckbox.focus();
            mediumCheckbox.focus();
            smallCheckbox.focus();
        }
    }
}

// Function to validate the first and last names
function validateNames() {
    
    // Boolean variables to store if first and last name is valid
    var firstNameValid = false; // BOOLEAN
    var lastNameValid = false; // BOOLEAN

    // Getting the first and last names
    var firstNameBox = document.getElementById("firstName");
    var lastNameBox = document.getElementById("lastName");

    // If first name is empty...
    if (firstNameBox.value === "") { // IF ELSE STATEMENTS
        // Show error message, first name is not valid
        alert("Please enter your first name.");
        firstNameBox.focus();
        firstNameValid = false;
    }
    // If first name is not empty...
    else {
        // First name is valid
        firstNameValid = true;
    }

    // If last name is empty...
    if (lastNameBox.value === "") { // IF ELSE STATEMENTS
        // Show error message, last name is not valid
        alert("Please enter your last name.");
        lastNameBox.focus();
        lastNameValid = false;
    }
    // If last name is not empty...
    else {
        // Last name is valid
        lastNameValid = true;
    }

    // If first and last names are valid...
    if (firstNameValid && lastNameValid) { // IF ELSE STATEMENTS
        // Return true
        return true;
    }
    // If first or last name is invalid...
    else {
        // Return false
        return false;
    }
}

// Function to validate the email address
function validateEmail() {
    // Getting email textbox
    var emailBox = document.getElementById("emailAddress");

    // If email is empty...
    if (emailBox.value === "") {
        // Show error message, email is not valid
        alert("Please enter your email address.");
        emailBox.focus();
        return false;
    }

    // Email is valid if we make it down here, so return true
    return true;
}

// Function to validate the shirt info like count and fabric type
function validateShirtInfo() {
    // Getting the shirt fabric radio button that is selected
    var radioButtonsSelected = document.querySelector("input[name=shirtType]:checked");

    // If a radio button isn't selected...
    if (radioButtonsSelected === null) { // IF ELSE STATEMENTS
        // Show error message
        alert("Please select a shirt type.");
    }
    // If a radio button is selected...
    else {
        // Checking is large shirt info is valid and storing in boolean variable
        var largeValid = validateLargeShirtInfo(); // BOOLEAN
        
        // If large shirt info is valid...
        if (largeValid) {
            // Check medium shirt info
            var mediumValid = validateMediumShirtInfo(); // BOOLEAN

            // If medium shirt info is valid
            if (mediumValid) {
                // Check small shirt info
                var smallValid = validateSmallShirtInfo(); // BOOLEAN

                // If small shirt info is valid
                if (smallValid)
                {
                    // Calculate the totals and finish the order using the total variable as an argument
                    total = calculateTotal();
                    completeOrder(total);
                }
            }
        }
    }
}
// Function to validate large shirt info
function validateLargeShirtInfo() {
    // If the large checkbox is checked...
    if (largeIsChecked) {
        // Getting the large shirt count
        var largeShirtAmt = document.getElementById("largeShirtCount");

        // If an invalid shirt count is given...
        if (largeShirtAmt.value === null || largeShirtAmt.value < 1) { // IF ELSE STATEMENTS
            // Show error message and return false
            alert("Please enter a value greater than 0 for LARGE SHIRTS.");
            largeShirtAmt.focus();
            return false;
        }
        // If a valid shirt count is given...
        else {
            // Get the shirt fabric selected so we can get the price
            var radioButtonsSelected = document.querySelector("input[name=shirtType]:checked");
            var largeShirtValue = document.getElementById("shirtLarge");

            // Calculate the total cost of the large shirts
            largeTotalCost = (largeShirtAmt.value * largeShirtValue.value) + (largeShirtAmt.value * radioButtonsSelected.value); // ARITHMETIC OPERATORS
            // Store the large shirt count in the global variable for later
            largeShirtCount = largeShirtAmt.value;
            return true;
        }
    }
    // If the large checkbox is not checked...
    else {
        // Keep the large cost at 0.00 and return true
        largeTotalCost = 0.00;
        return true;
    }
}
// Function to validate medium shirt info
function validateMediumShirtInfo() {
    // If the medium checkbox is checked...
    if (mediumIsChecked) {
        // Getting the medium shirt count
        var mediumShirtAmt = document.getElementById("mediumShirtCount");

        // If an invalid shirt count is given...
        if (mediumShirtAmt.value === null || mediumShirtAmt.value < 1) { // IF ELSE STATEMENTS
            // Show error message and return false
            alert("Please enter a value greater than 0 for MEDIUM SHIRTS.");
            mediumShirtAmt.focus();
            return false;
        }
        // If a valid shirt count is given...
        else {
            // Get the shirt fabric selected so we can get the price
            var radioButtonsSelected = document.querySelector("input[name=shirtType]:checked");
            var mediumShirtValue = document.getElementById("shirtMedium");

            // Calculate the total cost of the medium shirts
            mediumTotalCost = (mediumShirtAmt.value * mediumShirtValue.value) + (mediumShirtAmt.value * radioButtonsSelected.value); // ARITHMETIC OPERATORS
            // Store the medium shirt count in the global variable for later
            mediumShirtCount = mediumShirtAmt.value;
            return true;
        }
    }
    // If the medium checkbox is not checked...
    else {
        // Keep the medium cost at 0.00 and return true
        mediumTotalCost = 0.00;
        return true;
    }
}
// Function to validate small shirt info
function validateSmallShirtInfo() {
    // If the small checkbox is checked...
    if (smallIsChecked) {
        // Getting the small shirt count
        var smallShirtAmt = document.getElementById("smallShirtCount");

        // If an invalid shirt count is given...
        if (smallShirtAmt.value === null || smallShirtAmt.value < 1) { // IF ELSE STATEMENTS
            // Show error message and return false
            alert("Please enter a value greater than 0 for SMALL SHIRTS.");
            smallShirtAmt.focus();
            return false;
        }
        // If a valid shirt count is given...
        else {
            // Get the shirt fabric selected so we can get the price
            var radioButtonsSelected = document.querySelector("input[name=shirtType]:checked");
            var smallShirtValue = document.getElementById("shirtSmall");

            // Calculate the total cost of the small shirts
            smallTotalCost = (smallShirtAmt.value * smallShirtValue.value) + (smallShirtAmt.value * radioButtonsSelected.value); // ARITHMETIC OPERATORS
            // Store the small shirt count in the global variable for later
            smallShirtCount = smallShirtAmt.value;
            return true;
        }
    }
    // If the small checkbox is not checked...
    else {
        // Keep the small cost at 0.00 and return true
        smallTotalCost = 0.00;
        return true;
    }
}
// Function to calculate the totals
function calculateTotal() {
    // Calculating the subtotal
    subtotal = largeTotalCost + mediumTotalCost + smallTotalCost; // ARITHMETIC OPERATORS

    // Calculating the tax amount
    taxAmt = subtotal * TAX; // ARITHMETIC OPERATORS

    // Finally returning the grand total
    return subtotal + taxAmt; // ARITHMETIC OPERATORS
}
// Function to complete the order and show the order confirmation screen
function completeOrder(total) {
    // Hiding the shirt logo if one is selected
    shirtLogo[0].style.visibility = "hidden"; // ARRAY
    // Hiding everything in the main shirt designer section of the HTML
    document.getElementsByClassName("mainShirtDesigner")[0].style.visibility = "hidden"; // ARRAY
    // Showing everything in the order confirmation section of the HTML
    document.getElementsByClassName("orderConfirmation")[0].style.visibility = "visible"; // ARRAY

    // Setting the customer name
    document.getElementById("customerName").textContent = "CUSTOMER NAME: " 
        + document.getElementById("firstName").value 
        + " "
        + document.getElementById("lastName").value;

    // Setting the large shirt amount
    document.getElementById("largeShirtAmt").textContent = "LARGE SHIRT AMT: "
        + largeShirtCount
        + " - "
        + "$" + (largeShirtCount * 10);
    // Setting the medium shirt amount
    document.getElementById("mediumShirtAmt").textContent = "MEDIUM SHIRT AMT: "
        + mediumShirtCount
        + " - "
        + "$" + (mediumShirtCount * 8);
    // Setting the small shirt amount
    document.getElementById("smallShirtAmt").textContent = "SMALL SHIRT AMT: "
        + smallShirtCount
        + " - "
        + "$" + (smallShirtCount * 6);

    // Getting the selected radio button
    var selectedRadioButton = document.querySelector("input[name=shirtType]:checked");
    // Variable to store what shirt type we have
    var shirtType = "N/A";

    // If the radio button value is 5.000
    if (selectedRadioButton.value === 5.00) { // IF ELSE STATEMENTS
        // Shirt type is cotton
        shirtType = "Cotton";
    }
    else {
        // Any other value will be polyester
        shirtType = "Polyester";
    }

    // Getting the total number of shirts needed
    var shirtCountTotal = (parseFloat(largeShirtCount) + parseFloat(mediumShirtCount) + parseFloat(smallShirtCount)); // ARITHMETIC OPERATORS
    // Calculating the price for the shirt fabric
    var shirtTypePrice = parseFloat(selectedRadioButton.value) * shirtCountTotal; // ARITHMETIC OPERATORS

    // This is used to properly format the prices below
    let usDollar = new Intl.NumberFormat('en-US', { // LET
        style: 'currency',
        currency: 'USD',
    });

    // Setting the cost of the shirt type
    document.getElementById("shirtTypeAmt").textContent = "SHIRT FABRIC: "
        + shirtType
        + " - "
        + "$" + shirtTypePrice;
    // Setting the subtotal
    document.getElementById("subtotal").textContent = "SUBTOTAL: "
        + usDollar.format(subtotal);
    // Setting the tax amount
    document.getElementById("tax").textContent = "TAX: "
        + usDollar.format(taxAmt);
    // Setting the grand total
    document.getElementById("total").textContent = "TOTAL: "
        + usDollar.format(total);
    // Setting the customer email
    document.getElementById("customerEmail").textContent = "CUSTOMER EMAIL: "
        + document.getElementById("emailAddress").value;

    // Getting the src file of the selected image
    var selectedImage = document.getElementsByClassName("shirtLogo")[0].src; // ARRAY
    // Removing the majority of the image file path which leaves just the image name
    var startIndex = selectedImage.lastIndexOf("/"); // STRING METHODS
    // This will show up as 'image.png' or similar
    var imageWithoutBeginning = selectedImage.substring(startIndex + 1); // STRING METHODS

    // Setting the shirt logo
    document.getElementById("shirtlogo").textContent = "SHIRT LOGO: "
        + imageWithoutBeginning;
    // Setting the shirt color
    document.getElementById("shirtColorText").textContent = "SHIRT COLOR: "
        + document.getElementById("shirtColor").value;
}

// ORDER CONFIRMATION ===================================================================
// Getting the button to return to the main designer page
var btnReturnToDesigner = document.getElementsByClassName("btnReturn")[0]; // ARRAY

// When the return button is clicked...
btnReturnToDesigner.addEventListener("click", function (event) { // EVENT LISTENERS
    // Go back to index.html
    window.location.replace("index.html");
});