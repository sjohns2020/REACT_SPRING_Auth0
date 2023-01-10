import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { flexbox } from "@mui/system";

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

    const { loginWithRedirect, logout,  user, isAuthenticated, isLoading  } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
      }


    return ( 
        <Header>
            <HNav>
            {!isAuthenticated && (
                <Logo onClick={() => loginWithRedirect()}>Log In</Logo>
            )}
            {isAuthenticated && (
            <>
            <Logo to="/home" className="fa-solid fa-g" style={{backgorundImage: `url(${user.picture})`}}></Logo>
            <h1>  {user.name}'s ProgressBar </h1>
            <img src={user.picture} alt="image" style={{height: `3em`}} />
            </>
            )}
            </HNav>
        </Header>
     );
}
 
export default Top;