import React from "react";
import StatItem from "./StatItem";

const Stats = () => {
  const statsData = [
    { number: "325", label: "Course" },
    { number: "405", label: "Work Out" },
    { number: "305", label: "Working Hour" },
    { number: "705", label: "Happy Client" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-wrapper">
          {statsData.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
