import { SIGN_UP, SIGN_OUT, SIGN_IN,GOOGLE_AUTH } from "./auth.type";
import axios from "axios";

import { clearUser } from "../User/User.action";

export const signIn = (userData) => async (dispatch) => {
    try {
        const user = await axios(
            {
                method: "POST",
                url: `https://zomato-server-heroku-backend.herokuapp.com/api/auth/signin`,
                data: { credentials: userData },
            }

        )
        
        
        localStorage.setItem(
            "zomatoUser",
            JSON.stringify({ token: user.data.token })
        );
        
        window.location.reload();
        
        return dispatch({ type: SIGN_IN, payload: user.data });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}
export const signUp = (userData) => async (dispatch) => {
    try {
        const user = await axios(
            {
                method: "POST",
                url: `https://zomato-server-heroku-backend.herokuapp.com/api/auth/signup`,
                data: { credentials: userData },
            }

        )
        
        localStorage.setItem(
            "zomatoUser",
            JSON.stringify({ token: user.data.token })
            );

            window.location.reload();    
        
        return dispatch({ type: SIGN_UP, payload: user.data });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}
export const signOut = () => async (dispatch) => {
    try {
        localStorage.removeItem("zomatoUser");
        clearUser();
        window.location.href = "https://client-seven-pied.vercel.app/delivery";
        return dispatch({ type: SIGN_OUT, payload: {}});

    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const googleAuth = (token) => async (dispatch) => {
    try {
      localStorage.setItem("zomatoUser", JSON.stringify({ token }));
  
      return dispatch({ type: GOOGLE_AUTH, payload: {} });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };