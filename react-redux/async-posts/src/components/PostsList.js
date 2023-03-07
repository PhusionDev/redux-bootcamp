import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchPost from './SearchPost';
import './Posts.css';

import { fetchPostsAction } from '../redux/actions/postActions';

const PostsList = () => {
  const dispatch = useDispatch();

  const { loading, error, posts } = useSelector((data) => data);

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

  return (
    <>
      <SearchPost />
      <div className='posts-list'>
        <h1>Total Posts {posts.length}</h1>
        {loading ? (
          <h2>Loading</h2>
        ) : error ? (
          <h2 style={{ color: 'red' }}>
            {error.response.status && 'No post found...'}
          </h2>
        ) : (
          posts.map((post) => (
            <div className='post-details' key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostsList;
