import Logo from "../images/Logo.png"
import '../css/common.css'
import'../css/home.css'
import { useNavigate } from "react-router-dom"
function Header() {

    const Navigate=useNavigate()
    const signOut=()=>{
        sessionStorage.removeItem('LogedInuser')
        Navigate('/signin')
    }
   
    return ( 
        <div className="submitbutton">
                            <button className="btn btn-danger" onClick={signOut}>
                                LogOut
                            </button>
        </div>
     );
}

export default Header;