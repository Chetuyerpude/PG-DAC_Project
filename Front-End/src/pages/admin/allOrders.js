import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../css/common.css'
import Header from '../components/header'
import MyConfig from '../../myconfig'

const AllOrders = () => {

    const [Orders, setOrders] = useState([])
    useEffect(() => { getAllOrders() }, [])
    const Navigate = useNavigate()
    const getAllOrders = () => {
        axios
            .get(MyConfig+"/admin/getallorderexecuted")
            .then((response) => {
                const result = response.data
                setOrders(result)
                if (result = ['status'] === 'error') {
                    toast.error(result['error'])
                }
                else {

                    console.log(Orders)
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
                <button className='btn btn-warning'
                    onClick={() => { Navigate("/adminhome") }}>Back</button>
                <p className="text-center h2 fw-bold headertext">All Orders</p>
                <br />
                <table className='table table-borderd table-responsive 
            table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <td>Order ID</td>
                            <td>Product Traded</td>
                            <td>Quantity </td>
                            <td>Amount </td>
                            <td>Expected Date </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Orders.map((o) => {
                                return (
                                    <tr key={o.id}>
                                        <td>{o.id}</td>
                                        <td>{o.productTraded}</td>
                                        <td>{o.quantity}</td>
                                        <td>{o.amount}</td>
                                        <td>{o.expectedDate}</td>
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

export default AllOrders
