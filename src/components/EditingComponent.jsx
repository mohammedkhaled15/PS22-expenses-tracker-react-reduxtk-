import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/esm/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux';
import { editRec } from "./redux/recordSlice"

const EditingComponent = ({ recordToBeEdit, setShowEditBoard }) => {

    const records = useSelector(state => state.records)
    const dispatch = useDispatch()

    const record = records.records.filter(record => record.id === recordToBeEdit)[0]

    const [editedDesc, setEditedDesc] = useState(record.desc)
    const [editedAmount, setEditedAmount] = useState(record.amount)
    const [editedSign, setEditedSign] = useState(record.sign)

    const handleCancel = () => {
        setShowEditBoard(false)
    }

    const handleSaving = (e) => {
        e.preventDefault()
        dispatch(editRec({ id: record.id, editedDesc, editedAmount, editedSign }))
        setShowEditBoard(false)
    }


    console.log(record)

    return (
        <div className='new-modal  w-100 position-absolute h-100 start-50 top-50 translate-middle' style={{ backgroundColor: "rgba(192, 192, 192,0.8)" }}>
            <div className=' position-absolute start-50 top-50 translate-middle rounded-3 p-4 bg-secondary bg-gradient bg-opacity-75 w-75'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Details of your transaction:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter details"
                            value={editedDesc}
                            onChange={(e) => {
                                setEditedDesc(e.target.value)
                            }}
                        />
                        <Form.Text className="text-muted">
                            write whatever you want
                        </Form.Text>
                    </Form.Group>
                    <InputGroup style={{ justifyContent: "space-evenly" }}>
                        <Form.Check
                            inline
                            label="Income"
                            name="group1"
                            type="radio"
                            id={`inline-radio-1`}
                            // checked={editedSign === "positive" ? true : false}
                            onClick={() => setEditedSign("positive")}
                        />
                        <Form.Check
                            inline
                            label="Expense"
                            name="group1"
                            type="radio"
                            id={`inline-radio-2`}
                            // checked={editedSign === "negative" ? true : false}
                            onClick={() => setEditedSign("negative")}
                        />
                    </InputGroup>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Amount"
                            min={1}
                            value={editedAmount}
                            onChange={e => setEditedAmount(e.target.value)}
                        />
                    </Form.Group>
                    <div className='d-flex justify-content-evenly'>
                        <Button variant="primary" type="submit" onClick={(e) => handleSaving(e)}>
                            Save
                        </Button>
                        <Button variant="danger" type="button" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default EditingComponent