import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from'../components/header'
import MyConfig from '../../myconfig'
function SellerOrderExecuted() {
    const [olist,setOlist]=useState([])
    useEffect(()=>{
        getMyOrders()
    },[])

    const Navigate=useNavigate();

    const getMyOrders=()=>{
        const id=sessionStorage.getItem('LogedUserId');
        axios.get(MyConfig+"/seller/getmyorders/"+id)
        .then(response=>{
            const result =response.data
            if(result['status'] === 'error'){
                toast.error(result['error'])
            }
            else{
                console.log(result)
                setOlist(result)
            }
        }).catch(err=>{console.log(err)})
    }
  const getTrn = (id) => {
    Navigate('/sellertransaction', { state: { orderId: id } })
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
                  onClick={()=>{Navigate(-1)}}>Back</button>
                 </div>
            </div>
                <div>
                     <p className="text-center h2 fw-bold headertext">My Orders</p>
                </div>
            <table className='table table-borderd table-responsive 
            table-dark table-striped table-hover'>
                <thead>
                    <tr> 
                        <td>Product Traded </td>
                        <td>Quantity</td>
                        <td>Amount</td>
                        <td>Order Date</td>
                        <td>Expected Date</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        olist.map((o)=>{
                            return(
                                <tr key={o.id}>
                                <td>{o.productTraded}</td>
                                <td>{o.quantity}</td>
                                <td>{o.amount}</td>
                                <td>{o.orderDate}</td>
                                <td>{o.expectedDate}</td>
                                <td><button className='btn btn-primary' onClick={() => getTrn(o.id)} >Transaction Details</button></td>
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

export default SellerOrderExecuted;