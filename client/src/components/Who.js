import React from "react";
import useFormContext from "../hooks/useFormContext";
import styled from "styled-components";

const Input = styled.input`
// background-color: lightgrey;
color: white;
font-family: inherit;
background-color: black;
border-radius: 7px;
border: solid white 2px;
padding: 3px;
margin-left: 5px;
`

const InputDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`



const Who = () => {

    const {data, handleChange } = useFormContext()

    const content = (
        <>    
            <InputDiv>
                <label htmlFor="whoFirstName">FirstName</label>
                <Input type="text" id="whoFirstName" name="whoFirstName" placeholder={data.whoFirstName}  onChange={handleChange} autoFocus/>
            </InputDiv>
            <InputDiv>
                <label htmlFor="whoDescription">Description</label>
                <Input type="text" id="whoDescription" name="whoDescription" placeholder={data.whoDescription}  onChange={handleChange}  />
            </InputDiv>
            <InputDiv>
                <label htmlFor="whoCompany">Company</label>
                <Input type="text" id="whoCompany" name="whoCompany" placeholder={data.whoCompany}  onChange={handleChange} />
            </InputDiv>
            <InputDiv>
                <label htmlFor="whoRole">Role</label>
                <Input type="text" id="whoRole" name="whoRole" placeholder={data.whoRole}  onChange={handleChange} />
            </InputDiv>

    
        </>
    )

    return content
}

export default Who;