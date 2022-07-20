import React, { useState } from 'react'

const MyAccordion = ({ id, question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}> {show ? "-" : "+"} </button>
            <p>{question}</p>
            {show && <p> {answer}</p>}
        </>
    )
}

export default MyAccordion
