import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurents/ImageGrid";
import RestaurentInfo from "../components/Restaurents/RestaurentInfo";
import InfoButton from "../components/Restaurents/InfoButton";
import Tabs from "../components/Restaurents/Tabs";

import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

import CartContainer from "../components/Cart/CartContainer";

import { getSpecificRestaurant } from "../Redux/Reducer/Restaurent/Restaurent.action";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getimage } from "../Redux/Reducer/Images/Images.action";
import {getCart} from "../Redux/Reducer/cart/cart.action";

function RestaurentLayout({ children }) {
  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuisine: "",
    address: "",
    restaurantRating: 4.1,
    deliveryRating: 3.2,
  });

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload.restaurant,
      }));
      dispatch(getimage(data.payload.restaurant.photos)).then((data) => {
        
        setRestaurant((prev) => ({
          ...prev,
          images: data.payload.images,
        }));
      });
    });

    dispatch(getCart());
  }, []);

  dispatch(getCart());
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
        <ImageGrid images={restaurant.images} />
        <RestaurentInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliveryRating={restaurant?.deliveryRating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
        />
        <div className="my-4 flex flex-wrap gap-3 mx-auto">
          <InfoButton isActive={true}>
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className="my-10">
          <Tabs />
        </div>
        {children}
      </div>
      <CartContainer />
    </div>
  );
}

export default RestaurentLayout;


