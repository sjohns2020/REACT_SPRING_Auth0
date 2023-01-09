import { createContext, useState } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const title = {
        0: 'Where',
        1: 'When',
        2: 'Who',
        3: 'Your Message',
        4: 'Add Pictures'
    }

    const [page, setPage] = useState(0)
    const [data, setData] = useState ({
        "whereLocation": "",
        "whenDate": "",
        "whenTime": "",
        "whoCompany": "",
        "whoRole": "",
        "whoFirstName": "",
        "whoDescription": "", 
        "message": "",
        "image": ""
    })

    const handleChange = e => {
        const name = e.target.name
        const type = e.target.type
        const value = type === "file" 
            ? e.target.files[0]
            : e.target.value
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    // https://www.bezkoder.com/node-js-upload-store-images-mongodb/

    const canSubmit = page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('where'))
        .map(key => data[key])
        .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('when'))
        .map(key => data[key])
        .every(Boolean)
    
    const canNextPage3 = Object.keys(data)
        .filter(key => key.startsWith('who'))
        .map(key => data[key])
        .every(Boolean)

    const canNextPage4 = Object.keys(data)
        .filter(key => key.startsWith('mess'))
        .map(key => data[key])
        .every(Boolean)
    
    const canNextPage5 = Object.keys(data)
        .filter(key => key.startsWith('ima'))
        .map(key => data[key])
        .every(Boolean)
    

        const disablePrev = page === 0

        const disableNext = 
            (page === Object.keys(title).length -1)
            || (page === 0 && !canNextPage1)
            || (page === 1 && !canNextPage2)
            || (page === 2 && !canNextPage3)
            || (page === 3 && !canNextPage4)
            || (page === 4 && !canNextPage5)
        
        const prevHide = page === 0 && "remove-button"

        const nextHide = page === Object.keys(title).length - 1 && "remove-button"

        const submitHide = page !== Object.keys(title).length - 1 && "remove-button"
        

    return (
        <FormContext.Provider value={{title, page, setPage, data, setData, handleChange, canSubmit, disablePrev, disableNext, prevHide, nextHide, submitHide}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext