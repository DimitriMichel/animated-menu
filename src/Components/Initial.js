import React from "react";
import { motion } from "framer-motion";
import { IoIosSettings } from "react-icons/io";
import { IoMdAirplane } from "react-icons/io";
import { IoMdWifi } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { IoIosBody } from "react-icons/io";

const Initial = () => {
  return (
    <motion.div>
      <div className="main-menu-container">
        <div className="menu-title">Settings</div>
        <ul className="main-menu">
          <li>
            <div className="icon-and-name">
              <div className="menu-icon">
                <IoIosSettings />
              </div>
              <div className="menu-item-name">General</div>
            </div>
          </li>
          <li>
            <div className="icon-and-name">
              <div className="menu-icon">
                <IoMdAirplane />
              </div>
              <div className="menu-item-name">Airplane Mode</div>
            </div>
          </li>
          <li>
            <div className="icon-and-name">
              <div className="menu-icon">
                <IoMdWifi />
              </div>
              <div className="menu-item-name">Wifi</div>
            </div>
          </li>
          <li>
            <div className="icon-and-name">
              <div className="menu-icon">
                <IoIosEye />
              </div>
              <div className="menu-item-name">Privacy</div>
            </div>
          </li>
          <li>
            <div className="icon-and-name">
              <div className="menu-icon">
                <IoIosBody />
              </div>
              <div className="menu-item-name">Accessibility</div>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Initial;
