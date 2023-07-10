import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/header'
import MyConfig from '../../myconfig'
function SellerTransaction() {
    const [tlist, setTlist] = useState([])
    const location = useLocation()
    const Navigate = useNavigate()

    useEffect(() => {
        const { orderId } = location.state
        getMyTransaction(orderId)
    }, [])

    const getMyTransaction = (id) => {
        console.log(id)
        axios
            .get(MyConfig+"/seller/gettransaction/" + id)
            .then((response) => {
                const result = response.data
                if (result['status'] === 'error') {
                    toast.error(result['error'])
                } else {
                    console.log(tlist)
                    setTlist(result)
                }
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <div className='buttonright'>
                <Header></Header>
            </div>
            <div className='datatable'>
                <div className='overlappeddiv'>
                    <div className='innerlappeddiv'>
                        <button className='btn btn-warning'
                            onClick={() => { Navigate(-1) }}>Back</button>
                    </div>
                </div>
                <div>
                    <p className="text-center h2 fw-bold headertext">Transaction Details</p>
                </div>
                <table className='table table-borderd table-responsive 
            table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <td>Transaction Id</td>
                            <td>Transaction Number</td>
                            <td>Amount</td>
                            <td>Transaction Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{tlist.id}</td>
                            <td>{tlist.trnNumber}</td>
                            <td>{tlist.amount}</td>
                            <td>{tlist.trnDate}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default SellerTransaction;