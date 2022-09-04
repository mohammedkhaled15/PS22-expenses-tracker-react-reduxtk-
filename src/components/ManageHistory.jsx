import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FiEdit } from "react-icons/fi"
import { MdDelete } from "react-icons/md"
import { deleteRec } from "./../components/redux/recordSlice"
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import EditingComponent from './EditingComponent'

const ManageHistory = ({ setShowEdit }) => {

    const records = useSelector(state => state.records)
    const dispatch = useDispatch()

    const [showEditBoard, setShowEditBoard] = useState(false)
    const [recordToBeEdit, setRecordToBeEdit] = useState("")

    const handleClose = () => {
        setShowEdit(false)
    }

    const handleDelete = (e, i) => {
        dispatch(deleteRec(i))
        console.log(records.records)
    }

    const handleEdit = (e, i) => {
        setShowEditBoard(true)
        setRecordToBeEdit(i)
    }

    return (
        <>
            {showEditBoard ? <EditingComponent recordToBeEdit={recordToBeEdit} setShowEditBoard={setShowEditBoard} /> : <div div className='manage-history-modal  w-100 position-absolute h-100 start-50 top-50 translate-middle' style={{ backgroundColor: "rgba(192, 192, 192,0.8)" }}>
                <div className='manage-history position-absolute start-50 top-50 translate-middle rounded-3 p-4 bg-secondary bg-gradient bg-opacity-75 text-center'>
                    <h2 className='fs-5'>History</h2>
                    <div className="hr-divider"></div>
                    <div className="history-cards">
                        {console.log(records)}
                        {
                            records.records.length ? records.records.map((record) => {
                                console.log(records.records)
                                return (
                                    <div className={`card d-flex justify-content-between flex-row py-2 px-4 shadow-sm  my-2 ${record.sign === "positive" ? "bg-success" : "bg-danger"} text-light`} style={{ width: "280px" }} key={record.id}>
                                        <span className='w-25'>{record.desc}</span>
                                        <div className='edit d-flex justify-content-between w-25'>
                                            <FiEdit style={{ cursor: "pointer" }} onClick={(e) => handleEdit(e, record.id)} />
                                            <MdDelete style={{ cursor: "pointer" }} onClick={(e) => handleDelete(e, record.id)} />
                                        </div>
                                        <span style={{ width: "30 %" }}>{`$${record.amount.toFixed(2)}`}</span>
                                    </div>)
                            }) : <h6>No transactions to display</h6>
                        }
                    </div>
                    <Button variant="outline-danger" onClick={handleClose}>Close</Button>
                </div >
            </div>}
        </>
    )
}

export default ManageHistory