import React from "react";
// import About from "./Components/About";
import Navbar from './Components/Navbar';
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import  {useState} from "react";



function App() {
  const [mode, Setmode] = useState('light');
  const [alert, Setalert] = useState(null);
  const showalert = (message, type) =>  {
    Setalert(
      {
        msg: message,
        type: type
}) 
setTimeout(() => { 
  Setalert(null);
}, 2000);
  }
  const toggleMode = () => {
  if(mode === 'light')
  {
    Setmode('dark');
    document.body.style.backgroundColor =  'black';
    showalert('Dark Mode has Enabled', 'success');
    document.title = 'TextUtils - Dark mode'
    // bad ui 
    // setInterval(() => {
    //   document.title = 'TextUtils - is amazing'
    // }, 500);
  }else{
    Setmode('light');
    document.body.style.backgroundColor =  'white';
    showalert('Light Mode has Enabled', 'success');
    document.title = 'TextUtils -  Light mode'
    // bad UI
    // setInterval(() => {
    //   document.title = ' Install TextUtils now'
    // }, 1000);
  }
  
}
  return (
  <>
  
    <Navbar title="Textutils" aboutText = "About US" mode={mode} toggleMode ={toggleMode}/>
   
    <Alert alert={alert} />
   <div className="container my-3">

 
          <Textform heading="Enter the text below to analyze" mode={mode} showalert={showalert} />
          
   </div> 
  
    </>
  );
}

export default App;
