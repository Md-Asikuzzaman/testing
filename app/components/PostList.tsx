import React from 'react';
import Posts from './Posts';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  return res.json();
}

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default PostList;
