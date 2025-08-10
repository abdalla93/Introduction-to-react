import React, { useState, useEffect } from 'react';

function PostList() {
  // 1. State for storing our posts and a loading indicator
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. The useEffect hook for fetching data
  useEffect(() => {
    // We define an async function inside the effect
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data); // Store the fetched data in state
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false); // Stop showing the loading message
      }
    };

    fetchPosts(); // Call the function to run it
  }, []); // 3. The empty dependency array

  // 4. Show a loading message while fetching
  if (loading) {
    return <p>Loading posts...</p>;
  }

  // Once loading is false, show the posts
  return (
    <div>
      <h1>User Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
