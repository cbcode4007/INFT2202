/*
*  Name:        Colin Bond (100867475)
*  Date:        2024-03-15
*  File:        blog.js
*
*  Description: A DOM Manipulation file included in Lab 3's blog.html to provide its content using JavaScript.
*/


// Inject body copy text into HTML file
document.write('<div class="container my-5">');
document.write('<h1>Blog</h1>');
document.write('<hr class="col-1 my-4">');
document.write('</div>');
// Initialize new element to contain future blog posts
document.write('<div id="posts-container" class="flex-container">');

// Add an event listener to fetch and format blog posts, only once all of the original website code has finished loading
document.addEventListener("DOMContentLoaded", function() {
    const API_KEY = '42875055-a5827e5aef92cace1467b10c5';
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=landscape&image_type=photo&per_page=20`;
    // Fetch images
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        // Initialize constant for the element containing posts
        const postsContainer = document.getElementById('posts-container');
        // Fetch raw text for 20 posts
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.slice(0, 20).forEach((post, index) => {
                // Initialize new element to contain a formatted blog post                
                const postElement = document.createElement('div');
                // Add classes to the post div for the sake of format
                postElement.classList.add('col-md-4', 'post');
                // Use Bootstrap Card and Flexbox Flex Item classes to create responsive posts
                postElement.innerHTML = `                
                <div class="card flex-item">                    
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <img class="card-img-top" src="${data.hits[index % data.hits.length].webformatURL}" alt="Card image cap">
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
                `;                
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
    });
});

// Closing div tag for post container div
document.write('</div>');