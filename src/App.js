
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//  import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";


function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#222138';
      showAlert("Dark mode enabled","success")
      document.title="Textutils - dark mode";

      // setInterval(() => {
      //   document.title="Textutils is Amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title="Install Textutils";
      // }, 4000);



    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success")
      document.title="Textutils -light mode";
    }
  }
  return (
 <>
 {/* <Navbar/> */}

 <Navbar title="Textutils" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
<div className="container my-3">


    <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        
        </div>
       

 </>
  );
}

export default App;
 