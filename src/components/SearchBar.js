import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return(
        <div className="search">
            <form>
              <input type="text" value="Try searching for a specific instrument or area!"></input>
              <button id="searchBtn"><i class="fas fa-search"></i></button>
            </form>
        </div>
        );
    }
export default SearchBar;