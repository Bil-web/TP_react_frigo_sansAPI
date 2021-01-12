import React from "react";
import Frigo from "./components/Frigo";
import "./styles.css";

export default function App() {
  const prenom = "Jean-Marie";
  return (
    <div className="App">
      <h3>
        Bonjour {prenom},<br /> bienvenue dans ton frigo !
      </h3>
      <Frigo></Frigo>
    </div>
  );
}
