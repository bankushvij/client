import React from "react";
import {  Route } from "react-router-dom";

import HomeLayout from "../layouts/HomePage.layout";

function HomeLayoutHoc({ component: Component,path ,...rest }) {
  return (
    <>
     
        <Route
          {...rest}
          path={path}
          component={(props) => (
            <HomeLayout {...props}>
              <Component {...props}/>
            </HomeLayout>
          )}
        />
      
    </>
  );
}

export default HomeLayoutHoc;
