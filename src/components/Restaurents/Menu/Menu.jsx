import React,{useState,useEffect} from 'react'

import MenuCollection from '../MenuCollections';

import {useDispatch, useSelector} from "react-redux";
import { getimage } from '../../../Redux/Reducer/Images/Images.action';

function Menu() {
    const [menus,setMenus]=useState([]);

    const dispatch=useDispatch();
    const reduxState=useSelector((globalState)=>globalState.restaurentReducer.selectedRestaurant.restaurant);


    useEffect(()=>
    {
      if(reduxState)
      {
        dispatch(getimage(reduxState?.menuImages)).then((data)=>
        {
          const images=[];
          data.payload.images.map(({location})=>images.push(location))
          setMenus(images)
        })
      }
    },[reduxState])
    return (
    <>
      <div className="flex flex-wrap gap-3">
      <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
    </div>
    </>
  )
}

export default Menu
