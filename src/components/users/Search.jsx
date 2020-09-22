import React, { useState } from 'react';
import propTypes from 'prop-types';

const Search = ({ clearUser, showClear, searchUser, setAlert }) => {
  const [text, setText] = useState(' ');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('please enter something', 'light');
    } else {
      searchUser(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button onClick={clearUser} className="btn btn-light btn-block">
          Clear
        </button>
      )}
    </div>
  );

  Search.propTypes = {
    searchUser: propTypes.func.isRequired,
    clearUser: propTypes.func.isRequired,
    showUser: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired,
  };
};
export default Search;
