import React from 'react';
import '../App.css';
import { Title, Label, Select, Container } from '../style';


function Tweet({ name, message, handleChange, handleSubmit}){

    return(
       <div className="tweet">
            <Title>{name}</Title>
            <form method="post" onSubmit={handleSubmit}>
            <Container>
            <Label>Model:</Label>
            <Select onChange={handleChange} name="model">
                <option value="">Choose...</option>
                <option value="gaussian">Gaussian</option>
                <option value="multinomial">Multinomial</option>
                <option value="categorical">Categorical</option>
                <option value="complement">Complement</option>
                <option value="bernoulli">Bernoulli</option>
            </Select>
            </Container>
            
            <Container>
            <Label>Vectorizer:</Label> 
            <Select name="vectorizer" onChange={handleChange}>
            <option value="">Choose...</option>
                <option value="count">Count</option>
                <option value="tfidf">Tfidf</option>
            </Select>
            </Container>
            <Container>
            <Label>Tweet:</Label><textarea name="text" onChange={handleChange}>{message}</textarea>
            </Container>
            <button type="submit" class="btn btn-sm"  style={{backgroundColor:"blue", color:"white"}}>Check</button>
            </form>
        </div>
    );
}

export default Tweet;
