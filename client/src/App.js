import React from 'react';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

import BeGreatfull from './containers/BeGreatfull';


function App() {

  const { loginWithRedirect, logout,  user, isAuthenticated, isLoading  } = useAuth0();

  if (isLoading) {
      return <div>Loading ...</div>;
    }
    
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
