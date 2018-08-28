import * as React from "react";

import Card from "@/components/Card";

import "./Resource.css";

const Resource = () => (
  <div className="border resource">
    <div className="card-flex-row">
      <Card />
      <Card />
    </div>
  </div>
);

export default Resource;
