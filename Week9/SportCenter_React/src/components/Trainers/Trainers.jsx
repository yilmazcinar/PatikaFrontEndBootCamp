import React from "react";
import SectionHeader from "./SectionHeader";
import TrainersGrid from "./TrainersGrid";
import TrainerCard from "./TrainerCard";

const Trainers = () => {
  const trainersData = [
    {
      id: 1,
      name: "Jane Doe",
      specialty: "Cardio Trainer",
      image: "/images/trainer1.jpg",
    },
    {
      id: 2,
      name: "John Smith",
      specialty: "Body Building",
      image: "/images/trainer2.jpg",
    },
    {
      id: 3,
      name: "Sarah Wilson",
      specialty: "Yoga Trainer",
      image: "/images/trainer3.jpg",
    },
  ];

  return (
    <section id="trainer" className="trainers-section">
      <div className="container">
        <SectionHeader
          title="OUR BEST TRAINERS"
          description="Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College."
        />
        <TrainersGrid>
          {trainersData.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </TrainersGrid>
      </div>
    </section>
  );
};

export default Trainers;
