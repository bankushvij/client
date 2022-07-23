import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import Dilevary from "../components/Dilevary/index.jsx";
import Dining from "../components/Dining/index.jsx";
import NightLife from "../components/NightLife/index.jsx";
import Nutrition from "../components/Nutrition/index.jsx";



import { useDispatch } from "react-redux";
import { getRestaurent } from "../Redux/Reducer/Restaurent/Restaurent.action.js";
function Homepage() {


  const { type } = useParams();
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getRestaurent());
  }, []);
  console.log(type);
  return (
    <>
      <div className="my-5">
      {type === "delivery" && <Dilevary/>}
      {type === "dining" && <Dining/>}
      {type === "night" && <NightLife/>}
      {type === "nutri" && <Nutrition/>}
      </div>
    </>
  );
}

export default Homepage;
