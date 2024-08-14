
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("");
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>

      <Navbar title="Text utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'> 
           {/* <About mode={mode}/> */}
           <TextForm showAlert={showAlert} mode={mode} Heading='Enter Text Here To Analyze' />
     </div>
    </>

  );
}

export default App;
