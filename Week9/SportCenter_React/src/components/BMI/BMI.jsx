import React from "react";
import BMICalculator from "./BMICalculator";
import BMIChart from "./BMIChart";
import BMIDescription from "./BMIDescription";

const BMI = () => {
  return (
    <section className="bmi-section">
      <div className="container">
        <div className="bmi-wrapper">
          <div className="bmi-calculator">
            <BMIDescription />
            <BMICalculator />
          </div>
          <BMIChart />
        </div>
      </div>
    </section>
  );
};

export default BMI;
