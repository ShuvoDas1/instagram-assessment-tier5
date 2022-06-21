import { useEffect, useState } from "react";
import "./App.scss";
import { data } from "./assets/data";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
