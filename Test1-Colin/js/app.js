(function() {

    // Question 1
    // Update the page title to say "YOUR NAME - Test 1"    
    document.title = "Colin Bond - Test 1";
    // Update the navbar title to say "YOUR NAME"
    var navbarTitle = document.querySelector(".navbar-brand");
    navbarTitle.textContent = "Colin Bond";


    // Question 2
    // get a reference to the test table
    var testTable = document.getElementById("test-table");
    // get a reference to the second row in the table
    var testTableRow2 = testTable.rows[2];
    // update the student number to be 100100100
    var testTableRow2Data3 = testTableRow2.cells[2];
    testTableRow2Data3.textContent = "100100100";


    // Question 3
    // create a table row with your own information
    var testTableRow4 = document.createElement("tr");
    // create a table delimeter and set your first name
    var testTableRow4Data1 = document.createElement("td");
    testTableRow4Data1.textContent = "Colin";    
    // add it to your table row
    testTableRow4.appendChild(testTableRow4Data1);
    // create a table delimeter and set your last name
    var testTableRow4Data2 = document.createElement("td");
    testTableRow4Data2.textContent = "Bond";    
    // add it to your table row
    testTableRow4.appendChild(testTableRow4Data2);
    // create a table delimeter and set your banner id
    var testTableRow4Data3 = document.createElement("td");
    testTableRow4Data3.textContent = "100867475";
    // add it to your table row
    testTableRow4.appendChild(testTableRow4Data3);
    // add your row to the test table body
    const testTableBody = document.querySelector("#test-table tbody");
    testTableBody.appendChild(testTableRow4);


    // Question 4
    // remove Alice Bobberts from the table
    var testTableRow3 = testTable.rows[3];
    testTableRow3.remove();


    // Question 5
    // add the .table-info class to your personal row
    testTableRow3 = testTable.rows[3];
    testTableRow3.setAttribute('class', 'table-info');


    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    var testTableRow1 = testTable.rows[1];
    testTableRow1.classList.remove("table-warning");


    // Question 7
    // change .table-dark to .table-success for John Doe's row
    testTableRow2.setAttribute('class', 'table-success')


    // Question 8
    // use the node pacakge manager to install a new package, holderjs (see https://www.npmjs.com/package/holderjs)
    //  added 1 package, and audited 7 packages in 2s

    //  2 packages are looking for funding
    //    run `npm fund` for details

    //  found 0 vulnerabilities

    // include the holder script at the bottom of index.html
    // <script src="../node_modules/holderjs/holder.js"></script>

    // under the container div holding the test-table, create another container div, and create an image place"holder".
    Holder.run({
        themes: {
          "custom-placeholder": {
            size: "200x200",
            theme: "gray",
            text: "Placeholder Image"
          }
        }
      });

    const imageContainer = document.createElement("div");
    imageContainer.id = "image-container";

    const placeholderImage = document.createElement("img");
    placeholderImage.setAttribute("data-src", "holder.js/200x200/theme:custom-placeholder");

    imageContainer.appendChild(placeholderImage);

    const containerDiv = document.querySelector(".container");  
    containerDiv.insertAdjacentElement("afterend", imageContainer);

})();
