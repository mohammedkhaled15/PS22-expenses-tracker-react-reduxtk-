import { useSelector } from 'react-redux'

const History = () => {
    const records = useSelector(state => state.records).records

    const lastThreeRecords = (records) => {
        const res = []
        for (let i = records.length - 1; i > records.length - 4; i--) {
            res.unshift(records[i])
        }
        console.log(res)
        return res
    }

    const recordsToMap = records.length > 3 ? lastThreeRecords(records) : records

    return (
        <div className='history mb-5'>
            <h2 className='fs-5'>History</h2>
            <div className="hr-divider"></div>
            <div className="history-cards">
                {
                    records.length ? recordsToMap.map((record, index) => {
                        return (
                            <div className={`card d-flex justify-content-between flex-row py-2 px-4 shadow-sm  my-2 ${record.sign === "positive" ? "bg-success" : "bg-danger"} text-light`} key={index}>
                                <span>{record.desc}</span>
                                <span>{`${Number(record.amount).toFixed(2) < 0 ? "-$" + Math.abs(Number(record.amount).toFixed(2)) : "$" + Math.abs(Number(record.amount).toFixed(2))}`}</span>
                            </div>)
                    }) : <h6 className='text-center'>No transactions to display</h6>

                }
            </div>
        </div >
    )
}

export default History