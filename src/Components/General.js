import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";


const menuContainerVariants = {
  hidden: { x: "-1vw", opacity: 0.5 },
  visible: { x: 0, opacity: 1 },
  transition: { duration: 0.1 },
  exit: { x: "-100vh", transition: { ease: "easeInOut" } },
};
const backButtonVariants = {
  hover: {
    x: -7,
    transition: {
      yoyo: Infinity,
    }
  },
  tap:{
    scale: 0.9
  }
};

const General = () => {
  return (
    <div>
      <motion.div variants={menuContainerVariants} exit="exit">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="menu-title">
            <motion.div variants={backButtonVariants} whileHover="hover" whileTap='tap' className="back-button">
              <IoIosArrowDropleftCircle color="#6601FF" size="1em" />
            </motion.div>
            <div className="title">General</div>
            <br />
          </div>
        </Link>
        <ul className="main-menu">
          <li>
            <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
              <div className="menu-icon"></div>
              <div className="menu-item-name">Accounts</div>
            </motion.div>
          </li>
          <li>
            <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
              <div className="menu-icon"></div>
              <div className="menu-item-name">Update</div>
            </motion.div>
          </li>
          <li>
            <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
              <div className="menu-icon"></div>
              <div className="menu-item-name">Network</div>
            </motion.div>
          </li>
          <li>
            <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
              <div className="menu-icon"></div>
              <div className="menu-item-name">Language</div>
            </motion.div>
          </li>
          <li>
            <motion.div whileTap={{ scale: 0.9 }} className="icon-and-name">
              <div className="menu-icon"></div>
              <div className="menu-item-name">Browser</div>
            </motion.div>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default General;
