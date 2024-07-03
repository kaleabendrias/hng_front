document.addEventListener("DOMContentLoaded", () => {
  const updateTime = () => {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.querySelector(
      '[data-testid="currentTimeUTC"]'
    ).textContent = `Current Time in UTC: ${utcTime}`;
  };

  const updateDay = () => {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[now.getUTCDay()];
    document.querySelector(
      '[data-testid="currentDay"]'
    ).textContent = `Current Day: ${currentDay}`;
  };

  const updateSlackProfilePicture = () => {
    const imgElement = document.querySelector(
      '[data-testid="slackProfilePicture"]'
    );
    imgElement.src = "./images/photo_2024-07-03_10-44-05.jpg";
    imgElement.alt = "Slack Profile Picture";
  };

  const updateSlackDetails = () => {
    document.querySelector('[data-testid="slackDisplayName"]').textContent =
      "Kaleab Endrias";
    document.querySelector('[data-testid="slackEmail"]').textContent =
      "kaleabendrias1212@gmail.com";
  };

  updateTime();
  updateDay();
  updateSlackProfilePicture();
  updateSlackDetails();

  setInterval(updateTime, 1000);
});
