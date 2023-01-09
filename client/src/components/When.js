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
margin-bottom: 3px;
`



const When = () => {

    const {data, handleChange } = useFormContext()

    const content = (
        <>
            <div>
                <label htmlFor="whenDate">Date: </label>
                <Input type="text" id="whenDate" name="whenDate" placeholder={data.whenDate} onChange={handleChange} autoFocus />
            </div>
            <div>
                <label htmlFor="whenTime">Time: </label>
                <Input type="text" id="whenTime" name="whenTime" placeholder={data.whenTime} onChange={handleChange} />
            </div>
    
        </>
    )

    return content
}

export default When;