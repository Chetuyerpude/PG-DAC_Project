import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/header'
import '../Resources/css/style.css'
import '../css/common.css'
import MyConfig from '../../myconfig'

function AddProductBuyer() {
    const [productName, setProductName] = useState('')
    const [quantity, setquantity] = useState('')
    const [price, setprice] = useState('')
    const [expectedDate, setexpectedDate] = useState('')
    const buyOSell = "buy"

    const product = {
        productName,
        quantity,
        price,
        expectedDate,
        buyOSell
    }
    const Navigate = useNavigate()

    var sendProduct = () => {
        const id = sessionStorage.getItem("LogedUserId");
        axios
            .post(MyConfig+"/buyer/addproduct/" + id, product)
            .then((respose) => {
                if (respose['status'] === 'error') {
                    toast.error("error occured")
                } else {
                    Navigate('/myproducts')
                }
            }).catch(err => { console.log(err) })
    }
    return (
        <div>
            <div className='buttonright'>
                <Header></Header>
            </div>
            <div className='buttonleft'>
                <button className='btn btn-warning'
                    onClick={() => { Navigate(-1) }}>Back</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='centercontent'>
                <p className="text-center h2 fw-bold">Add Requirement</p>
                <table className='table  table-bordered table-responsive  '>
                    <thead>
                        <tr>
                            <td>
                                <label className="form-label">
                                    Product Name :
                                </label>
                            </td>
                            <td>
                                <input type="text" name='productName'
                                    onChange={(e) => { setProductName(e.target.value) }} />
                            </td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>
                                <label className="form-label">
                                    Price (per Quintal):
                                </label>
                            </td>
                            <td>
                                <input type="number" name='price' value={product.price}
                                    onChange={(e) => { setprice(e.target.value) }}></input>
                            </td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>
                                <label className="form-label">
                                    Quantity (in Quintals) :
                                </label>
                            </td>
                            <td>
                                <input type="number" name='quantity'
                                    onChange={(e) => { setquantity(e.target.value) }}></input>
                            </td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>
                                <label className="form-label">
                                    Expected Delivery Date :
                                </label>
                            </td>
                            <td>
                                <input type="date" name='expectedDate'
                                    onChange={(e) => { setexpectedDate(e.target.value) }}></input>
                            </td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td colSpan='2'>
                                <center>
                                    <button className='btn btn-success' onClick={sendProduct}>
                                        Add  Product
                                    </button>
                                </center>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}

export default AddProductBuyer;