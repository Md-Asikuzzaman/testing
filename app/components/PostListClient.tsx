'use client';

import React, { useState, useEffect } from 'react';

const PostListClient = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id} className='border p-2 mb-2'>
          <h2 className='text-xl font-semibold'>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostListClient;
