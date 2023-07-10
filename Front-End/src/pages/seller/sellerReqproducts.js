import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from'../components/header'
import MyConfig from '../../myconfig'

function SellerReqProducts() {

 const [plist,setPlist]=useState([])

var [searchText,setsearchText] = useState("");

const Navigate = useNavigate()

useEffect(()=>{
    getProducts()
},[])

const getProducts=()=>{
    axios.get(MyConfig+"/seller/availableproduct")
    .then(response=>{
        const result =response.data
        
        if (result['status'] === 'error') {
            toast.error(result['error'])
          } else {
            console.log(result)
            setPlist(result)
          }
       
    }).catch(err=>{console.log(err)})
}

const sellProduct=(id)=>{
    const sellerId=sessionStorage.getItem('LogedUserId')
    axios.delete(MyConfig+"/seller/afterorderexecution/"+id+"/"+sellerId)
    .then((response)=>{
        const result =response.data         
        if(result['status'] === 'error'){
            toast.error("unable to delete")
        }else{
            toast.success("Order Deleted")
            getProducts()
        }
    }).catch(err=>{console.log(err)})
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
                    onClick={()=>{ Navigate(-1)}}>Back</button>
                </div>
                <div className='innerlappeddiv'>
                     <p className="text-center h3 fw-bold headertext">Search For Required Products</p>
                    <input type='text' value={searchText} placeholder='Search Product Name'
                        onChange={(e)=>{
                                setsearchText(e.target.value)
                    }}/>
                </div>
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
                            plist.map((p)=>{
                                if(p.productName.toLowerCase().includes
                                (searchText.toLowerCase())){
                                return(
                                    <tr key={p.id}>
                                    <td>{p.productName}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.expectedDate}</td>
                                    <td><button className='btn btn-primary' onClick={()=>sellProduct(p.id)} >Sell</button></td>
                                </tr>
                                )
                            }else{return ''}
                        }
                            )
                        }
                    </tbody>
            </table>
        </div>
        </div>
     );
}

export default SellerReqProducts;