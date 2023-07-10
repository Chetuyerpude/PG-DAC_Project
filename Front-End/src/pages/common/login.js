import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import MyConfig from "../../myconfig";
import '../css/common.css'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate();
  const signIn = () => {
    if (email.length === 0) {
      toast.error("Enter Email First")
    } else if (password.length === 0) {
      toast.error("Please Enter Password ")
    } else {
      // debugger
      const body = {
        email,
        password
      }

      axios
        .post(MyConfig+"/login", body)
        .then((response) => {
          const user = response.data
          console.log(user)
          if (user === '') {
            toast.error('invalid email or password')
          } else {
            // get the logged in user's info
            sessionStorage.setItem("LogedUserId", user.id)
            sessionStorage.setItem("UserRole", user.role)
            toast.success('Loged In Successfull')
            if (user.role === "ROLE_SELLER") { Navigate("/sellerhome") }
            else if (user.role === "ROLE_BUYER") { Navigate("/buyerhome") }
            else if (user.role === "ROLE_ADMIN") { Navigate("/adminhome") }
            else { Navigate("/signin") }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div className="smalldiv">
      <br />
      <p className="text-center h1 fw-bold">Login</p>
      <div className="center">
        <div className="siginInput">
          <div className="inputdiv">
            <label
              className="form-label">
              <b>Email</b>
            </label>
            <input type="email" required="required"
              name="email" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }}
              className="form-control" />
          </div>
        </div>
      </div>
      <div className="center">
        <div className="siginInput">
          <div className="inputdiv">
            <label
              className="form-label">
              <b>Password</b>
            </label>
            <input type="password" required="required"
              name="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }}
              className="form-control" />
          </div>
        </div>
      </div>
      <div className="center">
        <div>
          <div className="inputdiv">
            <div className='mb-3'>
            <div className="center">
                <button onClick={signIn} className='btn btn-primary btn-lg submitbutton'>
                  Signin
                </button>
              </div>
              <div className="center">
                Dont have an account? <center><Link to='/signup'>Signup Here</Link></center>
              </div>
              <div className="center">
                <center><Link to="/forgotpassword">Forgot Password?</Link></center>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login