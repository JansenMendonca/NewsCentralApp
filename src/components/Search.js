import React from 'react';


const Search = (props) => {
    return(
        <div className="ui inverted segment">            
            <div className="ui inverted divider">
                <h1>News Central App</h1>
            </div>
            <div className="ui inverted left icon input"></div>
            <div className="ui inverted divider"></div>
            <div className="ui fluid inverted transparent icon input">
                <input type="text" placeholder="Search..." value={props.query} onChange={(e) => props.setQuery(e.target.value)} onKeyPress={props.search} />
                <i className="search icon"></i>
            </div>
        </div>
    )
}

export default Search;




