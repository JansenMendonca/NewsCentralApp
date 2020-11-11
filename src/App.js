import React,{useState} from 'react';
import axios from 'axios';
import {today} from './utils/currentDate';
import Search from './components/Search';
import Articles from './components/Articles';


const App = () =>{

    const[query, setQuery] = useState('');
    const[results,setResults] = useState([]);
    const[invalid,setInvalid] = useState([]);

    const URL = 'http://newsapi.org/v2/everything?apiKey=9e9906e1ae674954841e68f222314edb';
    const search = async(e)=>{
        if(query && e.key === 'Enter'){
            const {data} = await axios.get(URL,{
                params:{
                    q:query,
                    from: `${today}&`,
                    sortBy:'popularity&',                
                },
            });
            setResults(data.articles);
            setInvalid(data.totalResults);
            setQuery('');
        }
    };


        return(
            <div>
                <Search query={query} setQuery={setQuery} search={search}/>
                <Articles results={results} invalidSearch={invalid}/>
            </div>
        )
};

export default App;




   

    
