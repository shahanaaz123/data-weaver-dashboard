document.addEventListener("DOMContentLoaded", function () {

  const apiKey = "095ac742e60846f5ff0f1fdb14a6a356"; 
  let chart;

  window.getWeather = async function () {

    const city = document.getElementById("cityInput").value;

    if (!city) {
      alert("Enter a city name!");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod != 200) {
        alert("City not found!");
        return;
      }

      const labels = [];
      const temperature = [];
      const orders = [];

      // 🔥 Collect data
      for (let i = 0; i < 5; i++) {
        const item = data.list[i];

        labels.push(item.dt_txt.split(" ")[0]);
        temperature.push(item.main.temp);
        orders.push(Math.floor(item.main.temp * 5 + Math.random() * 50));
      }

      // 🔥 CALCULATIONS (cards)
      const avgTemp =
        temperature.reduce((a, b) => a + b, 0) / temperature.length;

      const totalOrders =
        orders.reduce((a, b) => a + b, 0);

      const maxOrders = Math.max(...orders);
      const peakIndex = orders.indexOf(maxOrders);
      const peakDay = labels[peakIndex];

      // 🔥 UPDATE CARDS UI
      document.getElementById("avgTemp").innerText =
        avgTemp.toFixed(1) + " °C";

      document.getElementById("totalOrders").innerText =
        totalOrders;

      document.getElementById("peakDay").innerText =
        peakDay;

      // 🔥 DRAW CHART
      const ctx = document.getElementById("lineChart").getContext("2d");

      if (chart) chart.destroy();

      chart = new Chart(ctx, {
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
              labels: { color: "white" }
            }
          },
          scales: {
            x: { ticks: { color: "white" } },
            y: { ticks: { color: "white" } }
          }
        }
      });

    } catch (error) {
      console.error(error);
      alert("Error fetching weather!");
    }
  };

});
