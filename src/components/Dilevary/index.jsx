import React, { useState,useEffect } from "react";
import DilevaryCarousel from "./DilevaryCarousel.jsx";
import {useSelector} from "react-redux";
import RestaurentCard from "../RestaurentCard.jsx";
function Dilevary() {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState=useSelector((store)=>store.restaurentReducer.restaurants)

  useEffect(()=>
  {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants);
  },[reduxState.restaurants])
  return (
    <>
      <DilevaryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in NCR(Delhi)
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {restaurantList.map((restaurant) => (
          <RestaurentCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
}

export default Dilevary;
