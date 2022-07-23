import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";

import { googleAuth } from "../Redux/Reducer/auth/auth.action";


const GoogleAuthPage = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
  
    useEffect(() => {
      if (token) {
        dispatch(googleAuth(token)).then(
          () => (window.location.href = "/delivery")
        );
      }
    }, [token]);
  
    return <>Loading, Please Wait...</>;
  };
  
  export default GoogleAuthPage;