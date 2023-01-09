import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const CardLink = styled(Link)`
border-style: solid;
height: 15em;
width: 90vw;
border-radius: 4.5vh;
border-color: yellow;
margin: 1em;
`

const ActStepOne = () => {
    return ( 
        <>
            <h1>ActStepOne</h1>
        <CardLink />
        <CardLink />
        </>

      );
}

export default ActStepOne;