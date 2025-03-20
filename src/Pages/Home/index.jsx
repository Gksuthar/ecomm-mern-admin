import React, { useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import Dashboard from "../Deshboard/index"; // Corrected typo here
import { useSelector } from "react-redux";
import { useState } from "react";
const Home = ({openAddProductPanel}) => {
  const sideOpen = useSelector((state) => state.sidebar.isSideBarOpan);

 

  return (
    <>
      <section>
        <div className="contentMain flex px-3">
          <div className={`overflow-hidden 300 contentLeft ${sideOpen ? 'w-[18%]' : 'w-[0]'} transition-all  `}>
            <Sidebar openAddProductPanel={openAddProductPanel} />
          </div>
          <div className={`contentRight  ${sideOpen ? 'w-[82%]' : 'w-[100%]'} transition-all  `}>
            <Dashboard openAddProductPanel={openAddProductPanel} /> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;