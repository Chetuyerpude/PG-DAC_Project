import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from'../components/header'
import  '../Resources/css/style.css'
import '../css/common.css'
import MyConfig from '../../myconfig'
function AvailableProducts() {

const [plist,setPlist]=useState([])
var [searchText,setsearchText] = useState("");
useEffect(()=>{
    getProducts()
},[])
const Navigate=useNavigate()
var  Search=(args)=>{
    setsearchText(args.target.value);
}

const getProducts=()=>{
    axios.get(MyConfig+"/buyer/availableproduct")
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

const buyProduct=(id)=>{
    const buyerId=sessionStorage.getItem('LogedUserId')
    axios.delete(MyConfig+"/buyer/afterorderexecution/"+id+"/"+buyerId)
    .then((response)=>{
        const result =response.data         
        if(result['status'] === 'error'){
            toast.error("unable to buy")
        }else{
            toast.success("Order Confirmed")
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
             onClick={()=>{Navigate(-1)}}>Back</button>
            </div>
            <br/>
            <br/>
           <div className='innerlappeddiv'>
           <p className="text-center h3 fw-bold headertext">Search For Available Products</p>
           <div>
                <input type='text' value={searchText} placeholder='Search Product Name' onChange={Search}/>
            </div>
           </div>
       </div>
       <br/>
       <br/>
       <table className='table table-borderd table-responsive table-dark table-striped table-hover'>
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
                                <td><button className='btn btn-primary' onClick={()=>buyProduct(p.id)} >Buy</button></td>
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

export default AvailableProducts;