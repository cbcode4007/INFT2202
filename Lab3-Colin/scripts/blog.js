
document.write('<div id="posts-container" class="container my-5">');
document.write('<h1>Blog</h1>');
document.write('<div class="col-lg-8 px-0">');
document.write('<hr class="col-1 my-4">');
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.getElementById('posts-container');
        posts.slice(0, 20).forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2 class="post">${post.title}</h2>
                <p class="post">${post.body}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });
});
document.write('</div>');