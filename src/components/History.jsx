import React from 'react'

const History = () => {
    return (
        <div className='history mb-5'>
            <h2 className='fs-5'>History</h2>
            <div className="hr-divider"></div>
            <div className="history-cards">
                <div className="card d-flex justify-content-between flex-row py-2 px-4 shadow-sm bg-danger my-2">
                    <span>Details</span>
                    <span>50.00</span>
                </div>
                <div className="card d-flex justify-content-between flex-row py-2 px-4 shadow-sm bg-success my-2 text-light">
                    <span>Details</span>
                    <span>50.00</span>
                </div>
            </div>
        </div>
    )
}

export default History