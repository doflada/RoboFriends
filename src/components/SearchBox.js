import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div id='search-id' className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
      <h4>Robo Cards with <a href='https://robohash.org'>https://robohash.org</a></h4>
    </div>
  );
}

export default SearchBox;
