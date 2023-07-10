import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../css/common.css'
import Header from '../components/header'
import  '../Resources/css/style.css'
import MyConfig from '../../myconfig'
const AllProducts = () => {

    const [Products, setProducts] = useState([]);
    useEffect(() => { getAllProducts() }, []);

    const Navigate = useNavigate()
    const getAllProducts = () => {
        axios.get(MyConfig+"/admin/product").then(response => {
            const result = response.data
            if (result['status'] === 'error') {
                toast.error(result['error'])
            }
            else {
                console.log(result)
                setProducts(result)
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
                <p className="text-center h2 fw-bold headertext">All Products</p>
                <br />

                <table className='table table-borderd table-responsive 
            table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <td>Product ID</td>
                            <td>Product Name</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Expected Date</td>
                            <td>Buy/Sell</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products.map((p) => {
                                return (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.productName}</td>
                                        <td>{p.quantity}</td>
                                        <td>{p.price}</td>
                                        <td>{p.expectedDate}</td>
                                        <td>{p.buyOSell}</td>
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

export default AllProducts
