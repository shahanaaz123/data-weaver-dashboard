document.addEventListener("DOMContentLoaded", function () {

  const apiKey = "ac6be3a022e13acb366eca3e6e898b5f";
  const city = "Chennai";

  async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    const labels = [];
    const temperature = [];
    const orders = [];

    // take first 5 data points
    for (let i = 0; i < 5; i++) {
      const item = data.list[i];

      labels.push(item.dt_txt.split(" ")[0]);
      temperature.push(item.main.temp);

      // fake order logic based on temp
      orders.push(Math.floor(item.main.temp * 5 + Math.random() * 50));
    }

    createChart(labels, temperature, orders);
  }

  function createChart(labels, temperature, orders) {
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
            fill: true
          },
          {
            label: "Food Orders",
            data: orders,
            borderColor: "#ff6a00",
            backgroundColor: "rgba(255,106,0,0.2)",
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Live Weather vs Food Orders",
            color: "white"
          },
          legend: {
            labels: {
              color: "white"
            }
          }
        },
        scales: {
          x: { ticks: { color: "white" } },
          y: { ticks: { color: "white" } }
        }
      }
    });
  }

  fetchWeather();

});
