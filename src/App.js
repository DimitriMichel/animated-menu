import React from "react";
import logo from "./logo.svg";
import Initial from "./Components/Initial";
import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Initial />
      </AnimatePresence>
    </div>
  );
}

export default App;
