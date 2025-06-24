import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import ClassesTabs from "./ClassesTabs";
import ClassesContent from "./ClassesContent";

const Classes = () => {
  const [activeTab, setActiveTab] = useState("yoga");

  const classesData = {
    yoga: {
      title: "Why are your Yoga?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus tempore expedita with dolorem hic voluptatem cupiditate eligendi officia molestiae, cumque ullam minus aspernatur pariatur repudiandae consectetur exercitationem. Ab, doloribus.",
      schedule: [
        "Saturday-Sunday: 8:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00pm",
        "Wednesday-Friday: 3:00pm - 6:00pm",
      ],
      image: "/images/yoga.jpg",
    },
    group: {
      title: "Why are your Group?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Group training sessions provide motivation and support from fellow fitness enthusiasts. Working out together creates accountability and makes exercise more enjoyable and sustainable.",
      schedule: [
        "Monday-Wednesday: 6:00pm - 8:00pm",
        "Thursday-Friday: 7:00am - 9:00am",
        "Saturday: 10:00am - 12:00pm",
      ],
      image: "/images/group.webp",
    },
    solo: {
      title: "Why are your Solo?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Personal training allows for customized workout plans tailored to your specific goals and fitness level. Get undivided attention from professional trainers.",
      schedule: [
        "Monday-Friday: 9:00am - 5:00pm",
        "Saturday: 8:00am - 2:00pm",
        "Sunday: 10:00am - 4:00pm",
      ],
      image: "/images/solo.jpg",
    },
    stretching: {
      title: "Why are your Stretching?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Stretching improves flexibility, reduces muscle tension, and helps prevent injuries. It's essential for maintaining healthy muscles and joints.",
      schedule: [
        "Every day: 7:00am - 8:00am",
        "Monday-Friday: 12:00pm - 1:00pm",
        "Saturday-Sunday: 5:00pm - 6:00pm",
      ],
      image: "/images/stret.webp",
    },
  };

  const tabs = ["Yoga", "Group", "Solo", "Stretching"];

  return (
    <section id="classes" className="classes-section">
      <div className="container">
        <SectionHeader
          title="OUR CLASSES"
          description="Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College."
        />
        <ClassesTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <ClassesContent
          data={classesData[activeTab]}
          activeTabName={tabs.find((tab) => tab.toLowerCase() === activeTab)}
        />
      </div>
    </section>
  );
};

export default Classes;
