import React from "react";
import { data } from "../data";
import Card from "./Card";
import "../page.module.css";
const CardContainer = () => {
  return (
    <main className="main">
      {data.map((entries, idx) => (
        <Card key={idx} {...entries} />
      ))}
    </main>
  );
};

export default CardContainer;
