import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const menuContainerVariants = {
    hidden: { x: "-1vw", opacity: 0.5 },
    visible: { x: 0, opacity: 1 },
    transition: { duration: 0.1 },
    exit: { x: "-100vh", transition: { ease: "easeInOut" } },
};
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};
const backButtonVariants = {
    hover: {
        x: -7,
        transition: {
            yoyo: Infinity,
        },
    },
    tap: {
        scale: 0.9,
    },
};

const Wifi = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div>
      <motion.div variants={menuContainerVariants} exit="exit">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="menu-title">
            <motion.div
              variants={backButtonVariants}
              whileHover="hover"
              whileTap="tap"
              className="back-button"
            >
              <IoIosArrowDropleftCircle color="#6601FF" size="1em" />
            </motion.div>
            <div className="title">Wifi</div>
            <br />
          </div>
        </Link>
        <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
      </motion.div>
    </div>
  );
};

export default Wifi;
