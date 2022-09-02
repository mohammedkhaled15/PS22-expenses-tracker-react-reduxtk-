import React from 'react'
import Button from 'react-bootstrap/Button';
import { AiOutlineTransaction } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"

const Controls = ({ setShowNew }) => {

    const handleOpenModal = (e) => {
        e.preventDefault()
        setShowNew(true)
    }

    return (
        <div className='controls d-flex justify-content-evenly mb-3' >
            <Button variant='primary' onClick={(e) => handleOpenModal(e)}>New Transaction <AiOutlineTransaction color='#fff' size={23} /></Button>
            <Button variant='primary'>Edit History <AiOutlineEdit color='#fff' size={23} /></Button>
        </div>
    )
}

export default Controls