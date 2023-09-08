
import { useState } from 'react';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import * as React from "react";

function App() {
  const [alert,setAlert]=useState(null);
  const [mode,setMode]=useState('light');
//const [rmode,setrmode]=useState('nlight');

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
     setTimeout(() => {
      setAlert(null);
     }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#153e7a';
      showAlert("dark mode has been Enabled","success");
      document.title='Textutils-Darkmode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enables","success");
      document.title='Textutils-lightmode';
     // setInterval(() => {
       // document.title='textutils is amazing mode';
     // }, 2000);
     // setInterval(() => {
     //   document.title='install textutils now';  
     // }, 1500);
   }
  }

   
  
  
     
  return (
             <>
    

    
    <Navbar title= "Textutils" abouttext="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
    <div div className="container my-3" >
      <TextForm showAlert={showAlert} heading="Enter the Text to analyze below"
       mode={mode}/>
    
    </div>
   
    </>
    
    
  )
}

export default App


