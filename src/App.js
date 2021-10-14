import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

const [progress, setProgress] = useState(0)
const [mode, setMode] = useState('light');


const toggleMode = ()=>{
  if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }else{
    setMode('dark');
    document.body.style.backgroundColor = '#111';
  }
}


    return (
      <div>
        <Router>

       <Navbar mode={mode} toggleMode={toggleMode}/>
       <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
       
       <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" mode={mode} category="general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" mode={mode} category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" mode={mode} category="entertainment"/></Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" mode={mode} category="general"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" mode={mode} category="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" mode={mode} category="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" mode={mode} category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" mode={mode} category="technology"/></Route>
         
        </Switch>
       </Router>
      </div>
    )
  
}


export default App;