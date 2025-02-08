import React, { Suspense } from 'react';
// import PostList from './components/PostList';
import dynamic from 'next/dynamic';

const PostList = dynamic(() => import('./components/PostList'), {
  ssr: true,
  loading: () => <p>All Posts Loading...</p>, // use only one loading technique
});

const Home = async () => {
  return (
    <div className='m-4'>
      <h1 className='mb-5 text-3xl text-center'>Hello SSR</h1>
      {/* use only one loading technique */}
      <Suspense fallback={<p>All Posts Loading...</p>}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default Home;
