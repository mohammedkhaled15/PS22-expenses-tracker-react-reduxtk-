import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {
    const records = useSelector(state => state.records)
    return (
        <div className='history mb-5'>
            <h2 className='fs-5'>History</h2>
            <div className="hr-divider"></div>
            <div className="history-cards">
                {console.log(records)}
                {
                    records.records.length ? records.records.map((record, index) => {
                        console.log(records.records)
                        return (
                            <div className={`card d-flex justify-content-between flex-row py-2 px-4 shadow-sm  my-2 ${record.sign === "positive" ? "bg-success" : "bg-danger"} text-light`} key={index}>
                                <span>{record.desc}</span>
                                <span>{`$${record.amount.toFixed(2)}`}</span>
                            </div>)
                    }) : <h2>No transaction to display</h2>

                }
                {/* <div className="card d-flex justify-content-between flex-row py-2 px-4 shadow-sm bg-success my-2 text-light">
                    <span>Details</span>
                    <span>50.00</span>
                </div> */}
            </div>
        </div >
    )
}

export default History