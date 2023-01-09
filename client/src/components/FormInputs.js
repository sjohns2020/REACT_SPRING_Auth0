import React from 'react'
import When from './When';
import Where from "./Where";
import Who from "./Who";
import Message from "./Message";
import Review from "./Review";
import useFormContext from '../hooks/useFormContext';



const FormInputs = () => {

    const { page }  = useFormContext()

    const display = {
        0: <Where />,
        1: <When />,
        2: <Who />,
        3: <Message />,
        4: <Review />
    }

    const content = (
        <div>
            {display[page]}
        </div>
    )

  return content
}

export default FormInputs