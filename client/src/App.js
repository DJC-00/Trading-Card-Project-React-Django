import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.min.css'; // Added this :boom:
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import AllCards from './components/AllCards';

function Home() {
  return (

    <div className="container">
      <h1 className='text-center'>Welcome to the Arena!</h1>
      <div className='d-flex'>
        <div className="container "></div>
      </div>
    </div>

  );
}

function App() {
  return (
    <div className='container'>
      <hr/>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/allcards" element = {<AllCards/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
