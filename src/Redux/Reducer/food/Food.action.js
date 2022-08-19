import axios from "axios";
import { GET_FOOD_LIST, GET_FOOD } from "./Food.type";
export const getFood = (foodId) => async (dispatch) => {
    try {
        const Food = await axios({
            method: "GET",
            url: `https://zomato-server-heroku-backend.herokuapp.com/api/food/${foodId}`,
        });
        return dispatch({ type: GET_FOOD, payload: Food.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};
export const getFoodList = (menuId) => async (dispatch) => {
    try {
        const menu = await axios(
            {
                method: "GET",
                url: `https://zomato-server-heroku-backend.herokuapp.com/api/menu/list/${menuId}`,
            }
        )
        return dispatch({ type: GET_FOOD_LIST, payload: menu.data })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}