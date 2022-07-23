import React from 'react'
import { Route } from "react-router-dom";

import CheckoutLayout from '../layouts/Checkout.layout';
function CheckoutHoc({component: Component,path, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        path={path}
        component={(props) => (
          <CheckoutLayout>
            <Component {...props} />
          </CheckoutLayout>
        )}
      />
    </>
  )
}

export default CheckoutHoc
