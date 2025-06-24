import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const StatItem = ({ number, label }) => {
  return (
    <div className="stat-item">
      <h3>
        <AnimatedCounter target={number} />
      </h3>
      <p>{label}</p>
    </div>
  );
};

export default StatItem;
