import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
border-style: solid;
position: fixed;
top: 0;
width: 100%;
height: 75px;
margin: 0 auto;
z-index: 50;
`
const Logo = styled(Link)`
text-decoration: none;
border-style: solid;
border-color: white;
border-radius: 2em;
color: inherit;
font-size: 2em;
padding: 5px;
`

const HNav = styled.nav`
position: sticky;
display: flex;
justify-content: space-around;
align-items: baseline;
`


const Top = () => {
    return ( 
        <Header>
            <HNav>
            <Logo to="/home" className="fa-solid fa-g"></Logo>
            <h1>(  ProgressBar  )</h1>
            </HNav>
        </Header>
     );
}
 
export default Top;