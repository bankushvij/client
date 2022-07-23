import axios from "axios";
import { GET_IMAGES } from "./Images.type";

export const getimage=(_id)=>async (dispatch)=>
{
    try
    {
            const ImageList=await axios(
                {
                    method:"GET",
                    url:`http://localhost:4000/image/${_id}`,
                }
            )
            return dispatch({type:GET_IMAGES,payload:ImageList.data});
    }
    catch(error)
    {
        return dispatch({ type: "ERROR", payload: error });
    }
}