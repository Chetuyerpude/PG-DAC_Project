import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Register from './pages/common/register'
import Login from './pages/common/login'
import ForgotPassword from './pages/common/forgotPassword'
import EditProfile from './pages/common/editProfile'
import AdminHome from './pages/admin/adminHome'
import AllOrders from './pages/admin/allOrders'
import AllProducts from './pages/admin/allProducts'
import AllTransactions from './pages/admin/allTransactions'
import AllUsers from './pages/admin/allUsers'
import BuyerHome from './pages/buyer/buyerHome'
import AddProductBuyer from './pages/buyer/addProduct'
import ProductBuyer from './pages/buyer/product'
import AvailableProductsBuyer from './pages/buyer/availableproducts'
import OrderExecutedBuyer from './pages/buyer/orderExecuted'
import TransactionsBuyer from './pages/buyer/transaction'
import SellerHome from './pages/seller/sellerHome'
import SellerProduct from "./pages/seller/sellerProduct";
import SellerAddProduct from "./pages/seller/sellerAddproduct";
import SellerReqProducts from "./pages/seller/sellerReqproducts";
import SellerTransaction from "./pages/seller/sellerTransaction";
import SellerOrderExecuted from "./pages/seller/sellerOrderexecuted";
import Header from './pages/components/header'
import Home from './pages/common/home'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/sellerhome' element={<SellerHome />} />
          <Route path='/adminhome' element={<AdminHome />} />
          <Route path='/buyerhome' element={<BuyerHome />} />
          <Route path='/myproducts'  element={<ProductBuyer/>}></Route>
          <Route path='/addproduct' element={<AddProductBuyer/>}></Route>
          <Route path='/availableproducts' element={<AvailableProductsBuyer/>}></Route>
          <Route path='/myorders' element={<OrderExecutedBuyer/>}></Route>
          <Route path='/buyertransactions' element={<TransactionsBuyer/>}></Route>
          <Route path='/allorders' element={<AllOrders/>}></Route>
          <Route path='/allproducts' element={<AllProducts/>}></Route>
          <Route path='/alltransactions' element={<AllTransactions/>}></Route>
          <Route path='/allusers' element={<AllUsers/>}></Route>
          <Route path='/sellermyproduct' element={<SellerProduct/>}></Route>
          <Route path='/selleraddproduct' element={<SellerAddProduct/>}></Route>
          <Route path='/requiredproducts' element={<SellerReqProducts/>}></Route>
          <Route path='/sellerorders' element={<SellerOrderExecuted/>}></Route>
          <Route path='/sellertransaction' element={<SellerTransaction/>}></Route>
        </Routes>
    </div>
    <ToastContainer position='top-center' autoClose={1500} />
  </BrowserRouter>
  );
}

export default App;
