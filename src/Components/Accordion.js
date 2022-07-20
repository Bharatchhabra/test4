import React, { useState } from 'react'
import { Questions } from './Api';
import MyAccordion from './MyAccordion';

const Accordion = () => {
    const [data, setData] = useState(Questions);
    return (
        <>
            {
                data.map((curElem) => {
                    const { id } = curElem;
                    return <MyAccordion key={id} {...curElem} />;

                })
            }

        </>
    )
}

export default Accordion
