// change the class of each box, reordering the colours
// get the boxes with jQuery
let boxes = $('.box');

// loop through each box
boxes.each(function(index, box) {
    // get the class of the current box
    let currentClass = $(box).attr('class');

    // if the class is red, make it blue
    if (currentClass === 'box red-box') {
        $(box).attr('class', 'blue-box');
    }
    // if the class is blue, make it green
    if (currentClass === 'box blue-box') {
        $(box).attr('class', 'green-box');
    }
    // if the class is green, make it red
    if (currentClass === 'box green-box') {
        $(box).attr('class', 'red-box');
    }
}
);


// create a button to open the modal
let button = $('<button>Open Modal</button>');

// add the button to the page
$('#content').append(button);

// add a click event listener to the button
button.on('click', function() {
    // show the modal
    $('.lightbox').show();
}
);