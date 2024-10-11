const schedule = require("node-schedule");
const axios = require("axios");

const Timer = () => {
  schedule.scheduleJob("*/5 * * * *", () => {
    axios
      .get("https://auth-api-gmxb.onrender.com")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = { Timer };
