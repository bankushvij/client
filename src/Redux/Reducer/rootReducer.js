import { combineReducers } from "redux";
import restaurentReducer from "./Restaurent/Restaurent.reducer";
import image from "./Images/Image.reducer"
import review from "./Reviews/Reviews.reducer"
import FoodReducer from "./food/Food.reducer";
import authReducer from "./auth/auth.reducer";
import userReducer from "./User/User.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer=combineReducers(
    {
        restaurentReducer,
        image,
        review,
        FoodReducer,
        authReducer,
        userReducer,
        cartReducer,
    }
)

export default rootReducer;