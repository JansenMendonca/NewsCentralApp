import React from 'react';



const Articles = (props) => {

    let renderedResults 

    if( props.invalidSearch === 0){        
        function invalidSearch(){
            return (  
                <div className="ui negative message">
                    <div className="header">
                        Search couldn't find a valid result.
                    </div>
                        <p>Please try again</p>
                </div>
            ) 
        }
        renderedResults = invalidSearch();
    }else if(props.results ){
        renderedResults = props.results.map((result)=>{
            return(
                <div className="ui divided items" key={result.url} >
                    <div className="item">
                        <div className="middle aligned content">
                            <h2>{result.title}</h2>
                            <p>Source:{result.source.name}</p>
                            <a href={result.url} target="_blank" rel="noreferrer">Click to see full article </a>
                            <hr />
                        </div>
                    </div>
                </div>                
            )
        })
    }
    

    return(
        <div>
            {renderedResults}
        </div>
    )
}

export default Articles;