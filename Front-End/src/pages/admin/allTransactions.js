import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../css/common.css'
import Header from '../components/header'
import MyConfig from '../../myconfig'

const AllTransactions = () => {

    const [Transcactions, setTransactions] = useState([]);
    useEffect(() => { getAllTransactions() }, []);
    const Navigate = useNavigate()

    const getAllTransactions = () => {
        axios.get(MyConfig+"/admin/getalltransactions").then(respone => {
            const result = respone.data
            if (result['status'] === 'error') {
                toast.error(result['error'])
            }
            else {
                setTransactions(result)
            }
        }).catch(err => { console.log(err) })
    }

    return (
        <div>
            <div className='buttonright'>
                <Header></Header>
            </div>
            <div className='datatable'>
                <button className='btn btn-warning'
                    onClick={() => { Navigate("/adminhome") }}>Back</button>
                <p className="text-center h2 fw-bold headertext">All Transcactions</p>
                <br />
                <table className='table table-borderd table-responsive 
            table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <td>Transaction ID</td>
                            <td>Transaction Number</td>
                            <td>Transaction Amount</td>
                            <td>Transaction Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Transcactions.map((t) => {
                                return (
                                    <tr key={t.id}>
                                        <td>{t.id}</td>
                                        <td>{t.trnNumber}</td>
                                        <td>{t.amount}</td>
                                        <td>{t.trnDate}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllTransactions


