import React from 'react';
import './App.css';
import { CheckButton, Title, Label } from './style';


function Result({name, message}){
    return(
       <div className="tweet">

           <Title>{name}</Title>
            <Label>Tweet:</Label><textarea>{message}</textarea>
            <CheckButton>Check</CheckButton>
        </div>
    );
}

export default Result;
