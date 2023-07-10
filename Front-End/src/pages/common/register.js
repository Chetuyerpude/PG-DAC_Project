import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import '../css/common.css'
import { useNavigate } from 'react-router-dom'
import MyConfig from '../../myconfig'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [fullAddress, setFullAddress] = useState('')
    const [village, setVillage] = useState('')
    const [district, setDistrict] = useState('')
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')
    const [photoIdNumber, setPhotoIdNumber] = useState('')
    const [bankName, setBankName] = useState('')
    const [accountHolderName, setAccountHolder] = useState('')
    const [branch, setBranchName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [ifscCode, setIfscCode] = useState('')

    const Navigate = useNavigate()
    var title = "";
    var role = "";
    var photoIdType = "";
    var gender = "";
    const postUser = () => {
        debugger
        var getTitle = document.getElementById("title");
        var getRole = document.getElementById("role");
        var getPhotoId = document.getElementById("photoid");
        var getGender = document.getElementById("gender")
        var selectedTitle = getTitle.selectedIndex;
        var selectedRole = getRole.selectedIndex;
        var selectedPhotoId = getPhotoId.selectedIndex;
        var selectedGender = getGender.selectedIndex;
        if (firstName.length === 0) {
            toast.error('Enter User details')
        } else if (password !== confirmPassword) {
            toast.error('Password must match')
        } else if (bankName.length === 0) {
            toast.error('Enter bank details')
        } else if (fullAddress.length === 0) {
            toast.error('Enter address details')
        } else if (photoIdNumber.length === 0) {
            toast.error('Enter Photo Identity details')
        } else if (selectedTitle === 0) {
            toast.error('Please select proper Title')
        } else if (selectedRole === 0) {
            toast.error('Please select suitable Role')
        } else if (selectedPhotoId === 0) {
            toast.error('Please select PhotoId Type')
        } else if (selectedGender === 0) {
            toast.error('Please select Gender')
        } else {
            if (selectedTitle === 1) {
                debugger;
                title = "Mr";
            }
            else if (selectedTitle === 2) {
                title = "Mrs";
            }
            if (selectedRole === 1) {
                debugger;
                role = "ROLE_SELLER";
            }
            else if (selectedRole === 2) {
                role = "ROLE_BUYER";
            }
            if (selectedPhotoId === 1) {
                photoIdType = "Adhaar Card";
            }
            else if (selectedPhotoId === 2) {
                debugger
                photoIdType = "Voter Id";
            }
            else if (selectedPhotoId === 3) {
                photoIdType = "Driving Liscense";
            }
            else if (selectedPhotoId === 4) {
                photoIdType = "Pan Card";
            }
            if (selectedGender === 1) {
                gender = "Male";
            } else if (selectedGender === 2) {
                debugger;
                gender = "Female";
            } else if (selectedGender === 3) {
                gender = "Other";
            }
           
            const address = {
                fullAddress,
                village,
                district,
                state,
                pincode
            }
            const identity = {
                photoIdNumber,
                photoIdType
            }
            const bankDetails = {
                bankName,
                accountHolderName,
                branch,
                accountNumber,
                ifscCode
            }
            const body = {
                title,
                firstName,
                middleName,
                lastName,
                dob,
                role,
                email,
                password,
                gender,
                mobileNumber,
                address,
                identity,
                bankDetails
            }
            debugger;
            console.log(body)
            axios
                .post(MyConfig+"/register", body)
                .then((response) => {
                    const result = response.data
                    if (result['status'] === 'error') {
                        toast.error('User Registration failed')
                    } else {
                        toast.success('User Registered Successfully')
                        Navigate('/signin')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    return (
        <div>
            <p className="text-center h1 fw-bold"><u><u>Registration Form</u></u></p>
            <br />
            <br />
            <p className="text-center h6 fw-bold"><u>User Info</u></p>        <br />

            <div className="center">
                <div className="innerdiv">
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>Title</b>
                        </label>
                        <select id='title' className="form-control" required="required">
                            <option value="0">Select title</option>
                            <option value="1">Mr.</option>
                            <option value="2">Mrs.</option>
                        </select>
                    </div>
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>First Name</b>
                        </label>
                        <input type="text" required="required"
                            name="firstName" placeholder="Enter First Name"
                            className="form-control"
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }} />
                    </div>
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>Middle Name</b>
                        </label>
                        <input type="text" required="required"
                            name="middleName" placeholder="Enter Middle Name"
                            className="form-control"
                            onChange={(e) => {
                                setMiddleName(e.target.value)
                            }} />
                    </div>
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>Last Name</b>
                        </label>
                        <input type="text" required="required"
                            name="lastName" placeholder="Enter Last Name"
                            className="form-control"
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }} />
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="innerdiv">
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>Gender</b>
                        </label>
                        <select id='gender' className="form-control" required="required" >
                            <option value="0">Select Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                    <div className="inputdiv">
                        <label
                            className="form-label">
                            <b>Dob</b>
                        </label>
                        <input type="date"
                            name='dob'
                            className="form-control"
                            onChange={(e) => {
                                setDob(e.target.value)
                            }} />
                    </div>
                    <div className="innerdiv">
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Role of user</b>
                            </label>
                            <select name="role" id='role' className="form-control" required="required" >
                                <option value="selectrole">Select Role</option>
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Email</b>
                            </label>
                            <input type="email" required="required"
                                name="email" placeholder="Enter Your Email"
                                className="form-control"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="innerdiv">
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Password</b>
                            </label>
                            <input type="password" required="required"
                                name="password" placeholder="Enter Your password"
                                className="form-control"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Confirm Password</b>
                            </label>
                            <input type="password" required="required"
                                name="confirmPassword" placeholder="Confirm Your password"
                                className="form-control"
                                onChange={(e) => {
                                    setConfrimPassword(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Contact Number</b>
                            </label>
                            <input type="number" required="required"
                                name="mobileNumber" placeholder="Enter Your Mobile Number"
                                className="form-control"
                                onChange={(e) => {
                                    setMobileNumber(e.target.value)
                                }} />
                        </div>
                    </div>
                </div>        <br />


                <p className="text-center h6 fw-bold"><u>Address Info</u></p>        <br />

                <div className="center">
                    <div className="innerdiv">
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Address</b>
                            </label>
                            <textarea name="fulladdress" cols="25" rows="2"
                                className="form-control" placeholder="Enter Street, House No. And Locality"
                                onChange={(e) => {
                                    setFullAddress(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Village</b>
                            </label>
                            <input type="text" required="required"
                                name="village" placeholder="Enter Village"
                                className="form-control"
                                onChange={(e) => {
                                    setVillage(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>District</b>
                            </label>
                            <input type="text" required="required"
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
                            <input type="text" required="required"
                                name="state" placeholder="Enter State"
                                className="form-control"
                                onChange={(e) => {
                                    setState(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Pincode</b>
                            </label>
                            <input type="number" required="required"
                                name="pincode" placeholder="Enter Pincode"
                                className="form-control"
                                onChange={(e) => {
                                    setPincode(e.target.value)
                                }} />
                        </div>
                    </div>
                </div>        <br />

                <p className="text-center h6 fw-bold"><u>Unique Identity details</u></p>        <br />

                <div className="center">
                    <div className="innerdiv">
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Photo Id Type</b>
                            </label>
                            <select id='photoid' className="form-control" required="required">
                                <option value="selectphotoid">Select PhotoId</option>
                                <option value="aadharcard">Aadhar Card</option>
                                <option value="voterid">Voter Id</option>
                                <option value="drivingliscense">Driving Lisecnse</option>
                                <option value="pancard">Pan Card</option>
                            </select>
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Photo Id Number</b>
                            </label>
                            <input type="number" required="required"
                                name="photoidnumber" placeholder="Enter Photo Id Number"
                                className="form-control"
                                onChange={(e) => {
                                    setPhotoIdNumber(e.target.value)
                                }} />
                        </div>
                    </div>
                </div>        <br />

                <p className="text-center h6 fw-bold"><u>Bank details</u></p>        <br />

                <div className="center">
                    <div className="innerdiv">
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Bank Name</b>
                            </label>
                            <input type="text" required="required"
                                name="bankname" placeholder="Enter Bank Name"
                                className="form-control"
                                onChange={(e) => {
                                    setBankName(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Account Holder</b>
                            </label>
                            <input type="text" required="required"
                                name="accountholder" placeholder="Account Holder Name"
                                className="form-control"
                                onChange={(e) => {
                                    setAccountHolder(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>Branch Name</b>
                            </label>
                            <input type="text" required="required"
                                name="branchname" placeholder="Enter Branch Name"
                                className="form-control"
                                onChange={(e) => {
                                    setBranchName(e.target.value)
                                }} />
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
                            <input type="number" required="required"
                                name="accountnumber" placeholder="Enter Account Number"
                                className="form-control"
                                onChange={(e) => {
                                    setAccountNumber(e.target.value)
                                }} />
                        </div>
                        <div className="inputdiv">
                            <label
                                className="form-label">
                                <b>IFSC</b>
                            </label>
                            <input type="text" required="required"
                                name="ifsccode" placeholder="Enter IFSC"
                                className="form-control"
                                onChange={(e) => {
                                    setIfscCode(e.target.value)
                                }} />
                        </div>
                    </div>
                </div>
                <br /> 

                <div className='mb-3'>
                    <button className="btn btn-danger btn-lg submitbutton" onClick={()=>{Navigate(-1)}} >
                      Back
                    </button>
                    <button className="btn btn-primary btn-lg submitbutton" onClick={postUser}>
                        Sign Up
                    </button>
                    <button className="btn btn-info btn-lg submitbutton" onClick={()=>{Navigate('/signin')}}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Register
