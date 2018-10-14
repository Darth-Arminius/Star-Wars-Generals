import * as React from "react";

import Card from "@/components/card";

import "./OpponentResource.css";

const OpponentResource = () => (
  <div className="border resource">
    <div className="card-flex-row-reversed">
      <Card />
      <Card />
    </div>
  </div>
);

export default OpponentResource;
