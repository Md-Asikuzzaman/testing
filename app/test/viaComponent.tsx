'use client';

import dynamic from 'next/dynamic';
import React from 'react';
// import PostListClient from '../components/PostListClient';

const PostListClient = dynamic(() => import('./../components/PostListClient'), {
  ssr: false,
  loading: () => <p>Loading Client Posts...</p>,
});

const ViaComponent = () => {
  return (
    <div>
      <PostListClient />
    </div>
  );
};

export default ViaComponent;
