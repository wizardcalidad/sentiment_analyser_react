import React from 'react';
import './App.css';
import { CheckButton, Title, Label, Select, Container } from './style';

function Tweet({name, message}){
    return(
       <div className="tweet">
            <Title>{name}</Title>
            <Container>
            <Label>Model:</Label>
            <Select>
                <option>Choose...</option>
                <option>Gaussian</option>
                <option>Multinomial</option>
                <option>Categorical</option>
                <option>Complement</option>
                <option>Bernoulli</option>
            </Select>
            </Container>
            
            <Container>
            <Label>Vectorizer:</Label> 
            <Select>
            <option>Choose...</option>
                <option>Count</option>
                <option>Tfidf</option>
            </Select>
            </Container>
            <Container>
            <Label>Tweet:</Label><textarea>{message}</textarea>
            </Container>
            <CheckButton>Check</CheckButton>
        </div>
    );
}

export default Tweet;
