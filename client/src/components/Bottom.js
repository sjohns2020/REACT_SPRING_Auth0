import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = styled.div`
border-style: solid;
position: fixed;
bottom: 0;
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

const FNav = styled.nav`
position: sticky;
display: flex;
justify-content: space-around;
padding: 0.5em;
align-items: baseline;
`

const Bottom = () => {

    const { loginWithRedirect, logout,  user, isAuthenticated, isLoading  } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
      }

    return ( 
        <div>
            <FNav>
            {!isAuthenticated && (
            <h1>Happiness is being Gratefull</h1>
            )}
                { isAuthenticated && (
                <>
                <Logo to="/" className=" fa-solid fa-duotone fa-user "></Logo>
                <Logo to="/" className=" fa-sharp fa-solid fa-gear "></Logo>
                <Logo onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Logo>
                </>
                )}
           </FNav>
        </div>
     );
}
 
export default Bottom;