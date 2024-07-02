document.addEventListener("DOMContentLoaded", function () {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  function updateTime() {
    const now = new Date();
    currentTimeElement.textContent = `Current Time (UTC): ${
      now.toUTCString().split(" ")[4]
    }`;
    currentDayElement.textContent = `Current Day: ${now.toLocaleString(
      "en-US",
      { weekday: "long" }
    )}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
