// function switchSystemOfUnits() {
//   let elementImperial = document.getElementById("imperial");
//   //   let elementMetric = document.getElementById("metric");

//   //   if (elementImperial.classList.contains("")) {
//   elementImperial.className("hidden");
//   //   }
// }

const imperial = document.querySelector(".imperial");
// const metric = document.querySelector(".metric");
const unitsSwitch = document.querySelector("#unitsSwitch");

unitsSwitch.addEventListener("click", () => {
  imperial.classList.add("hidden");
});
