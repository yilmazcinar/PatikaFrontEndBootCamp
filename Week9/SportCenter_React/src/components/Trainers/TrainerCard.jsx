import React from "react";

const TrainerCard = ({ trainer }) => {
  return (
    <div className="trainer-card">
      <img src={trainer.image} alt={trainer.name} />
      <div className="trainer-overlay">
        <h4>{trainer.name}</h4>
        <p>{trainer.specialty}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
