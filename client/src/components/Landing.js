import React from "react";
import { Link } from "react-router-dom";
import sun from '../static/gratitudeSun.jpeg';
import styled from 'styled-components'


const Landing = () => {
    return ( 
        <>   
            <Link to="/home" >
                <img src={sun} className="App-logo" alt="Be greatefull"/>
            </Link>
        </>

      );
}
 
export default Landing;