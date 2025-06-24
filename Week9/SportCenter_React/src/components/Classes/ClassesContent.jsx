import React from "react";

const ClassesContent = ({ data, activeTabName }) => {
  if (!data) return null;

  return (
    <div className="classes-content">
      <div className="class-info">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <h3>When comes {activeTabName} Your Time.</h3>
        <div className="schedule">
          {data.schedule.map((time, index) => (
            <p key={index}>{time}</p>
          ))}
        </div>
      </div>
      <div className="class-image">
        <img src={data.image} alt={`${activeTabName} Class`} />
      </div>
    </div>
  );
};

export default ClassesContent;
