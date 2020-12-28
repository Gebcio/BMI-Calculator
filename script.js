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
