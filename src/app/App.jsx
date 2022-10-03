import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../component/header/Header";
import Routing from "../routing/Routing";
import "../assets/css/style.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </div>
  );
};

export default App;
