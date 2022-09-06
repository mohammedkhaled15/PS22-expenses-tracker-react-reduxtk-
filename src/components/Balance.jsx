import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports'
import Button from 'react-bootstrap/Button';
import RefinedRecords from './RefinedRecords';
import History from './History';

const Balance = () => {

    const [showRefinedRecords, setShowRefinedRecords] = useState({ switch: false, type: "positive" })

    const balance = useSelector(state => state.records.balance)
    const income = useSelector(state => state.records.income)
    const expense = useSelector(state => state.records.expense)

    const handleRefinedRecords = (type) => {
        setShowRefinedRecords({ switch: true, type })
    }

    return (
        <>
            {
                showRefinedRecords.switch ? <RefinedRecords setShowRefinedRecords={setShowRefinedRecords} showRefinedRecords={showRefinedRecords} /> :
                    < div className='my-4' >
                        <div className="balance mb-3">
                            <h2 className='fs-5 m-0 text-uppercase'>Your Balance</h2>
                            <span className='fs-4'>{`${balance < 0 ? "-$" + Math.abs(balance) : "$" + balance}`}</span>
                        </div>
                        <div className="income bg-light shadow-lg d-flex p-3 rounded-3 gap-1" style={{ cursor: "pointer" }}>
                            <Button onClick={() => handleRefinedRecords("positive")} variant="outline-success" className=" w-50 text-center border-primary  border rounded-2">
                                <h3 className='fs-6 text-uppercase fw-bold' style={{ letterSpacing: "0.1rem" }}>Income</h3>
                                <span className='fs-5  '>{`$${income}`}</span>
                            </Button>
                            <Button onClick={() => handleRefinedRecords("negative")} variant="outline-danger" className=" w-50 text-center border-primary  border rounded-2" style={{ cursor: "pointer" }}>
                                <h3 className='fs-6 text-uppercase fw-bold' style={{ letterSpacing: "0.1rem" }}>Expense</h3>
                                <span className='fs-5 '>{`${expense === 0 ? "$0" : "-$" + Math.abs(expense)}`}</span>
                            </Button>
                        </div>
                        <History />
                    </div >
            }
        </>
    )
}

export default Balance