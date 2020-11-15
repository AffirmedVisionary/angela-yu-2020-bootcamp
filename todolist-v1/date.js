//jshint esversion:6

// Created to neaten up app.js, turned it into a function and retturned what was needed which is the date in the required format.

exports.getDate = function () {
const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};

return today.toLocaleDateString("en-uk", options);

}

// only returns which day of the week it is e.g Monday
exports.getDay = function () {
const today = new Date();

const options = {
  weekday: "long",
};

return today.toLocaleDateString("en-uk", options);

}
