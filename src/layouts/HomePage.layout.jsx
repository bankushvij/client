import React from "react";
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";
const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-41g:px-20">{children}</div>
      
    </div>
  );
};

export default HomeLayout;
