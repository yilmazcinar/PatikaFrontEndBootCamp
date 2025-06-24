import React from "react";

const ClassesTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="classes-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${
            activeTab === tab.toLowerCase() ? "active" : ""
          }`}
          onClick={() => onTabChange(tab.toLowerCase())}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ClassesTabs;
