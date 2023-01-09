import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BgStepOne from "./Review";

// const Main = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// width: 100vw;
// height: 100vh;
// `

const CardLink = styled(Link)`
text-decoration: none;
border-style: solid;
height: 10em;
width: 17em;
border-radius: 4.5vh;
border-color: white;
margin: 1em;
color: inherit;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
`



const Home = () => {
    return ( 
        <>
        <h1>Being Greatfull imporves your wellbeing</h1>
        <CardLink to="/form" ><h1>Be Greatfull</h1></CardLink>
        <CardLink to="/" ><h1>Show Activity</h1></CardLink>
        </>

      );
}
 
export default Home;