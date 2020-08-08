import React from "react";
import { motion } from "framer-motion";
import { IoIosSettings } from "react-icons/io";
import { IoMdAirplane } from "react-icons/io";
import { IoMdWifi } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { IoIosBody } from "react-icons/io";
import { Link } from "react-router-dom";

//animation variants
const menuContainerVariants = {
  hidden: { x: "-1vw", opacity: 0.5 },
  visible: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
  exit: { x: "-100vh", transition: { ease: "easeInOut" } },
};

const Initial = () => {
  return (
    <motion.div variants={menuContainerVariants} exit="exit">
      <div>
        <div className="menu-title">Settings</div>
        <ul className="main-menu">
          <Link
            to="/general"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li>
              <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
                <div className="menu-icon">
                  <IoIosSettings />
                </div>
                <div className="menu-item-name">General</div>
              </motion.div>
            </li>
          </Link>
          <Link
            to="bluetooth"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li>
              <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
                <div className="menu-icon">
                  <IoMdAirplane />
                </div>
                <div className="menu-item-name">Bluetooth</div>
              </motion.div>
            </li>
          </Link>
          <Link to="wifi" style={{ textDecoration: "none", color: "black" }}>
            <li>
              <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
                <div className="menu-icon">
                  <IoMdWifi />
                </div>
                <div className="menu-item-name">Wifi</div>
              </motion.div>
            </li>
          </Link>
          <li>
            <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
              <div className="menu-icon">
                <IoIosEye />
              </div>
              <div className="menu-item-name">Privacy</div>
            </motion.div>
          </li>
          <li>
            <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
              <div className="menu-icon">
                <IoIosBody />
              </div>
              <div className="menu-item-name">Accessibility</div>
            </motion.div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Initial;
