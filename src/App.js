import React from 'react';
import Tweet from './Tweet';
import Result from './Result';
import MyNav from './navbar';
import Footer from './footer';




function App(){
  

  return(
    <>
    <MyNav />
    
       <div className="app">
      <h1>OLÓÒTÓ- is a platform where you can analyze tweets and product reviews to derive insights of bad comments, hate speech or an acknowledgement...</h1>
      <Tweet name="Analyze"/>
      <Result name="Analyze All Models"/>
      
    </div>
    <Footer />
    </>
   
  );
}

export default App;