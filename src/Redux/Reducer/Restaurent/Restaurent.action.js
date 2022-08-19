import axios from "axios";
import { GET_RESTAURANT,GET_SPECIFIC_RESTAURANT } from "./Restaurent.type";

export const getRestaurent=()=>async(dispatch)=>
{
    try
    {
        const restaurentList=await axios(
            {
                method:"GET",
                url:"https://zomato-server-heroku-backend.herokuapp.com/api/restaurent/?city=NCR"
            }
        )
        return dispatch({ type: GET_RESTAURANT, payload: restaurentList.data });
    }
    catch(error)
    {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const getSpecificRestaurant = (_id) => async (dispatch) => {
    try {
      const restaurnat = await axios({
        method: "GET",
        url: `https://zomato-server-heroku-backend.herokuapp.com/api/restaurent/${_id}`,
      });
  
      return dispatch({
        type: GET_SPECIFIC_RESTAURANT,
        payload: restaurnat.data,
      });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };