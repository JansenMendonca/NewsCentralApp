import React from 'react';
import ReactDOM from 'react-dom';
import Articles from '../Articles';
import  "@testing-library/jest-dom";


    it("should render Articles properly  ", ()=>{
        const div = document.createElement("div");
        ReactDOM.render(
            <Articles results={Articles.results} invalidSearch={''}/> , div
        );     
    
    })

    it("should render Articles properly with error message ", ()=>{
        const div = document.createElement("div");
        ReactDOM.render(
            <Articles results={Articles.results} invalidSearch={'@xhdjbkdy 000'}/> , div
        );     
       
    })