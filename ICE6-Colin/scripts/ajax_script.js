console.log('ajax_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// create the function that uses jquery get
function ajax_get(url) {
    $.get(url, (data) => {
        console.log(data);
    })
};

// for each url variable above, call the function in a console.log
ajax_get(url_posts);
ajax_get(url_comments);
ajax_get(url_albums);
ajax_get(url_todos);
ajax_get(url_users);

// from the photos url, put 2 random photos into the img elements in the html
$.get(url_photos, (data) => {
    let randomPhotos = data.sort(() => Math.random() - 0.5).slice(0,2);
    console.log(randomPhotos);

    document.getElementById("photo1").src = randomPhotos[0].thumbnailUrl;
    document.getElementById("photo2").src = randomPhotos[1].thumbnailUrl;
});

// to see the results, right click on the page and click inspect, and click the console tab


// display the two random photos