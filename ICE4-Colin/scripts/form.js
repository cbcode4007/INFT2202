/**
 * validateFirst - validated user first name entry through registration form
 * @param {string} first
 * @returns html element for error message
 */
export function validateFirst(first) {
    if (first.length < 2) {
        return "<p>You have entered a first name that is too short.</p>"
    }
    else {
        return "<p></p>";
    }
};

/**
 * validateLast- validated user last name entry through registration form
 * @param {string} last
 * @returns html element for error message
 */
export function validateLast(last) {
    if (last.length < 2) {
        return "<p>You have entered a last name that is too short.</p>"
    }
    else {
        return "<p></p>";
    }
};


/**
 * validateUsername- validated user username entry through registration form
 * @param {string} username
 * @returns html element for error message
 */
export function validateUsername(username) {
if (username.length < 2) {
        return "<p>You have entered a last name that is too short.</p>"
    }
    else {
        return "<p></p>";
    }
};

/**
 * validateEmail- validated user email entry through registration form
 * @param {string} email
 * @returns html element for error message
 */
export function validateEmail(email) {
if (email.length < 2) {
        return "<p>You have entered a last name that is too short.</p>"
    }
    else {
        return "<p></p>";
    }
};

/**
 * validatePassword- validated user password entries 1 and 2 are the same through ristration form
 * @param {string} passord1
 * @param {string} password2
 * @returns html element for error message
 */
export function validatePassword(pass1, pass2) {
    if (pass1 == pass2) {
        return "<p></p>";
    } else {
        return "<p>Your passwords do not match.</p>"
    }

};


