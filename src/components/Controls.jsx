import React from 'react'
import Button from 'react-bootstrap/Button';
import { AiOutlineTransaction } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"

const Controls = ({ setShowNew, setShowEdit }) => {

    const handleOpenModalNew = (e) => {
        e.preventDefault()
        setShowNew(true)
    }

    const handleOpenModalEdit = (e) => {
        e.preventDefault()
        setShowEdit(true)
    }

    return (
        <div className='controls d-flex justify-content-evenly mb-3 gap-2   ' >
            <Button variant='primary' onClick={(e) => handleOpenModalNew(e)}>New Transaction <AiOutlineTransaction color='#fff' size={23} /></Button>
            <Button disabled={false} variant='primary' onClick={(e) => handleOpenModalEdit(e)}>Edit History <AiOutlineEdit color='#fff' size={23} /></Button>
        </div>
    )
}

export default Controls