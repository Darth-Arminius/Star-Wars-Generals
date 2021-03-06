import * as React from "react";

import Card from "Components/Card";

import "./Battlefield.css";

const Battlefield = () => (
  <div className="border battlefield">
    <div className="card-flex-row">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default Battlefield;
