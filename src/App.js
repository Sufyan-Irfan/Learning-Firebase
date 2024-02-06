import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import About from './components/About';
import Form from './components/form'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)



  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);

  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'black'
      showalert("Dark mode has been enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light mode has been enabled", "success")
    }
  }
  return (
    
      <Router>
        <Navbar title="Text Analyzer" about="about" contact="Contact Us" service="Services" mode={mode} togglemode={togglemode} />
        <Alert showalert={showalert} alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Form showalert={showalert} heading="Enter your text below" mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
