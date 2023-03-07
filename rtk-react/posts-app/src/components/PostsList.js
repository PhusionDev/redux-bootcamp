import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchPost from './SearchPost';
import './Posts.css';

import { fetchPosts } from '../redux/slice/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // get data from store
  const { posts, loading, error } = useSelector((state) => state);

  return (
    <>
      <SearchPost />
      <div className='posts-list'>
        <h1>Total Posts {posts.length}</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2 style={{ color: 'red' }}>{error}</h2>
        ) : (
          posts.map((post) => (
            <div className='post-details' key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostsList;
