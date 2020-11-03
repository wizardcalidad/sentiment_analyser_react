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
            <CheckButton>
            <div class="container">
  <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#myModal" style={{backgroundColor:"blue", color:"white"}}>Check</button>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">RESULT</h4>
        </div>
        <div class="modal-body">
          <p><a href="#">It is:</a></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>



            </CheckButton>
        </div>
    );
}

export default Tweet;
