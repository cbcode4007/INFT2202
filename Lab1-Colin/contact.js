
// 4. Contact HTML Form with JavaScript event listening and handling

// Inject body copy text into HTML file
document.write('<div class="container my-5">');
document.write('<h1>Contact Us</h1>');
document.write('<div class="col-lg-8 px-0">');
document.write('<hr class="col-1 my-4">');
document.write('<p class="fs-5">');
document.write('<form id="contactForm">');
document.write('<label for="name">Name:</label>');
document.write('<input type="text" id="name" name="name" required><br>');
document.write('<label for="contactNumber">Contact Number:</label>');
document.write('<input type="tel" id="contactNumber" name="contactNumber" required><br>');
document.write('<label for="email">Email Address:</label>');
document.write('<input type="email" id="email" name="email" required><br>');
document.write('<label for="message">Short Message:</label>');
document.write('<textarea id="message" name="message" required></textarea><br>');
document.write('<button type="submit" id="submitBtn">Submit</button>');
document.write('</form>');
document.write('</p>');


// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    var name = document.getElementById('name').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Output user information to the console
    console.log("Name: " + name);
    console.log("Contact Number: " + contactNumber);
    console.log("Email Address: " + email);
    console.log("Short Message: " + message);

    // Start timer to redirect after 3 seconds
    setTimeout(function() {
        window.location.href = "index.html"; // Redirect to home page
    }, 3000);
}

// Add event listener to the form submit button
document.getElementById('submitBtn').addEventListener('click', handleSubmit);
