import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import '../css/common.css'
import MyConfig from '../../myconfig'
const ForgotPassword=()=>{

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [confirmOtp,setConfirmOtp]=useState('')
  const [myOtp,setMyOtp]=useState('')
  const Navigate=useNavigate()
  useEffect(()=>{
   getOtp()
  },[])

   const getOtp=()=>{
    axios
    .get(MyConfig+"/user/getotp")
    .then((response) => {
      const result=response.data
       setMyOtp(result)
       console.log(response.data)
      if (result['status'] === 'error') {
        toast.error(result['error'])
      } else {
        toast.info('please enter the otp which you can see in console')
        // console.log(response.data)
        console.log(myOtp)
      }
    })
    .catch((error) => {
      console.log(error)
    })
   }
    const changePassword=()=>{
      debugger
        if(email.length===0){
            toast.error("Must Enter Email")
        } else if(password.length===0){
            toast.error("Must Enter Email")
        }else if(password!==confirmPassword){
            toast.error("Password Mismached")
        }else if(!confirmOtp.includes(myOtp)){
          toast.error('Invalid OTP')
        }else{
           const body={
            email,
            password
           }
            axios
            .post(MyConfig+"/user/forgotpassword",body)
            .then((response) => {
              const result = response.data
              if (result['status'] === 'error') {
                toast.error(result['error'])
              } else {
                toast.success('Password Updated successfully')
                console.log(response.data)
              console.log(result)
                Navigate("/signin")
              }
            })
            .catch((error) => {
              console.log(error)
            })
        }
    }

 return   (
    <div>
                 <div className="text-center">
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="center">
                  <div className="innerdiv">
                    <div className="inputdiv">
                          <input  name="email" placeholder="Enter Email address" 
                          className="form-control"  type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="inputdiv">
                          <input  name="password" placeholder="Enter New Password" 
                          className="form-control"  type="password"  onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className="inputdiv">
                          <input  name="confirmpassword" placeholder="Confirm New Password"
                           className="form-control"  type="password"  onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                     </div> 
                     <div className="inputdiv">
                          <input  name="otp" placeholder="Enter OTP"
                           className="form-control"  type="text"  onChange={(e)=>{setConfirmOtp(e.target.value)}}/>
                     </div> 
                     <div className="inputdiv">      
                        <input  className="btn btn-primary btn-lg submitbutton" 
                        value="Reset Password" type="submit" onClick={changePassword}/>
                      </div>
                  </div>
            </div>
            </div>
 </div>
 )
}
export default ForgotPassword