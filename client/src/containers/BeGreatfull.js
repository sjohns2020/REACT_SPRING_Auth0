
import Bottom from "../components/Bottom";
import Top from "../components/Top";
import Landing from '../components/Landing';
import Home from "../components/Home";
import Form from "../components/Form";
import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FormProvider } from "../context/FormContext";
import { useAuth0 } from "@auth0/auth0-react";

const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
`

function BeGreatfull() {

    const [bgs, setBgs] = useState( [] )
    const [praise, setPraise] = useState([])

    useEffect( () => {
        fetch('http://localhost:8080/praises')
            .then( res => res.json() )
            .then( data => setPraise( data ) )
    }, []) 






    useEffect( () => {
        fetch('http://localhost:9000/api/bgs')
            .then( res => res.json() )
            .then( data => setBgs( data ) )
    }, [] )


  const addBg = (bg) => {
    return fetch('http://localhost:9000/api/bgs', {
      method: 'POST',
      body: JSON.stringify(bg),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(savedBg => setBgs([ ...bgs, savedBg ]));
    }

  const updateBG = (bg) => {
    return fetch('http://localhost:9000/api/bgs' + bg._id, {
      method: 'PUT',
      body: JSON.stringify(bg),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(updatedBG => {
      const updatedBgIndex = bgs.findIndex(bg => bg._id === updatedBG._id);
      const updatedBgs = [...bgs];
      updatedBgs[updatedBgIndex] = updatedBG;
      setBgs(updatedBgs);
      } )
    }

  const deleteBg = (id) => {
    return fetch('http://localhost:9000/api/bgs' + id, {
      method: 'DELETE'
    })
    .then(BGtoDelete => {
    setBgs(bgs.filter(bg => bg._id !== BGtoDelete));
  })}

  const { loginWithRedirect, logout,  user, isAuthenticated, isLoading  } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="app">
    <Router>
      <Top />
      <>
      <Main>
        <Routes>
            {!isAuthenticated && (
            <Route exact path="/*" element={<Landing />}/>
            )}
            {isAuthenticated && (
            <>
            <Route exact path="/*" element={<Landing />}/>
            <Route exact path="/home" element={< Home />}/>
            <Route exact path="/form" element={<FormProvider>< Form addBg={addBg} /></FormProvider>}/>
            </>
            )}
        </Routes>
      </Main>
      <Bottom />
      </>
    </Router>
    </div>
  );
}

export default BeGreatfull;