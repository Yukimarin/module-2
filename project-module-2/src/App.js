import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/page/LandingPage/LandingPage";
import Login from "./Components/page/Login/Login";
import Registration from "./Components/page/Registration/Registration";
import ForgotPass from "./Components/page/ForgotPass/ForgotPass";
import AboutUs from "./Components/page/AboutUs/AboutUs";
import Cart from "./Components/page/Cart/Cart";
import CheckOut from "./Components/page/CheckOut/CheckOut";
import PaymentSuccess from "./Components/page/PaymentSuccess/PaymentSuccess";
import Shop1 from "./Components/page/Shop/Shop1";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/shop1" element={<Shop1 />} />
      </Routes>
    </div>
  );
}

export default App;
