import React from 'react';

const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div>
            <input className='pa3 ba3 bg-light-blue b--green' 
            type='search' 
            placeholder='Search Robots'
            onChange={searchChange} />
        </div>
    );
}

export default SearchBox;