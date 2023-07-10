import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header'
import MyConfig from '../../myconfig'

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const [role, setRole] = useState('')

    const Navigate = useNavigate()
    useEffect(() => { getAllUsers() }, []);
    const getAllUsers = () => {
        axios
            .get(MyConfig+"/admin/getallusers")
            .then((response) => {
                const result = response.data
                setUsers(result)
                console.log(result)
                if (result['status'] === 'error') {
                    toast.error(result['error'])
                }
                else {
                }
            }).catch(err => { console.log(err) })
    }

    const deleteUser = (id) => {
        debugger
        console.log(id)
        axios
            .delete(MyConfig+"/admin/deleteuser/" + id)
            .then((response) => {
                const result = response.data
                if (result['status'] === 'error') {
                    toast.error("Unable to delete user")
                }
                else {
                    toast.success("User deleted successfully");
                    getAllUsers();
                }
            })
            .catch(err => { console.log(err) })
    }
    const getRole = () => {
        const getrole = document.getElementById("role")
        if (getrole.value === '1') {
            setRole('role_admin')
        } else if (getrole.value === '2') {
            setRole('role_seller')
        } else if (getrole.value === '3') {
            setRole('role_buyer')
        } else {
            setRole('')
        }
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
                            onClick={() => { Navigate("/adminhome") }}>Back</button>
                    </div>
                    <div className='innerlappeddiv'>
                        <select name='selectRole' id='role' onChange={getRole} className="btn btn-info">
                            <option value={0}>Select Role</option>
                            <option value={1}> Admin</option>
                            <option value={2}>Seller</option>
                            <option value={3}>Buyer</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className="text-center h2 fw-bold headertext">All Users</p>
                </div>

                <table className='table table-borderd table-responsive 
            table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <td>User ID</td>
                            <td>Role</td>
                            <td>Title</td>
                            <td>First Name</td>
                            <td>Middle Name</td>
                            <td>Last Name</td>
                            <td>Gender</td>
                            <td>Date of Birth</td>
                            <td>Registration Date</td>
                            <td>Mobile Number</td>
                            <td>District</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((s) => {
                                if (s.role.toLowerCase().includes(role.toLowerCase())) {
                                    return (
                                        <tr key={s.id}>
                                            <td>{s.id}</td>
                                            <td>{s.role}</td>
                                            <td>{s.title}</td>
                                            <td>{s.firstName}</td>
                                            <td>{s.middleName}</td>
                                            <td>{s.lastName}</td>
                                            <td>{s.gender}</td>
                                            <td>{s.dob}</td>
                                            <td>{s.registrationDate}</td>
                                            <td>{s.mobileNumber}</td>
                                            <td>{s.address.district}</td>
                                            <td><button className='btn btn-danger' onClick={() => { deleteUser(s.id) }}>Delete</button></td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllUsers
