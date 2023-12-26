import './App.css'
import ItemConsuming from './Components/ItemConsuming';
import SignUp from './Components/AuthenticationPages/SignUp';
import Login from './Components/AuthenticationPages/Login';
import Items from './Pages/Items';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './Layout/Home.layout';
import AuthLayout from './Layout/Auth.layout';
import HomePage from './Pages/HomePage';
import DeliveryCategory from './Pages/DeliveryCategory';
import ItemsDescription from './Pages/ItemsDescription';
import ItemsDescriptionLayout from './Layout/ItemsDescription.layout';
import AddToCart from './Pages/AddToCart';
import PrivateRoute from './Components/Context/PrivateRoute';
import PaymentPage from './Pages/PaymentPage';
import Checkout from './Pages/Checkout';
import { useAuth } from './Components/Context/AuthContext';
import DeleteAccount from './Pages/DeleteAccount';
import Modal from './Components/Navbar/Modal';

//const {user} = useAuth();

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signup" exact element={<AuthLayout> <SignUp /> </AuthLayout>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/items" exact element={<Items />} />
        <Route path="/myProfile" exact element={<Modal />} />
        <Route path='/delivery/cart' exact element={<PrivateRoute />}>
          <Route path='' exact element={<HomeLayout><AddToCart /></HomeLayout>} />
          <Route path="checkout" exact element={<HomeLayout><Checkout /></HomeLayout>} />
        </Route>
        <Route path='/cart' exact element={<PrivateRoute />} >
          <Route path='payment' exact element={<HomeLayout><PaymentPage /></HomeLayout>} />
        </Route>
        <Route path ='/delete' exact element={<PrivateRoute />}>
          <Route path ='account' exact element={<HomeLayout><DeleteAccount /></HomeLayout>} />
        </Route>
        {/* <Route path='/delivery/cart' exact element={<PrivateRoute><HomeLayout><AddToCart /></HomeLayout></PrivateRoute>} /> */}
        <Route path="/:type" exact element={<HomeLayout><ItemConsuming /></HomeLayout>} />
        <Route path="/:type/food" exact element={<HomeLayout><DeliveryCategory /></HomeLayout>} />
        <Route path="/:type/food/:title" exact element={<ItemsDescriptionLayout><ItemsDescription /></ItemsDescriptionLayout>} />
      </Routes>
    </div>
  )
}
export default App;
