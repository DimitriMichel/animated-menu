import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Initial from "./Components/Initial";
import General from "./Components/General";
import { AnimatePresence, motion } from "framer-motion";

const menuContainerVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
  transition: { duration: 0.3 },
};
const mainMenuVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0 },
};
function App() {
  let location = useLocation();

  return (
    <motion.div
      variants={menuContainerVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
      className="main-menu-container"
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div>
          <Switch location={location} key={location.key}>
            <Route path="/general">
              <General />
            </Route>
            <Route path="/">
              <Initial />
            </Route>
          </Switch>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
