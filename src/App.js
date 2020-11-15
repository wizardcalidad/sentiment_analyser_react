import React, { useState } from 'react';
import Tweet from './components/Tweet';
import MyNav from './navbar';
import Footer from './footer';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css"

import {baseUrl} from "./utils/constants";




function App(){
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)


  const handleChange = (e) => {
    e.preventDefault();
    setData( () => {
      return {
        ...data, 
      [e.target.name]: e.target.value,
      }
    })
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

      fetch('https://hatespeechbot.herokuapp.com/predict', {method: "post", body: JSON.stringify(data), headers:{'Content-Type': "application/json"}})
      .then(response => response.text())
      .then(res => toaster.notify(res, {duration: 5000}))
      .catch((err) => console.log(err))
      .finally(setLoading(false))
      console.log("sent")
    
  }

  if (loading) return "Loading..."

  return(
    
    <>
    <MyNav />
    
       <div className="app">
      <h1>OLÓÒTỌ́- is a platform where you can analyze tweets and product reviews to derive insights of bad comments, hate speech or an acknowledgement...</h1>
      <Tweet handleChange={handleChange} handleSubmit={handleSubmit} name="Analyze" models="{models}"/>
      
    </div>
    <Footer />
    </>
   
  );
}

export default App;