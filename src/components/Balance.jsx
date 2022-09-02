import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/exports'

const Balance = () => {

    const records = useSelector(state => state.records)

    const [balance, setBalance] = useState(0)

    useEffect(() => {
        if (records.amount) {
            setBalance(records.reduce((total, record) => total + record.amount))
        }
    }, [records])


    return (
        <div className='my-4'>
            <div className="balance mb-3">
                <h2 className='fs-5 m-0 text-uppercase'>Your Balance</h2>
                <span className='fs-4'>{`$${balance}`}</span>
            </div>
            <div className="inex bg-light shadow-lg d-flex p-3 rounded-3">
                <div className="income w-50 text-center">
                    <h3 className='fs-6 text-uppercase' style={{ letterSpacing: "0.1rem" }}>Income</h3>
                    <span className='fs-5 text-success'>$500.00</span>
                </div>
                <div className='ver-divider'></div>
                <div className="expense w-50 text-center">
                    <h3 className='fs-6 text-uppercase' style={{ letterSpacing: "0.1rem" }}>Expense</h3>
                    <span className='fs-5 text-danger'>$240.00</span>
                </div>
            </div>
        </div>
    )
}

export default Balance