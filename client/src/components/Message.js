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

const Message = () => {

    const {data, handleChange } = useFormContext()

    const content = (
        <>
            <div>
                <label htmlFor="message">Message</label>
                <Input type="text" id="message" name="message" placeholder={data.message} onChange={handleChange} autoFocus />
            </div>
        
        </>
    )

    return content
}

export default Message;