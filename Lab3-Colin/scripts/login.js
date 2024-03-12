/*
*  Name:        Colin Bond
*  Date:        2024-02-24
*  File:        login.js
*
*  Description: A DOM Manipulation file included in Lab 2's login.html to provide its content using JavaScript.
*/


// Inject body copy text into HTML file
document.write('<div class="container my-5">');
document.write('<h1>Login</h1>');
document.write('<div class="col-lg-8 px-0">');
document.write('<hr class="col-1 my-4">');
document.write('<form class="form-signin">');
document.write('<input type="text" id="inputUsername" class="form-control" placeholder="Enter your username" required autofocus>');
document.write('<input type="password" id="inputPassword" class="form-control" placeholder="Enter your password" required>');
document.write('<button class="btn btn-lg btn-primary btn-block" type="submit" id="btnLogSubmit">Login</button>');
document.write('</form>');
document.write('<p class="text-center">Don\'t have an account? <a href="register.html">Register here!</a></p>');

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    var username = document.getElementById('inputUsername').value;
    
    // Create the list item element for "Human Resources"
    var newNavItem = document.createElement('li');
    newNavItem.setAttribute('class', 'nav-item');

    // Create the anchor element for the link
    var newNavLink = document.createElement('a');
    newNavLink.setAttribute('id', 'nav-a-hresources');
    newNavLink.setAttribute('class', 'nav-link');
    newNavLink.setAttribute('href', '#'); // Set the appropriate href attribute

    // Text for the link
    var textNode = document.createTextNode(username);

    // Append the icon and text to the anchor element
    newNavLink.appendChild(textNode);

    // Append the anchor element to the list item
    newNavItem.appendChild(newNavLink);

    // Find the "About Us" list item
    var contactUsNavItem = document.getElementById('nav-li-contact');

    // Insert the new list item before the "Login" list item
    contactUsNavItem.parentNode.insertBefore(newNavItem, contactUsNavItem.nextSibling);
}

// Add event listener to the form submit button
document.getElementById('btnLogSubmit').addEventListener('click', handleSubmit);