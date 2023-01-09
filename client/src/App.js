import React from 'react';
import './App.css';

import BeGreatfull from './containers/BeGreatfull';

function App() {
  return (
    <>
      <div className="container">
        <div className="phone">
          <div className="notch-container">
            <div className="notch"></div>
          </div>
          <div className="mobile">
            < BeGreatfull /> 
          </div>    
        </div>
      </div>
         

    </>   
  );
}

export default App;
