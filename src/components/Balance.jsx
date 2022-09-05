import React from 'react'
import { useSelector } from 'react-redux/es/exports'

const Balance = () => {

    const balance = useSelector(state => state.records.balance)
    const income = useSelector(state => state.records.income)
    const expense = useSelector(state => state.records.expense)

    return (
        <div className='my-4'>
            <div className="balance mb-3">
                <h2 className='fs-5 m-0 text-uppercase'>Your Balance</h2>
                <span className='fs-4'>{`${balance < 0 ? "-$" + Math.abs(balance) : "$" + balance}`}</span>
            </div>
            <div className="inex bg-light shadow-lg d-flex p-3 rounded-3">
                <div className="income w-50 text-center">
                    <h3 className='fs-6 text-uppercase fw-bold' style={{ letterSpacing: "0.1rem" }}>Income</h3>
                    <span className='fs-5 text-success '>{`$${income}`}</span>
                </div>
                <div className='ver-divider'></div>
                <div className="expense w-50 text-center">
                    <h3 className='fs-6 text-uppercase fw-bold' style={{ letterSpacing: "0.1rem" }}>Expense</h3>
                    <span className='fs-5 text-danger'>{`${expense === 0 ? "0" : "-$" + Math.abs(expense)}`}</span>
                </div>
            </div>
        </div>
    )
}

export default Balance