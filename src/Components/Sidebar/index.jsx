import React, { useState } from "react";
import { Link } from "react-router-dom";
import Deshboard from "../../Pages/Deshboard";
import { Button } from "@mui/material";
import { RxDashboard } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Collapse } from "react-collapse";
import { useSelector } from "react-redux";
import { addProduct } from "../../Redux/Reducers/addProductPanleToggle";
import { useDispatch } from "react-redux";
const Sidebar = ({openAddProductPanel}) => {
  const dispatch = useDispatch()
  const [subMenu, setSubMenu] = useState(null);
  const isOpenSubMenu = (indx) => {
    if (subMenu === indx) {
      setSubMenu(null);
    } else {
      setSubMenu(indx);
    }
  };
  const handleToggle = () => {
      dispatch(addProduct(true));
    };
  const isSidebarOpen = useSelector((state) => state.sidebar.isSideBarOpan);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };
  

  return (
    <div className={`z-[200] sidebar fixed top-0 left-0 bg-[#f1f1f1] ${isSidebarOpen===true ? 'w-[18%]':'w-[0%] opacity-0'}  h-full border-r border-[rgba(0,0,0,0.2)] px-2 py-2 transition-all`}>
      <div className="px-2 py-2 w-full">
        <Link>
          <img
            src="https://t4.ftcdn.net/jpg/02/27/45/09/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg"
            className="w-[200px] px-4 "
            alt="Logo"
            srcset=""
          />
        </Link>
      </div>

      <ul className={`mt-4  `}>
      <li>
          <Link to='/'>
            <Button className="w-full !text-black hover:!bg-[#fff] capitalize !justify-start !flex !gap-5 text-[14px]  !mb-2 text-[rgba(0,0,0,0.8 )] !font-[500] items-center">
              <RxDashboard
                onClick={() => isOpenSubMenu(0)}
                className="text-[18px] "
              />
              <span>Deshboard</span>
            </Button>
          </Link>
        </li>
        <li>
        <Link to='/user'>

          <Button className="w-full !text-black hover:!bg-[#fff] capitalize !justify-start flex gap-5 text-[14px] !mb-2  text-[rgba(0,0,0,0.8 )] !font-[500] items-center">
            <IoHomeOutline className="text-[18px] " />
            <span>Home Slices</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              {subMenu === 1 ? (
                <IoIosArrowUp onClick={() => isOpenSubMenu(1)} />
              ) : (
                <IoIosArrowDown onClick={() => isOpenSubMenu(1)} />
              )}
            </span>
          </Button>
          </Link>

          <Collapse isOpened={subMenu === 1}>
            <ul className="w-full">
              <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  ADD HOME BANNER SLIDE
                </Button>
              </li>
              <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  ADD HOME BANNER SLIDE
                </Button>
              </li>
              <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  ADD HOME BANNER SLIDE
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Button className="w-full !text-black hover:!bg-[#fff] capitalize !justify-start flex gap-5 text-[14px]  !mb-2 text-[rgba(0,0,0,0.8 )] !font-[500] items-center">
            <FaUserGraduate
              onClick={() => isOpenSubMenu(2)}
              className="text-[18px] "
            />
            <span>Users</span>
          </Button>
        </li>

        <li>
          <Button className="w-full !text-black hover:!bg-[#fff] capitalize !justify-start flex gap-5 text-[14px] !mb-2  text-[rgba(0,0,0,0.8 )] !font-[500] items-center">
            <MdProductionQuantityLimits className="text-[18px] " />
            <span>Products </span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              {subMenu === 2 ? (
                <IoIosArrowUp onClick={() => isOpenSubMenu(2)} />
              ) : (
                <IoIosArrowDown onClick={() => isOpenSubMenu(2)} />
              )}
            </span>
          </Button>
          <Collapse isOpened={subMenu === 2}>
            <ul className="w-full">
              <li className="w-full">
                <Link to={`/products`}>
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  Products
                </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link>
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full" onClick={openAddProductPanel}>
                  Products Upload
                </Button>
                </Link>
              </li>
              <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  ADD HOME BANNER SLIDE
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Button className="w-full !text-black hover:!bg-[#fff] capitalize !justify-start flex gap-5 text-[14px] !mb-2  text-[rgba(0,0,0,0.8 )] !font-[500] items-center">
            <MdOutlineCategory className="text-[18px] " />
            <span>Category </span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              {subMenu === 4 ? (
                <IoIosArrowUp onClick={() => isOpenSubMenu(4)} />
              ) : (
                <IoIosArrowDown onClick={() => isOpenSubMenu(4)} />
              )}
            </span>
          </Button>
          <Collapse isOpened={subMenu === 4}>
            <ul className="w-full">
              <li className="w-full py-1">
                <Link to={`/Categories`}>
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  Cetogories
                </Button>
                </Link>
              </li>
              <li className="w-full py-1">
                <Link to={`/addCategory`}>
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  add Category
                </Button>
                </Link>
              </li>
              <li className="w-full py-1">
                <Link to={`/subCategory`}>
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  Sub Category List
                </Button>
                </Link>
              </li>
              <li className="w-full py-1">
                <Link to={`/addSubCategory`}>
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  Add Sub Category 
                </Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to={`/orders`}>
          <Button className="w-full !text-black hover:!bg-[#fff] capitalize !justify-start flex gap-5 text-[14px] text-[rgba(0,0,0,0.8 )] !font-[500] items-center">
            <FiShoppingCart
              onClick={() => isOpenSubMenu(5)}
              className="text-[18px] "
              />
            <span>Orders</span>
          </Button>
              </Link>
        </li>
        <li>
          <Button className="w-full !text-black hover:!bg-[#fff] capitalize !justify-start flex gap-5 text-[14px] !mb-2  text-[rgba(0,0,0,0.8 )] !font-[500] items-center">
            <IoIosLogOut
              onClick={() => isOpenSubMenu(6)}
              className="text-[18px] "
            />
            <span>Logout</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
