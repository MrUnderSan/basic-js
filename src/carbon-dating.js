const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") {
    return false;
  } else if (+sampleActivity > 0 && +sampleActivity <= MODERN_ACTIVITY) {
    let t = Math.ceil(
      Math.log(MODERN_ACTIVITY / +sampleActivity) /
        (Math.log(2) / HALF_LIFE_PERIOD)
    );
    return t;
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
