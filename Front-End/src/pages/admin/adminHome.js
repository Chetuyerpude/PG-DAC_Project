
import { Link } from 'react-router-dom'
import Header from '../components/header'
import '../Resources/css/style.css'

const AdminHome = () => {
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
                                <Link to="/allproducts">
                                    <p className="text-center h3 fw-bold">Show All Products</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
                <center>
                    <div class="col-lg-8 col-md-20 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                            <div class="text-center p-4">
                                <Link to="/allusers">
                                    <p className="text-center h3 fw-bold">Show All Users</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
                <center>
                    <div class="col-lg-8 col-md-20 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                            <div class="text-center p-4">
                                <Link to="/allorders">
                                    <p className="text-center h3 fw-bold">Show All Orders</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
                <center>
                    <div class="col-lg-8 col-md-20 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                            <div class="text-center p-4">
                                <Link to="/alltransactions">
                                    <p className="text-center h3 fw-bold">Show All Transactions</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}
export default AdminHome