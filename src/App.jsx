import React from "react";

// import Router from "Components/Router";

import "./App.css";
import Card from "./components/Card/Card";

const App = () => {
  const cardProp = {
    ability: "This is some ability box text",
    cardType: { designation: "Imperial Soldier", species: "Human" },
    cost: { type: "Supply", amount: "1" },
    defence: { light: "1", heavy: "1" },
    offence: { light: "1", heavy: "0" },
    name: "Stormtrooper",
    imagePath:
      "https://ixxidesign.azureedge.net/media/1045221/03-Stormtrooper.jpg?width=562"
  };

  return (
    <div className="App">
      {/* <Router /> */}
      <Card card={cardProp} />
    </div>
  );
};

export default App;
