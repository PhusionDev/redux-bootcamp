import React from 'react';
import { useDispatch } from 'react-redux';

import './Form.css';
import { fetchPostAction } from '../redux/actions/postActions';

const SearchPost = () => {
  //search form state
  const dispatch = useDispatch();

  const [search, setSearch] = React.useState('');

  //search form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === '') {
      alert('Please provide a value');
    } else {
      dispatch(fetchPostAction(search));
    }
  };

  return (
    <div className='form-header'>
      <div>
        <h2>React Redux Project</h2>
        <p>
          This project is a simple React Redux project that fetches data with
          search functionality from an API
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search for a post'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchPost;
