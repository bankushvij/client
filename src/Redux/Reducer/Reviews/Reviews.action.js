import axios from "axios";
import { GET_REVIEW } from "./Reviews.type";
// http://localhost:4000/review/62c6d9b29f350fe1abc3c5d2/
export const getReviews = (resId) => async (dispatch) => {
    try {
       
      const reviewList = await axios({
        method: "GET",
        url:`http://localhost:4000/review/62c6d9b29f350fe1abc3c5d2`,
      });
  
      return dispatch({ type: GET_REVIEW, payload: reviewList.data });
    } catch (error) {
      dispatch({ type: "ERROR for get reviews", payload: error.message });
    }
  };
// export const postReviews = (reviewData) => async (dispatch) => {
//     try {
//         await axios({
//             method: "POST",
//             url: `http://localhost:4000/review/new`,
//             data: { reviewData },
//         })

//         return dispatch({ type: POST_REVIEW, payload: reviewData });
//     }
//     catch (error) {
//         return dispatch({
//             type: "ERROR", payload: error
//         })
//     }
// }