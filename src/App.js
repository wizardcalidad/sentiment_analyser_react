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
      <h1>OLÓÒTÓ- is a platform where you can analyze your tweets as been a good or a bad comment...</h1>
      <Tweet name="Analyze"/>
      <Result name="Analyze All Models"/>
      
    </div>
    <Footer />
    </>
   
  );
}

export default App;