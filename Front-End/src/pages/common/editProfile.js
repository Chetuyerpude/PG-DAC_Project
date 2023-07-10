import { useEffect, useState } from "react"
import axios from 'axios'
import { toast } from 'react-toastify'
import '../css/common.css'
import Header from'../components/header'
import { useNavigate } from "react-router-dom"
import MyConfig from '../../myconfig'
const EditProfile=()=>{
    const [mobileNumber, setMobileNumber] = useState('')
    const [fullAddress, setFullAddress] = useState('')
    const [village, setVillage] = useState('')
    const [district, setDistrict] = useState('')
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')
    const [bankName, setBankName] = useState('')
    const [accountHolderName, setAccountHolder] = useState('')
    const [branch, setBranchName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [ifscCode, setIfscCode] = useState('')
    const [logedUser,setLogedUser]=useState('')
   
    const Navigate= useNavigate();
    const setData=(user)=>{
            setLogedUser(user);
            setMobileNumber(user.mobileNumber)
            setFullAddress(user.address.fullAddress)
            setVillage(user.address.village)
            setDistrict(user.address.district)
            setState(user.address.state)
            setPincode(user.address.pincode)
            setBankName(user.bankDetails.bankName)
            setAccountHolder(user.bankDetails.accountHolderName)
            setBranchName(user.bankDetails.branch)
            setIfscCode(user.bankDetails.ifscCode)
            setAccountNumber(user.bankDetails.accountNumber)
    }

    useEffect(()=>{
        const userid= sessionStorage.getItem("LogedUserId")
        axios
        .get(MyConfig+"/admin/getuser/"+userid)
        .then((response) => {
           const user = response.data
           if (user['status'] === 'error') {
            toast.error('invalid email or password')
          } else {
            // get the logged in user's info
            setData(user)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },[])

   
const updateUser=()=>{
    const address={
        id:logedUser.address.id,
        fullAddress,
        village,
        district,
        state,
        pincode
      }
      debugger
    const bankDetails={ 
        id:logedUser.bankDetails.id,
        bankName,
        accountHolderName,
       branch,
       accountNumber,
       ifscCode
      }
      const identity={
        id:logedUser.identity.id,
        photoIdNumber:logedUser.identity.photoIdNumber,
        photoIdType:logedUser.identity.photoIdType
      }
      const body = {
        id:logedUser.id,
        title:logedUser.title,
        firstName:logedUser.firstName,
        middleName:logedUser.middleName,
        lastName:logedUser.lastName,
        dob:logedUser.dob,
        role:logedUser.role,
        email:logedUser.email,
        password:logedUser.password,
        gender:logedUser.gender,
        mobileNumber,
        address,
        identity,
        bankDetails
      }
      axios
      .post(MyConfig+"/register", body)
      .then((response) => {
        const result = response.data
        if (result['status'] === 'error') {
          toast.error(result['error'])
        } else {
          toast.success('User Updated successfully')
          Navigate("/signin")
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }
 return(
  <div>
    <div className="buttonright">  <Header></Header>
</div>
          <div className='buttonleft'> 
                    <button className='btn btn-warning'
                  onClick={()=>{Navigate(-1)}}>Back</button>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
 <p className="text-center h1 fw-bold"><u>Update User</u></p>
 <div className="center">
 <p className="text-center h6 fw-bold"><u>Basic details</u></p>
            <div className="innerdiv">
            <div className="inputdiv">
                    <label 
                    className="form-label">
                    <b>Contact Number</b>
                     </label>
                    <input type="number" required="required" value={mobileNumber}
                    name="mobileNumber" placeholder="Enter Your Mobile Number"
                    className="form-control" 
                    onChange={(e) => {
                        setMobileNumber(e.target.value)
                      }}/>
                    </div>
                    <div className="inputdiv">
                        <label 
                        className="form-label">
                        <b>Address</b>
                        </label>
                       <textarea name="fulladdress" cols="25" rows="2" value={fullAddress}
                       className="form-control" placeholder="Enter Street, House No. And Locality"  
                       onChange={(e) => {
                        setFullAddress(e.target.value) }}/>
                  </div>
                  <div className="inputdiv">
                    <label 
                    className="form-label">
                    <b>Village</b>
                     </label>
                    <input type="text" required="required" value={village}
                    name="village" placeholder="Enter Village"
                    className="form-control" 
                    onChange={(e) => {
                        setVillage(e.target.value)
                      }}/>
                </div>
                <div className="inputdiv">
                    <label 
                    className="form-label">
                    <b>District</b>
                     </label>
                    <input type="text" required="required" value={district}
                    name="district" placeholder="Enter District"
                    className="form-control"
                    onChange={(e) => {
                        setDistrict(e.target.value)
                      }} />
                </div>
                <div className="inputdiv">
                    <label 
                    className="form-label">
                    <b>State</b>
                     </label>
                    <input type="text" required="required"  value={state}
                    name="state" placeholder="Enter State"
                    className="form-control"  
                    onChange={(e) => {
                    setState(e.target.value) }}/>
                </div>
                <div className="inputdiv">
                    <label 
                    className="form-label">
                    <b>Pincode</b>
                     </label>
                    <input type="text" required="required" value={pincode}
                    name="pincode" placeholder="Enter Pincode"
                    className="form-control" 
                    onChange={(e) => {
                        setPincode(e.target.value)
                      }}/>
                </div>
            </div>
        </div>
        <br/>
        <p className="text-center h6 fw-bold"><u>Bank details</u></p>
        <div className="center">
            <div className="innerdiv">
                <div className="inputdiv">
                    <label 
                    className="form-label">
                    <b>Bank Name</b>
                    </label>
                    <input type="text" required="required" value={bankName}
                    name="bankname" placeholder="Enter Bank Name"
                    className="form-control"
                    onChange={(e) => {
                        setBankName(e.target.value)}}  />
                </div>
                <div className="inputdiv">
                    <label 
                    className="form-label">
                    <b>Account Holder</b>
                     </label>
                    <input type="text" required="required" value={accountHolderName}
                    name="accountholder" placeholder="Account Holder Name"
                    className="form-control" 
                    onChange={(e) => {
                        setAccountHolder(e.target.value)}} />
                </div>
                <div className="inputdiv">
                        <label 
                        className="form-label">
                        <b>Branch Name</b>
                         </label>
                        <input type="text" required="required" value={branch}
                        name="branchname" placeholder="Enter Branch Name"
                        className="form-control"
                        onChange={(e) => {
                            setBranchName(e.target.value)}}  />
                </div>
            </div>
        </div>
        <div className="center">
            <div className="innerdiv">
                <div className="inputdiv">
                    <label 
                    className="form-label">
                    <b>Account Number</b>
                    </label>
                    <input type="number" required="required" value={accountNumber}
                    name="accountnumber" placeholder="Enter Account Number"
                    className="form-control" 
                    onChange={(e) => {
                        setAccountNumber(e.target.value)}} />
                </div>
                <div className="inputdiv">
                    <label 
                    className="form-label">
                    <b>Ifsc Code</b>
                    </label>
                    <input type="text" required="required" value={ifscCode}
                    name="ifsccode" placeholder="Enter Ifsc Code"
                    className="form-control" 
                    onChange={(e) => {
                        setIfscCode(e.target.value)}} />
                </div>
            </div>
        </div>
        <br/>
        <div className='mb-3'>
        <center><button className="btn btn-success" onClick={updateUser}>
        Update
        </button></center>
    </div>
        </div>
    )
}
export default EditProfile