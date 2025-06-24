import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Classes from "./components/Classes/Classes";
import BMI from "./components/BMI/BMI";
import Trainers from "./components/Trainers/Trainers";
import Purchase from "./components/Purchase/Purchase";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Classes />
      <BMI />
      <Trainers />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
