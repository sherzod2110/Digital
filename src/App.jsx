import { useState } from "react";
import "./App.css";

import Header from "./companents/Header/Header";
import Hero from "./companents/main/Hero/Hero";
import Section2 from "./companents/main/Section2/Section2";
import Section3 from "./companents/main/Section3/Section3";


function App() {


  return (
    <div>
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      
    </div>
  );
}

export default App;
