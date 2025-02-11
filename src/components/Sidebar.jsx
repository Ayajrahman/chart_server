import { useState } from "react";

const Sidebar = ({ setActivePage }) => {
  return (
    <div className="w-64 bg-[#ffffff] h-screen text-white p-4">
      <h2 className="flex text-xl text-black   font-bold mb-6">
        <span className="mx-5">
          <img
            className="w-9 h-9 text-lg "
            src="\assets\dummy logo.png"
            alt=""
          />
        </span>
        Seven Code
      </h2>
      <ul className="  ">
        <li
          className="flex items-center gap-2  mt-5 text-lg m p-3 text-black hover:bg-red-600 hover:rounded-full hover:text-white cursor-pointer hover:scale-110 transition-all duration-200 "
          onClick={() => setActivePage("dashboard")}
        >
          {" "}
          <img
            className="w-5 h-5 text-red"
            src="\assets\Graph 1.png"
            alt=""
          />
          <p className="pl-5"> Dashboard</p>
        </li>
        <li
          className="flex  items-center gap-2 p-3 text-black hover:bg-red-600 cursor-pointer mt-5 text-lg m  hover:scale-110 transition-all duration-200 rounded-full hover:text-white"
          onClick={() => setActivePage("userManagement")}
        >
          {" "}
          <img
            className="w-5 h-5"
            src="/assets/ix_user-management.png"
            alt=""
          />
          <p className="pl-5"> User Management</p>
        </li>

        <li
          className=" flex items-center gap-2 p-3 text-black hover:bg-red-600  mt-5 text-lg mcursor-pointer  hover:scale-110 transition-all duration-200 rounded-full hover:text-white"
          onClick={() => setActivePage("userManagement")}
        >
          {" "}
          <img className="w-5 h-5" src="assets/Vector (1).png" alt="" />
          <p className="pl-5"> Excle integration</p>
        </li>
        <li
          className="flex  items-center gap-2 p-3 text-black  hover:bg-red-600 cursor-pointer mt-5 text-lg m  hover:scale-110 transition-all duration-200 rounded-full hover:text-white"
          onClick={() => setActivePage("userManagement")}
        >
          {" "}
          <img
            className="w-5 h-5"
            src="/assets/mdi_message-processing-outline.png"
            alt=""
          />
          <p className="pl-5"> Messages</p>
        </li>
        <li
          className="flex items-center gap-2 p-3 text-black  hover:bg-red-600 cursor-pointer mt-5 text-lg m  hover:scale-110 transition-all duration-200 rounded-full hover:text-white"
          onClick={() => setActivePage("userManagement")}
        >
          {" "}
          <img
            className="w-5 h-5"
            src="/assets/hugeicons_chat-bot.png"
            alt=""
          />
          <p className="pl-5"> ChatBot</p>
        </li>
        <li
          className="flex text-black  items-center gap-2 p-3 hover:bg-red-600 cursor-pointer mt-5 text-lg m  hover:scale-110 transition-all duration-200 rounded-full hover:text-white"
          onClick={() => setActivePage("userManagement")}
        >
          <img
            className="w-5 h-5"
            src="/assets/mdi_cog-outline.png"
            alt=""
          />
          <p className="pl-5">Settings</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
