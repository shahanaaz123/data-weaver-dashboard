document.addEventListener("DOMContentLoaded", function () {

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const temperature = [30, 35, 40, 38, 36];
  const orders = [120, 150, 200, 180, 160];

  const ctx = document.getElementById("lineChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Temperature (°C)",
          data: temperature,
          borderColor: "#00c6ff",
          backgroundColor: "rgba(0,198,255,0.2)",
          tension: 0.4,
          fill: true,
          pointBackgroundColor: "#fff",
          pointRadius: 5
        },
        {
          label: "Food Orders",
          data: orders,
          borderColor: "#ff6a00",
          backgroundColor: "rgba(255,106,0,0.2)",
          tension: 0.4,
          fill: true,
          pointBackgroundColor: "#fff",
          pointRadius: 5
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "white"
          }
        },
        title: {
          display: true,
          text: "Weather vs Food Orders Analysis",
          color: "white",
          font: {
            size: 18
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "white"
          }
        },
        y: {
          ticks: {
            color: "white"
          }
        }
      }
    }
  });

});
