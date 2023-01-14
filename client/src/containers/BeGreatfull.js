
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
padding-top: 75px;
padding-botton: 75px;
border: solid green;
`

function BeGreatfull() {

    const [praise, setPraise] = useState([])

    useEffect( () => {
        fetch('http://localhost:8080/praises')
            .then( res => res.json() )
            .then( data => setPraise( data ) )
    }, []) 


  const addPraise = (praise) => {
    return fetch('http://localhost:8080/praises', {
      method: 'POST',
      body: JSON.stringify(praise),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(savedPraise => setPraise([ ...praise, savedPraise ]));
    }

  // const updatePraise = (praise) => {
  //   return fetch('http://localhost:8080/praises' + praise._id, {
  //     method: 'PUT',
  //     body: JSON.stringify(praise),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(updatedPraise => {
  //     const updatedPraiseIndex = praise.findIndex(praise => praise._id === updatedPraise._id);
  //     const updatedPraise = [...praise];
  //     updatedPraise[updatedPraiseIndex] = updatedPriase;
  //     setBgs(updatedPraise);
  //     } )
  //   }

  const deleteBg = (id) => {
    return fetch('http://localhost:8080/praises' + id, {
      method: 'DELETE'
    })
    .then(PraiseToDelete => {
    setPraise(praise.filter(praise => praise._id !== PraiseToDelete));
  })}

  const { loginWithRedirect, logout,  user, isAuthenticated, isLoading  } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Router>
      <div  className="header">
      <Top />
      </div>
      <div className="main-section" >
        <Routes>
            {!isAuthenticated && (
            <Route exact path="/*" element={<Landing />}/>
            )}
            {isAuthenticated && (
            <>
            <Route exact path="/*" element={<Landing />}/>
            <Route exact path="/home" element={< Home />}/>
            <Route exact path="/form" element={<FormProvider>< Form addPraise={addPraise} /></FormProvider>}/>
            </>
            )}
        </Routes>
      </div>
      <div className="footer">
      <Bottom />
      </div>
    </Router>
  );
}

export default BeGreatfull;