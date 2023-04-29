import React, { useState } from "react";
import "../../App.css";

import { MdOutlineNotifications } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { BsPieChart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineClipboardList } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Sidmap = ({ children, isOpen, toggle }) => {
  const menueItem = [
    { path: "/Dashboort", name: "Dashboort", icon: <BsPieChart /> },
    { path: "/Dprofile", name: "Doctors Profile", icon: <CgProfile /> },
    {
      path: "/Patiion",
      name: "Patiant List",
      icon: <HiOutlineClipboardList />,
    },
    { path: "/Dtable", name: "DoctorTimeTable", icon: <BiNotepad /> },
    {
      path: "/Appointment",
      name: "DoctorTimeTable",
      icon: <CiUser />,
    },
    { path: "/Notif", name: "Notification", icon: <MdOutlineNotifications /> },
  ];

  return (
    <>
      <div className="containe">
        <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
          <div onClick={toggle} className="top_section">
            <h1
              style={{ display: isOpen ? "block" : "none" }}
              className="logo "
            >
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars />
            </div>
          </div>

          {menueItem.map((i) => (
            <NavLink
              style={{ textDecoration: "none" }}
              to={i.path}
              key={i.name}
              className="link  "
            >
              <div className="icon">{i.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {i.name}
              </div>
            </NavLink>
          ))}
        </div>
        {children}
      </div>
    </>
  );
};

export default Sidmap;
