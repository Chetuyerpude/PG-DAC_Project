import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header'
import MyConfig from '../../myconfig'
function SellerAddProduct() {
    const [productName, setProductName] = useState('')
    const [quantity, setquantity] = useState('')
    const [price, setprice] = useState('')
    const [expectedDate, setexpectedDate] = useState('')
    const buyOSell = "sell"
    const product = {
        productName,
        quantity,
        price,
        expectedDate,
        buyOSell
    }
    const Navigate = useNavigate()
    var sendProduct = () => {
        const id = sessionStorage.getItem('LogedUserId')
        axios
            .post(MyConfig+"/seller/addproduct/" + id, product)
            .then((response) => {
                if (response['status'] === 'error') {
                } else {
                    Navigate('/sellermyproduct')
                }
            })
            .catch(err => { console.log(err) })
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
                <p className="text-center h2 fw-bold">Add Product</p>
                <table className='table  table-bordered table-responsive '>
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
                                    Quantity (in Quintals):
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
                                        Add Product
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

export default SellerAddProduct;