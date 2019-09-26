import React from "react";

// import Router from "Components/Router";

import "./App.css";
import Card from "./components/Card/Card";
import Cards from "./assets/mockDB/cards.json";

const App = () => {
  const cardProps = Cards;

  return (
    <div className="App">
      {/* <Router /> */}
      {cardProps.map(cardProp => (
        <Card key={cardProp.name} card={cardProp} />
      ))}
    </div>
  );
};

export default App;
