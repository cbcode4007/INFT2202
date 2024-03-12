/*
*  Name:        Colin Bond
*  Date:        2024-03-12
*  File:        blog.js
*
*  Description: A DOM Manipulation file included in Lab 3's blog.html to provide its content using JavaScript.
*/


// Inject body copy text into HTML file
document.write('<div class="container my-5">');
document.write('<h1>Blog</h1>');
document.write('<hr class="col-1 my-4">');
document.write('</div>');
document.write('<div id="posts-container" class="flex-container">');
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.getElementById('posts-container');
        posts.slice(0, 20).forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
            <div class="card flex-item">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
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
document.write('</div>');