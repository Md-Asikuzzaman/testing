'use client';

import { NextPage } from 'next';
import PostCard from './PostCard';
import { useState } from 'react';

interface Props {
  posts: {
    id: string;
    title: string;
    body: string;
  }[];
}

const Posts: NextPage<Props> = ({ posts }) => {
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (e: any) => {
    const searchKey = e.target.value.toLowerCase();
    setQuery(searchKey);

    setFilteredPosts(
      posts.filter((post) => post.title.toLowerCase().includes(searchKey))
    );
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search posts...'
        value={query}
        onChange={handleSearch}
      />
      <button>filter</button>
      <div className='grid grid-cols-4 gap-4'>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
