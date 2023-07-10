import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/header'
import MyConfig from '../../myconfig'
const ProductsBuyer = () => {
    const [listings, setListings] = useState([])
    const Navigate = useNavigate()
    useEffect(() => {
        getMyProducts()
    }, [])

    const getMyProducts = () => {
        const id = sessionStorage.getItem("LogedUserId");
        axios.get(MyConfig+"/buyer/myproduct/" + id)
            .then(response => {
                const result = response.data
                // setListings(response.data)
                if (result['status'] === 'error') {
                    toast.error(result['error'])
                } else {
                    console.log(result)
                    setListings(result)
                }

            }).catch(err => { console.log(err) })
    }

    const deleteProduct = (id) => {

        axios.delete(MyConfig+"/buyer/deleteproduct/" + id)
            .then((response) => {
                const result = response.data
                if (result['status'] === 'error') {
                    toast.error("unable to delete")
                    //getMyProducts()
                } else {
                    toast.success("product deleted")
                    getMyProducts()
                }
            }).catch(err => { console.log(err) })
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
                <br />
                <div>
                    <p className="text-center h2 fw-bold headertext">My Requirements</p>
                </div>
                <table className='table table-borderd table-responsive 
            table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <td>Product Name</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Expected Date</td>
                            <td></td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            listings.map((p) => {
                                return (
                                    <tr key={p.id}>
                                        <td>{p.productName}</td>
                                        <td>{p.price}</td>
                                        <td>{p.quantity}</td>
                                        <td>{p.expectedDate}</td>
                                        <td><button className='btn btn-danger' onClick={() => deleteProduct(p.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductsBuyer;