import React, {useState, useEffect} from 'react';
import './App.css';
import { CheckButton, Title, Label } from './style';


function Result({name, message}){

    return(
       <div className="tweet">

           <Title>{name}</Title>
            <Label>Tweet:</Label><textarea>{message}</textarea>
            <CheckButton>
            <div class="container">
  <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#myModal" style={{backgroundColor:"blue", color:"white"}}>Check</button>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">ALL RESULTs</h4>
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

export default Result;
