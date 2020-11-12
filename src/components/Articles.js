import React from 'react';
import './app.css';


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
                <article className="ui relaxed divided list" key={result.url} >
                    <div className="item ">
                        <div className="content main">
                            <div className="middle aligned content">
                                <div    className="right floated content">
                                    <a 
                                        className="ui button"
                                        href={result.url}
                                        target="_blank" rel="noreferrer"    
                                    >
                                    Go to Article
                                    </a>
                                </div>
                                <h2>{result.title}</h2>                                
                                <p>Source:{result.source.name}</p>                            
                                <hr />
                            </div>
                        </div>                        
                    </div>
                </article>                
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