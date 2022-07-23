import React,{useEffect} from "react";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeLayoutHoc from "./HOC/Homepage.Hoc";
import Homepage from "./pages/Homepage";
import RestaurentHoc from "./HOC/Restaurent.Hoc.jsx";

import { Redirect, Route } from "react-router-dom";
import OverView from "./components/Restaurents/OverView.jsx";
import OrderOnline from "./components/Restaurents/OrderOnline";


import RedirectRestaurant from "./pages/Restaurent/Redirect";
import Menu from "./components/Restaurents/Menu/Menu";
import Photo from "./components/Restaurents/Photos/Photo";
// import Reviews from "./components/Restaurents/Reviews/Reviews";

import googleAuthPage from "./pages/googleAuthPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutHoc from "./HOC/Checkout.Hoc";


import {useDispatch} from "react-redux";
import { getMySelf } from "./Redux/Reducer/User/User.action";
function App() {

  const dispatch=useDispatch();

  useEffect(()=>
  {
    dispatch(getMySelf());
  },[localStorage]);


  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      
      <HomeLayoutHoc path="/:type" exact component={Homepage} />
      <Route path="/restaurant/:id" exact component={RedirectRestaurant} />
      <HomeLayoutHoc path="/google/:token" exact component={googleAuthPage}/>
      <RestaurentHoc
        path="/restaurant/:id/overview"
        exact
        component={OverView}
      />
      <RestaurentHoc
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurentHoc
        path="/restaurant/:id/reviews"
        exact
        component={Homepage}
      />
      <RestaurentHoc
        path="/restaurant/:id/menu"
        exact
        component={Menu}
      />
      <RestaurentHoc
        path="/restaurant/:id/photos"
        exact
        component={Photo}
      />
      <CheckoutHoc 
        path="/checkout/orders" exact component={CheckoutPage}
      />
    </div>
  );
}

export default App;
