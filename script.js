const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const temperature = [30, 35, 40, 38, 36];
const orders = [120, 150, 200, 180, 160];

// Line Chart
new Chart(document.getElementById("lineChart"), {
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
  }
});

// Bar Chart
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Food Orders",
        data: orders,
      }
    ]
  }
});
