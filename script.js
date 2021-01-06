"use strict";

const calculateBtn = document.getElementById("calculateButton");

function switchChildAdult() {
  const adult = document.querySelector(".ageAdultBox");
  const child = document.querySelector(".ageChildBox");
  const tabButtonAdult = document.querySelector(".tabButtonAdult");
  const tabButtonChild = document.querySelector(".tabButtonChild");

  adult.classList.toggle("hidden");
  child.classList.toggle("hidden");
  tabButtonAdult.classList.toggle("active");
  tabButtonChild.classList.toggle("active");
  calculateBtn.classList.toggle("child");
}

function switchSystemOfUnits() {
  const imperial = document.querySelector(".imperial");
  const metric = document.querySelector(".metric");

  imperial.classList.toggle("hidden");
  metric.classList.toggle("hidden");
  calculateBtn.classList.toggle("metric");
}

function analyzeBMI(valueOfBMI) {
  if (valueOfBMI < 18.4) {
    alert(`Your BMI is: ${valueOfBMI}. This is too low`);
  } else if (valueOfBMI > 18.5 && valueOfBMI < 24.9) {
    alert(`Your BMI is: ${valueOfBMI}. This is correct weight`);
  } else if (valueOfBMI > 25.0 && valueOfBMI < 29.9) {
    alert(`Your BMI is: ${valueOfBMI}. This is too much`);
  } else if (valueOfBMI > 30.0 && valueOfBMI < 34.9) {
    alert(`Your BMI is: ${valueOfBMI}. This is way too much. Stage I`);
  } else if (valueOfBMI > 35.0 && valueOfBMI < 39.9) {
    alert(`Your BMI is: ${valueOfBMI}. This is way way too much. Stage II`);
  } else {
    alert(`Your BMI is: ${valueOfBMI}. This is insane`);
  }
}

function calculateBMI() {
  if (!calculateBtn.classList.contains("metric")) {
    const heightFeet = Number(document.getElementById("heightFt").value);
    const heightInches = Number(document.getElementById("heightInch").value);
    const weightStone = Number(document.getElementById("weightSt").value);
    const weightPound = Number(document.getElementById("weightLbs").value);

    const heightInInches = heightFeet * 12 + heightInches;
    const weightInLbs = weightStone * 14 + weightPound;

    const imperialBMI =
      Math.round(703 * (weightInLbs / (heightInInches * heightInInches)) * 10) /
      10;

    analyzeBMI(imperialBMI);
  } else {
    const heightCentimeters = Number(document.getElementById("heightCm").value);
    const weightKg = Number(document.getElementById("weightKg").value);
    const heightMeters = heightCentimeters / 100;

    const metricBMI =
      Math.round((weightKg / (heightMeters * heightMeters)) * 10) / 10;

    analyzeBMI(metricBMI);
  }
}
