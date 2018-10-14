import * as React from "react";

import Card from "@/components/card";

import "./OpponentBattlefield.css";

const OpponentBattlefield = () => (
  <div className="border battlefield">
    <div className="card-flex-row-reversed">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default OpponentBattlefield;
