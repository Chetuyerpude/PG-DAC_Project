
import { Link } from 'react-router-dom'
import '../css/home.css'
import Header from '../components/header'

const BuyerHome = () => {

    return (
        <div>
            <div className='buttonright'>
                <Header></Header>
            </div>
            <div class="row g-4">
                <center>
                    <div class="col-lg-8 col-md-20 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                            <div class="text-center p-4">
                                <Link to="/editprofile">
                                    <p className="text-center h3 fw-bold">Edit Profile</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
                <center>
                    <div class="col-lg-8 col-md-20 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                            <div class="text-center p-4">
                                <Link to="/addproduct">
                                    <p className="text-center h3 fw-bold">Add Requirement</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
                <center>
                    <div class="col-lg-8 col-md-20 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                            <div class="text-center p-4">
                                <Link to="/availableproducts">
                                    <p className="text-center h3 fw-bold">Available Products</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
                <center>
                    <div class="col-lg-8 col-md-20 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                            <div class="text-center p-4">
                                <Link to="/myorders">
                                    <p className="text-center h3 fw-bold">My Orders</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
                <center>
                    <div class="col-lg-8 col-md-20 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                            <div class="text-center p-4">
                                <Link to="/myproducts">
                                    <p className="text-center h3 fw-bold">My Requirements</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>

    )
}
export default BuyerHome