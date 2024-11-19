import React from "react";
import Sidebar from "./sidebar";
import Message from "./message";
import RightSidebar from "./RightSidebar";
import Navbar from "../Navbar/Navbar"

function Friend() {
  return (
    <div >
      <div className="fixed top-0 left-0 w-full z-50 ">
        <Navbar />
      </div>
      <div className="flex h-screen overflow-hidden " style={{marginTop:"70px"}} >
        <Sidebar className="flex-shrink-0" />
        <Message className="flex-grow" />
        <RightSidebar className="flex-shrink-0" />
      </div>
    </div>
  );
}

export default Friend;
