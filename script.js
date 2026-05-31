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
          borderColor: "blue",
          fill: false
        },
        {
          label: "Food Orders",
          data: orders,
          borderColor: "red",
          fill: false
        }
      ]
    },
    options: {
      responsive: true
    }
  });

});
options: {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Weather vs Food Orders Analysis"
    }
  }
}
