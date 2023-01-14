import useFormContext from "../hooks/useFormContext"
import FormInputs from "./FormInputs"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

const InputDiv = styled.div`
border-style: solid;
height: 30em;
width: 20em;
border-radius: 4.5vh;
border-color: white;
margin: 1em;
color: inherit;

display: flex;
justify-content: center;
align-items: center;
position: relative; 
`
const ButtonDiv = styled.div`
position: absolute;
bottom: 0; 
left: 0;
width: 100%; 
`
const TitleDiv = styled.div`
position: absolute;
top: 0; 
left: 0;
width: 100%; 
height: 4em;
`
const Title = styled.h1`
margin: 2px;
`
const InputsDiv = styled.div`
display: flex column;
justify-contents: center;
align-items: center;
padding: 10px;
padding-bottom: 2.5em;
`


const Form = ({addPraise}) => {

    const{
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev, 
        disableNext, 
        prevHide, 
        nextHide, 
        submitHide
    } = useFormContext()

    const handlePrev = () => { setPage(prev => prev - 1)}

    const handleNext = () => { setPage(prev => prev + 1)}

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        addPraise(data)
        navigate('/home')
    }

  return (
        <>
        <InputDiv>
        <form onSubmit={handleSubmit}>
            <TitleDiv>
                <Title>{title[page]}</Title>
            </TitleDiv>
            <InputsDiv>
                <FormInputs />
            </InputsDiv>
            <ButtonDiv>
                <button type="button" className={`form-button-prev ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>
                <button type="button" className={`form-button-next ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>
                <button type="submit" className={`form-submit ${submitHide}`} disabled={!canSubmit}>Submit</button>
            </ButtonDiv>
        </form>
        </InputDiv>
        </>  

  )
}

export default Form