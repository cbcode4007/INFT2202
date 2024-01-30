// ADDING ITEMS TO START AND END OF LIST

// ADD NEW ITEM TO END OF LIST
// Get the <ul> element
var ulElement = document.querySelector('ul');

// Create element
var newLiElementEnd = document.createElement('li');

// Create text node
var newTextEnd = document.createTextNode('olive oil');

// Add text node to element
newLiElementEnd.appendChild(newTextEnd);

// Add element end of list
ulElement.appendChild(newLiElementEnd);


// ADD NEW ITEM START OF LIST
// Create element
var newLiElementStart = document.createElement('li');

// Create text node
var newTextStart = document.createTextNode('avocado');

// Add text node to element
newLiElementStart.appendChild(newTextStart);

// Add element to list
ulElement.insertBefore(newLiElementStart, ulElement.firstChild);


// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
var listItemCounter = 1;

// Loop through elements
var allLiElements = document.querySelectorAll('li');

for (var i = 0; i < allLiElements.length; i++) {
  // Change class to cool
  allLiElements[i].classList.add('cool');
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var h2Element = document.querySelector('h2');

// No. of <li> elements
var numberOfItems = allLiElements.length;

// Content
var h2Content = h2Element.innerHTML;

// Update h2 using innerHTML (not textContent) because it contains markup
h2Element.innerHTML = h2Content + '<span>' + numberOfItems + '</span>';
