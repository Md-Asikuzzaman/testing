import { Metadata, NextPage } from 'next';
import React from 'react';

interface Props {
  params: Promise<{ id: string[] }>;
}

// type tParams = Promise<{ id: string[] }>;

type Post = {
  id: string;
  title: string;
  body: string;
};

const getPost = async (id: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // const { id } = await params;
  // const post = (await getPost(id)) as Post;

  return {
    title: 'post.title',
    description: 'post.body',
  };
}

const SinglePost = async ({ id }: { id: string[] }) => {
  const post = (await getPost(id)) as Post;

  return (
    <div className='bg-purple-700 text-white p-4 rounded-lg inline-block'>
      <div key={post.id}>
        <h1 className='text-2xl mb-1'>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

const Page: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <div className='max-w-[500px] mx-auto w-full'>
      <SinglePost id={id} />
    </div>
  );
};

export default Page;
