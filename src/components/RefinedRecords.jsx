import { useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';

const RefinedRecords = ({ showRefinedRecords, setShowRefinedRecords }) => {

    const records = useSelector(state => state.records).records

    const handleClose = () => {
        setShowRefinedRecords({ ...showRefinedRecords, switch: false })
    }

    const refinedRecordsToMap = (type, records) => {
        return records.filter(record => record.sign === type)
    }

    return (

        <div onClick={handleClose} className='refined-records-modal  w-100 position-absolute h-100 start-50 top-50 translate-middle' style={{ backgroundColor: "rgba(192, 192, 192,0.8)" }}>
            <div onClick={e => e.stopPropagation()} className='refined-records position-absolute start-50 top-50 translate-middle rounded-3 p-4 bg-secondary bg-gradient bg-opacity-75 text-center w-75'>
                <h2 className='fs-5'>{showRefinedRecords.type === "positive" ? "Income" : "Expenses"}</h2>
                <div className="hr-divider"></div>
                <div className="refined-records-cards d-flex flex-column w-100 my-4">
                    {
                        refinedRecordsToMap(showRefinedRecords.type, records).length ? refinedRecordsToMap(showRefinedRecords.type, records).map((record) => {
                            console.log(refinedRecordsToMap(showRefinedRecords.type, records))
                            return (
                                <div className={`card d-flex justify-content-between flex-row py-2 px-4 shadow-sm  my-2 ${record.sign === "positive" ? "bg-success" : "bg-danger"} text-light w-100`} key={record.id}>
                                    <span style={{ width: "max-content" }}>{record.desc}</span>

                                    <span style={{ width: "30 %" }}>{`$${record.amount.toFixed(2)}`}</span>
                                </div>)
                        }) : <h6>{`No ${showRefinedRecords.type === "positive" ? "Income" : "Expenses"} Records to display`}</h6>
                    }
                </div>
                <Button variant="outline-danger" onClick={handleClose}>Close</Button>
            </div >
        </div>
    )
}

export default RefinedRecords