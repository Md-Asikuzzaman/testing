'use client';

import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  post: {
    id: string;
    title: string;
    body: string;
  };
}

const PostCard: NextPage<Props> = ({ post }) => {
  return (
    <Link
      className='bg-purple-700 text-white p-4 rounded-lg inline-block'
      href={`/post/${post.id}`}
    >
      <div key={post.id}>
        <h1 className='text-2xl mb-1'>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </Link>
  );
};

export default PostCard;
