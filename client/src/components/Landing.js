import React from "react";
import { Link } from "react-router-dom";
import sun from '../static/gratitudeSun.jpeg';
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";


const Landing = () => {

    const { loginWithRedirect, logout,  user, isAuthenticated, isLoading  } = useAuth0();
    if (isLoading) {
      return <div>Loading ...</div>;
    }

    return ( 
        <> 
        {!isAuthenticated && (
                <img src={sun} className="App-logo" alt="Be greatefull" />
        )}  
        {isAuthenticated && (
            <Link to="/home" >
                <img src={sun} className="App-logo" alt="Be greatefull"/>
            </Link>
         )}
        </>

      );
}
 
export default Landing;