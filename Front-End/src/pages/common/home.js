import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.1s">
                            <div className='link'>
                                {/* <Link to='/about'> About Us</Link> 
                            <Link to='/contact'> Contact Us</Link>  */}
                                <div>
                                    {/* <butaton type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"></butaton>
                                    <a href="" class="btn btn-secondary py-2 px-4 ms-3" onClick={() => { navigate('/signup') }}>Register</a>
                                    <butaton type="button" class="btn text-secondary ms-5" data-bs-toggle="modal" data-bs-target="#searchModal"></butaton>
                                    <a href="" class="btn btn-primary py-2 px-4 ms-3" onClick={() => {}}>Login</a> */}
                                    <button style={{marginLeft:'225px'}} className='btn btn-success' onClick={()=> navigate('/signin') }>Login</button>
                                    <button style={{marginLeft:'45px'}} className='btn btn-danger' onClick={()=> navigate('/signup') }>Register</button>
                                </div>
                            </div>
                            <div className="section-title position-relative mb-4 pb-4">
                                <br />
                                <h1 className="mb-2">Welcome to APTP</h1>
                            </div>
                            <p className="mb-4">Welcome to India's only platform, that provides best price for your agricultural products.
                                We are here to provide best price for your agricultural products.
                                Register yourself as 'Seller' or 'Buyer' and get connected to various genuine buyers or selles across the
                                country.</p>
                            <p className="mb-4">No Middlemen!!!</p>
                            <p className="mb-4">No Commission!!!</p>
                            <p className="mb-4">Also, do check current APMC data to verify the price the actual price..</p>
                            <p className="mb-4">Click on the 'Weather' tab to prepare yourself for your future farming practises...</p>
                            <div className="row g-3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
