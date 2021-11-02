import React from 'react';

import './searchBar.styles.css';

const SearchBar = ({search,city,data,setCity}) => {
    return (
        <div>
            {
                data === null ? (
                    <form onSubmit={search} id='beforeSearch'>
                        <input autoFocus value={city} placeholder='Search city' onChange={val => setCity(val.target.value)}/>
                        <button> Search </button>
                    </form>
                ) : (
                    <form onSubmit={search} id='afterSearch'>
                        <input autoFocus value={city} placeholder='Search city' onChange={val => setCity(val.target.value)}/>
                        <button> Search </button>
                    </form>
                )
            }
        </div>
    )
}

export default SearchBar;