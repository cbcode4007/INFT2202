console.log('app.js loaded')
// TO DO: load the user class script with alias
import { User as Login } from "./user.js";

/**
 * iffe to insert nav bar at the top of each page
 */
$(function () {
    let navBar = `<div class="navigation">
	                <nav class="nav">
		                <a class="nav-link active" href="index.html">Home</a>
		                <a class="nav-link" href="slideshow.html">Slideshow</a>
		                <a class="nav-link disabled" id="username" href="#"></a>
		                <a class="nav-link" href="form.html">Form</a>
	                </nav>
                </div>`

    //TO DO: replace the nav-holder
    $('#nav-holder').append(navBar);
});

/**
 * function to add styling to all links on the page
 */
$(function () {
    $("a").addClass("fancy-link");
});


/**
 * fuction to demo adding content with .text() and .html()
 *  */
$(function () {

    let navDiv = $("div:first");
    console.log(navDiv.html())
    console.log(navDiv.text())

    let contentDiv = $("#content-div");
    console.log(contentDiv.html())
    console.log(contentDiv.text())

    // text to use with new paragraph
    let text = "It is one of his best works!"
    // create a paragraph
    let newP = $("<p></p>");
    // TO DO: add text with html()
    newP.html(text);

    // append to contentDiv
    $(contentDiv).append(newP);

    // add text
    newP.text("I am <strong>very excited</strong> for the opening of the new adaptation of his work.");
    // TO DO: test when very excited is in a strong tag

    // TO DO: append to newP text
    $(contentDiv).append(newP);
});

/**
 * function to demo adding toggle to button
 *  */
$(function () {
    // TO DO: complete the function (run only if there is a button on the page)
    // get the button
    var button = document.getElementById("button-p-toggle");
    if (button != null) {
        // add a click function
        button.addEventListener('click', function() {;
            // get the parent div's p tags
            let ptags = $(button).parent('div').children('p');

            // for each p in the div
            ptags.each(function(index, p) {
                // get the class of the current p tag
                let currentClass = $(p).attr('class');            
                // if it has toggleHide class
                if (currentClass === 'toggleHide') {
                    //remove toggleHide class and add toggleShow class
                    // styling is controlled in the css
                    $(p).attr('class', 'toggleShow');
                }
                // otherwise assume it has the toggleShow class
                else {
                    //remove toggleShow and add toggleHide                
                    $(p).attr('class', 'toggleHide');
                }
            });
        });
    }    
});



// FORM JQUERY
// TO DO: import form validation functions with alias
import { validateFirst as lengthFirst} from "./form.js";
import { validateLast as lengthLast } from "./form.js";
import { validateUsername as lengthUsername } from "./form.js";
import { validateEmail as lengthEmail } from "./form.js";
import { validatePassword as matchPasswords } from "./form.js";

// if the submit button is on the page
if ($("#btnRegSubmit")) {
    // TO DO: add a click function that calls a callack function
    $("#btnRegSubmit").click(function (e) {
        // prevent the default submit action (stay on the page)
        e.preventDefault();

        // create a new user
        // you normally wouldn't do this unless you had validated, but we're going to do it to show how class memebers work in calling the validation

        // get the first name input
        let firstName = document.getElementById('inputFirst').value;

        // get the last name input
        let lastName = document.getElementById('inputLast').value;

        // get the username input
        let username = document.getElementById('inputUsername').value;

        // get the email input
        let email = document.getElementById('inputEmail').value;

        // get the password input
        let password = document.getElementById('inputPassword').value;

        // get the confirm password input
        let confirmPassword = document.getElementById('inputPassword2').value;

        let user = new Login(firstName, lastName, username, email, password);
        // debug statement for object
        console.log(`UserDetails:\n ${user.displayUser()}`)

        // error message paragraph        
        // create a paragraph
        let errors = "";

        // validate first name
        errors += lengthFirst(firstName);

        // validate last name
        errors += lengthLast(lastName);

        // validate  username
        errors += lengthUsername(username);

        // validate email
        errors += lengthEmail(email);

        // validate confirm password
        errors += matchPasswords(password, confirmPassword);
        
        // add paragraph to form
        $('#registration-form').append(errors);
    });
}

// TO DO: if reset button present

    // bind a click event handler

        // clear out all error message paragraphs




// SLIDESHOW
// TO DO: if there's a gallery class on the page

    // call a callback function to handle the galler rotation


        // get the image tag
        // get a list of your images
        // let images = [
        //     "./images/portraits/portrait-01.jpg",
        //     "./images/portraits/portrait-02.jpg",
        //     "./images/portraits/portrait-03.jpg",
        //     "./images/portraits/portrait-04.jpg",
        //     "./images/portraits/portrait-05.jpg",
        //     "./images/portraits/portrait-06.jpg",
        //     "./images/portraits/portrait-07.jpg",
        //     "./images/portraits/portrait-08.jpg",
        //     "./images/portraits/portrait-09.jpg",
        //     "./images/portraits/portrait-10.jpg",
        //     "./images/portraits/portrait-11.jpg",
        //     "./images/portraits/portrait-12.jpg",
        //     "./images/portraits/portrait-13.jpg",
        //     "./images/portraits/portrait-14.jpg",
        //     "./images/portraits/portrait-15.jpg",
        //     "./images/portraits/portrait-16.jpg",
        //     "./images/portraits/portrait-17.jpg",
        //     "./images/portraits/portrait-18.jpg",

        // ]



        // set a first index

        // call the setInterval method that will re-call this method at a set interval

            // increment the image index but no greater than how many images you have

            // fade out the current image

                // $(this) refers to the object that calls the callback or in this case galleryImage
                // change the src attribute of the image

                // fade it back in

                // debug statement

            //set the time for more than how long the fade out and in process will take or you won't get the images you expect