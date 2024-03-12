/*
*  Name:        Colin Bond
*  Date:        2024-03-12
*  File:        app.js
*
*  Description: A DOM Manipulation file included in all of Lab 1's HTML files in order to provide them each with common nav bars and other content.
*/


// Inject body copy text into HTML file

document.write('<nav class="navbar navbar-expand-lg navbar-dark bg-dark">');
document.write('<div class="container">');
document.write('<a class="navbar-brand" href="index.html">Colin Labs</a>');
document.write('<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">');
document.write('<span class="navbar-toggler-icon"></span>');
document.write('</button>');
document.write('<div class="collapse navbar-collapse" id="navbarSupportedContent">');
document.write('<ul class="navbar-nav me-auto mb-2 mb-lg-0">');
document.write('<li id="nav-li-index" class="nav-item">');
document.write('<a id="nav-a-index" class="nav-link" href="index.html">Home</a>');
document.write('</li>');
document.write('<li id="nav-li-products" class="nav-item">');
document.write('<a id="nav-a-products" class="nav-link" href="products.html">Products</a>');
document.write('</li>');
document.write('<li id="nav-li-services" class="nav-item">');
document.write('<a id="nav-a-services" class="nav-link" href="services.html">Services</a>');
document.write('</li>');
document.write('<li id="nav-li-blog" class="nav-item">');
document.write('<a id="nav-a-blog" class="nav-link" href="blog.html">Blog</a>');
document.write('<li id="nav-li-about" class="nav-item">');
document.write('<a id="nav-a-about" class="nav-link" href="about.html">About Us</a>');
document.write('</li>');
document.write('<li id="nav-li-contact" class="nav-item">');
document.write('<a id="nav-a-contact" class="nav-link" href="contact.html">Contact Us</a>');
document.write('</li>');
document.write('<li id="nav-li-login" class="nav-item">');
document.write('<a id="nav-a-login" class="nav-link" href="login.html">Login</a>');
document.write('</li>');
document.write('<li id="nav-li-register" class="nav-item">');
document.write('<a id="nav-a-register" class="nav-link" href="register.html">Register</a>');
document.write('</ul>');
document.write('<form class="d-flex" role="search">');
document.write('<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">');
document.write('<button class="btn btn-outline-success" type="submit">Search</button>');
document.write('</form>');
document.write('</div>');
document.write('</div>');
document.write('</nav>');


// Lab 1 Step 3b.) Change Products navbar link to Interests

document.getElementById("nav-a-products").innerHTML = "Interests";


// Lab 1 Step 3c.) Add Human Resources link between About Us and Contact Us

// Create the list item element for "Human Resources"
var newNavItem = document.createElement('li');
newNavItem.setAttribute('class', 'nav-item');

// Create the anchor element for the link
var newNavLink = document.createElement('a');
newNavLink.setAttribute('id', 'nav-a-hresources');
newNavLink.setAttribute('class', 'nav-link');
newNavLink.setAttribute('href', '#'); // Set the appropriate href attribute

// Create appropriate Font Awesome icon
var icon = document.createElement('i');
icon.setAttribute('class', 'fa-solid fa-users'); // Assuming you have Font Awesome linked in your HTML

// Text for the link
var textNode = document.createTextNode('Human Resources');

// Append the icon and text to the anchor element
newNavLink.appendChild(icon);
// newNavLink.appendChild(icon);
newNavLink.appendChild(textNode);

// Append the anchor element to the list item
newNavItem.appendChild(newNavLink);

// Find the "About Us" list item
var aboutUsNavItem = document.getElementById('nav-li-about');

// Insert the new list item before the "Contact Us" list item
aboutUsNavItem.parentNode.insertBefore(newNavItem, aboutUsNavItem.nextSibling);


// Lab 1 Step 3d.) Add another, fixed bottom Navbar

// Create the navbar element
var bottomNavbar = document.createElement('nav');
bottomNavbar.setAttribute('class', 'navbar navbar-dark bg-dark fixed-bottom');

// Create the container for navbar contents
var container = document.createElement('div');
container.setAttribute('class', 'container-fluid');

// Create the copyright statement
var copyright = document.createElement('span');
copyright.setAttribute('class', 'navbar-text');
var currentYear = new Date().getFullYear();
var copyrightText = document.createTextNode('Copyright ' + currentYear + ', Colin Bond');

// Append the copyright text to the copyright statement
copyright.appendChild(copyrightText);

// Append the copyright statement to the container
container.appendChild(copyright);

// Append the container to the navbar
bottomNavbar.appendChild(container);

// Insert the navbar into the document body
document.body.appendChild(bottomNavbar);