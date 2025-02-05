import React, { Suspense } from 'react';
import Posts from './components/Posts';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  return res.json();
}

const Home = async () => {
  const posts = await getPosts();

  return (
    <div className='m-4'>
      <h1 className='mb-5 text-3xl text-center'>Hello SSR</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Posts posts={posts} />
      </Suspense>
    </div>
  );
};

export default Home;
