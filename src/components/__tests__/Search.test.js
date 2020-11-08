import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../Search';
import  "@testing-library/jest-dom";



    it("should render Search properly ", ()=>{
        const div = document.createElement("div");
        ReactDOM.render(
            <Search query={Search.query} setQuery={Search.setQuery} search={Search.search}/> , div
        );     
       
    })