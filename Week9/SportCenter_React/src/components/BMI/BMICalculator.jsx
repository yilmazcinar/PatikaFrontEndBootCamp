import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const updateBMIIndicator = (bmi) => {
    // Remove existing indicator if any
    const existingIndicator = document.querySelector(".bmi-indicator");
    if (existingIndicator) {
      existingIndicator.remove();
    }

    // Remove any existing border from BMI chart image
    const bmiChart = document.querySelector(".bmi-chart");
    const bmiImage = bmiChart.querySelector("img");
    if (bmiImage) {
      bmiImage.style.border = "none";
      bmiImage.style.boxShadow = "none";
    }

    // Create BMI indicator arrow below the image
    const indicator = document.createElement("div");
    indicator.className = "bmi-indicator";

    // Calculate position based on BMI value
    let position = 0;
    let category = "";
    let color = "";

    if (bmi < 18.5) {
      // Underweight: first section (0-18.5) -> position around 15%
      position = 15;
      category = "Underweight";
      color = "#3498db";
    } else if (bmi >= 18.5 && bmi < 25) {
      // Normal: second section (18.5-25) -> position around 40%
      position = 40;
      category = "Normal";
      color = "#2ecc71";
    } else if (bmi >= 25 && bmi < 30) {
      // Overweight: third section (25-30) -> position around 60%
      position = 60;
      category = "Overweight";
      color = "#f39c12";
    } else if (bmi >= 30 && bmi < 35) {
      // Obese Class I: fourth section (30-35) -> position around 80%
      position = 80;
      category = "Obese Class I";
      color = "#e67e22";
    } else {
      // Obese Class II+: fifth section (35+) -> position around 95%
      position = 95;
      category = "Obese Class II+";
      color = "#e74c3c";
    }

    indicator.innerHTML = `
      <div style="position: absolute; bottom: -60px; left: ${position}%; transform: translateX(-50%); z-index: 10;">
        <div style="width: 0; height: 0; border-left: 15px solid transparent; border-right: 15px solid transparent; border-bottom: 25px solid ${color}; margin-bottom: 5px;"></div>
        <div style="background-color: ${color}; color: white; padding: 10px 15px; border-radius: 8px; text-align: center; font-size: 14px; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.3); white-space: nowrap;">
          BMI: ${bmi.toFixed(1)} - ${category}
        </div>
      </div>
    `;

    bmiChart.appendChild(indicator);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (heightNum && weightNum && heightNum > 0 && weightNum > 0) {
      // Convert height from cm to meters
      const heightInMeters = heightNum / 100;
      const bmi = weightNum / (heightInMeters * heightInMeters);

      let category = "";
      let color = "";

      if (bmi < 18.5) {
        category = "Underweight";
        color = "#3498db";
      } else if (bmi < 25) {
        category = "Normal";
        color = "#2ecc71";
      } else if (bmi < 30) {
        category = "Overweight";
        color = "#f39c12";
      } else {
        category = "Obese";
        color = "#e74c3c";
      }

      setResult({ bmi: bmi.toFixed(1), category, color });

      // Update BMI indicator
      setTimeout(() => updateBMIIndicator(bmi), 100);
    } else {
      alert("Lütfen geçerli boy ve kilo değerleri girin!");
    }
  };

  return (
    <>
      <form className="bmi-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="number"
            placeholder="Your Height (cm)"
            className="form-input"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Your Weight (kg)"
            className="form-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Calculate
        </button>
      </form>

      {result && (
        <div className="bmi-result">
          <div
            style={{
              backgroundColor: result.color,
              color: "white",
              padding: "15px",
              borderRadius: "8px",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <h4>Your BMI: {result.bmi}</h4>
            <p>Category: {result.category}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BMICalculator;
