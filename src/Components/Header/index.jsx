import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { toggleSidebar } from "../../Redux/Reducers/IsSidebarToggle";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AiOutlineMenuFold } from "react-icons/ai";

const Header = () => {
  const sideOpen = useSelector((state) => state.sidebar.isSideBarOpan);

  const dispatch = useDispatch();
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const expendSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    dispatch(toggleSidebar(!isSidebarOpen));
  };

  return (
    <header className={`sticky top-0  z-[100] w-auto py-2   bg-white shadow-md flex items-center justify-between  transition-all  ${sideOpen  ? 'pl-[18%]' : 'pl-[0%]'}
`}>
      <div className="pl-3">
        <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-md " onClick={expendSidebar}>
        {sideOpen ? (
    <AiOutlineMenuFold className="text-[22px] text-gray-800" />
  ) : (
    <AiOutlineMenuUnfold className="text-[22px] text-gray-800" />
  )}
        
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div
          className="w-[40px] h-[40px]  rounded-full overflow-hidden cursor-pointer border-2 border-gray-300"
          onClick={handleProfileMenuOpen}
        >
          <img
            src="https://st3.depositphotos.com/1006753/13799/i/450/depositphotos_137996152-stock-photo-natural-face-portrait-of-a.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <Menu
          anchorEl={profileMenuAnchor}
          open={Boolean(profileMenuAnchor)}
          onClose={handleProfileMenuClose}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem onClick={handleProfileMenuClose}>
            <FaRegCircleUser className="mr-2" /> Profile
          </MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>
            <IoSettingsOutline className="mr-2" /> Settings
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;