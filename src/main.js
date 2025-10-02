import './style.css';

async function fetchPosts() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    document.getElementById('app').innerHTML = '<p>Error loading posts</p>';
  }
}

function displayPosts(posts) {
  const app = document.getElementById('app');

  let html = '<h1>Posts</h1>';
  html += '<div class="posts-container">';

  posts.forEach((post) => {
    html += `
      <article class="post">
        <h2>${post.title}</h2>
        <p class="post-meta">User ID: ${post.userId} | Post ID: ${post.id}</p>
        <p class="post-body">${post.body}</p>
      </article>
    `;
  });

  html += '</div>';
  app.innerHTML = html;
}

// Fetch posts when the page loads
fetchPosts();
