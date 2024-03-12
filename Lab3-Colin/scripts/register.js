/*
*  Name:        Colin Bond
*  Date:        2024-02-24
*  File:        register.js
*
*  Description: A DOM Manipulation file included in Lab 2's register.html to provide its content using JavaScript.
*/

// Insert Error Message Div
let errorMessageDiv = `<div id="errorMessage">
	                <p></p>
                </div>`
document.getElementById("contentDiv").innerHTML += errorMessageDiv;

// Load the user class script with alias
import { User as Login } from "./user.js";

// Import form validation functions with aliases
import { validateFirst as lengthFirst} from "./form.js";
import { validateLast as lengthLast } from "./form.js";
import { validateEmail as lengthEmail } from "./form.js";
import { validatePassword as matchPasswords } from "./form.js";

// Add event listener to the form submit button
document.getElementById('btnRegSubmit').addEventListener('click', handleSubmit);

// Function to handle form submission
function handleSubmit(event) {

    // Prevent the default submit action (stay on the page)
    event.preventDefault();

    // Get the first name input
    let firstName = document.getElementById('inputFirst').value;

    // Get the last name input
    let lastName = document.getElementById('inputLast').value;

    // Get the username input
    let username = document.getElementById('inputUsername').value;

    // Get the email input
    let email = document.getElementById('inputEmail').value;

    // Get the password input
    let password = document.getElementById('inputPassword').value;

    // Get the confirm password input
    let confirmPassword = document.getElementById('inputPassword2').value;    

    // Error message paragraph
    let errorMessage = document.getElementById("errorMessage");
    // Clear paragraph contents each submission
    errorMessage.innerHTML = "<p></p>";

    // Validate first name
    errorMessage.innerHTML += lengthFirst(firstName);      

    // Validate last name
    errorMessage.innerHTML += lengthLast(lastName);

    // Validate email
    errorMessage.innerHTML += lengthEmail(email);

    // Validate confirm password
    errorMessage.innerHTML += matchPasswords(password, confirmPassword);
    
    // Create User class object
    let user = new Login(firstName, lastName, username, email, password);
    
    // Debug statement for object
    console.log(`User Details:\n ${user.displayUser()}`);   
};