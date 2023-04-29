import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidmap from "./sidmap";
import Dashboort from "./../views/Dashboort";
import Doctors_profile from "./../views/Doctors_profile";
import Doctor_time_table from "./../views/Doctor_time_table";
import Patiant_list from "./../views/Patiant_list";
import Notification from "./../views/Notification";
import Navbare from "./../navbare/Navbare";
import AppointmentList from "./../views/AppointmentList";

const Sidbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);
  return (
    <BrowserRouter>
      <Sidmap isOpen={isOpen} toggle={toggle}>
        <div className="flex w-100">
          <Navbare isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route path="/Dashboort" element={<Dashboort />} />
            <Route path="/Dprofile" element={<Doctors_profile />} />
            <Route path="/Dtable" element={<Doctor_time_table />} />
            <Route path="/Notif" element={<Notification />} />
            <Route path="/Patiion" element={<Patiant_list />} />
            <Route path="/Appointment" element={<AppointmentList />} />
          </Routes>
        </div>
      </Sidmap>
    </BrowserRouter>
  );
};

export default Sidbar;
