document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("orderChart").getContext("2d");

  const weatherData = [30, 32, 35, 33, 31]; // Temperature
  const ordersData = [120, 150, 180, 160, 140]; // Orders

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Temperature (°C)",
          data: weatherData,
          borderWidth: 2
        },
        {
          label: "Food Orders",
          data: ordersData,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Weather vs Food Orders"
        }
      }
    }
  });
});
