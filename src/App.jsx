
import componentImage from "./assets/Components.png"
import {CORE_CONCEPTS} from "./data.js"
import { EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import Coreconcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import Coreconcepts from "./components/Coreconcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {

  
  
  return (
    <div>
      <Header/>
      <main>
        <Coreconcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
