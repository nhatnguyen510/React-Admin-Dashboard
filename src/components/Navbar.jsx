import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import { Cart, Chat, Notification, UserProfile } from ".";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    screenSize > 900 ? setActiveMenu(true) : setActiveMenu(false);
  }, [screenSize, setActiveMenu]);

  return (
    <>
      <div className="flex justify-between md:mx-6 p-2 relative">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          icon={<AiOutlineMenu />}
          color="blue"
        ></NavButton>
        <div className="flex">
          <NavButton
            title="Cart"
            customFunc={() => handleClick("cart")}
            icon={<FiShoppingCart />}
            color="blue"
          ></NavButton>
          <NavButton
            title="Chat"
            customFunc={() => handleClick("chat")}
            icon={<BsChatLeft />}
            color="blue"
            dotColor="#03C9D7"
          ></NavButton>
          <NavButton
            title="Notification"
            customFunc={() => handleClick("notification")}
            icon={<RiNotification3Line />}
            color="blue"
            dotColor="#03C9D7"
          ></NavButton>
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick("userProfile")}
            >
              <img src={avatar} alt="" className="h-8 w-8 rounded-full" />
              <span className="text-gray-400 text-14">Hi, </span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
