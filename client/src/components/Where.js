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
justify-contents: flex-end;
align-items: baseline;
`

const Where = () => {

    const {data, handleChange } = useFormContext()

    const content = (
            <InputDiv>
                <label htmlFor="whereLocation">Location  </label>
                <Input type="text" id="whereLocation" name="whereLocation" onChange={handleChange} autoFocus />
            </InputDiv>
    )

    return content
}

export default Where;