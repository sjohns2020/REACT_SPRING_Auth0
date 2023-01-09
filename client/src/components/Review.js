import React from "react";
import useFormContext from "../hooks/useFormContext";
import styled from "styled-components";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

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
const ReviewDiv = styled.div`
display: flex column;
height: fit-contents;
`

const Review = () => {

    const {data, handleChange } = useFormContext()

    const content = (
        <>
            {/* <Input> 
            </Input>        */}
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" name="image" onChange={handleChange} />
                </Button>
                <div>
                <p>Location:  {data.whereLocation}</p>
                <p>Date:  {data.whenDate}</p>
                <p>Time:  {data.whenTime}</p>
                <p>Company:  {data.whoCompany}</p>
                <p>Name:  {data.whoFirstName}</p>
                <p>Description:  {data.whoDescription}</p>
                <p>Message:  {data.message}</p>
                </div>
        
        </>
    )

    return content
}

export default Review;