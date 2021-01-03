tabButtonActiveSwitch = () => {
  const tabButtonAdult = document.querySelector(".tabButtonAdult");
  const tabButtonChild = document.querySelector(".tabButtonChild");

  tabButtonAdult.classList.toggle("active");
  tabButtonChild.classList.toggle("active");
};

function switchSystemOfUnits() {
  const imperial = document.querySelector(".imperial");
  const metric = document.querySelector(".metric");

  imperial.classList.toggle("hidden");
  metric.classList.toggle("hidden");
}

function childAdultSwitch() {
  const adult = document.querySelector(".ageAdultBox");
  const child = document.querySelector(".ageChildBox");

  adult.classList.toggle("hidden");
  child.classList.toggle("hidden");
}

function calculateMetric() {
  const heightCentimeters = document.getElementById("heightCm").value;
  const weight = document.getElementById("weightKg").value;
  const heightMeters = heightCentimeters / 100;

  const metricBMI =
    Math.round((weight / (heightMeters * heightMeters)) * 10) / 10;

  analyzeBMI(metricBMI);
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
