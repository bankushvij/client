import React from "react";
import { Route } from "react-router-dom";
import RestaurentLayout from "../layouts/Restaurent.layout";
function RestaurentHoc({ component: Component, path, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        path={path}
        component={(props) => (
          <RestaurentLayout {...props}>
            <Component {...props} />
          </RestaurentLayout>
        )}
      />
    </>
  );
}

export default RestaurentHoc;
