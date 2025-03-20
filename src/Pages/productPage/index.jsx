import React, { useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import Products from '../../Components/Products'
import { useSelector } from "react-redux";
import { useState } from "react";
const ProductPage = ({openAddProductPanel }) => {
  const sideOpen = useSelector((state) => state.sidebar.isSideBarOpan);

 

  return (
    <>
      <section>
        <div className="contentMain flex px-3">
          <div className={`overflow-hidden 300 contentLeft ${sideOpen ? 'w-[18%]' : 'w-[0]'} transition-all  `}>
            <Sidebar />
          </div>
          <div className={`contentRight  ${sideOpen ? 'w-[82%]' : 'w-[100%]'} transition-all  `}>
            <Products openAddProductPanel={openAddProductPanel } /> 
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;