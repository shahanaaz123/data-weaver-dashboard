document.addEventListener("DOMContentLoaded", function () {

  const apiKey = "095ac742e60846f5ff0f1fdb14a6a356";

let chart;

function getWeather() {
const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Enter city");
    return;
  }
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      if (data.cod != 200) {
        alert("City not found");
        return;
      }

      const labels = [];
      const temperature = [];
      const orders = [];

      for (let i = 0; i < 5; i++) {
        const item = data.list[i];

        labels.push(item.dt_txt.split(" ")[0]);
        temperature.push(item.main.temp);
        orders.push(Math.floor(item.main.temp * 5));
      }

      // cards
      const avgTemp = temperature.reduce((a, b) => a + b, 0) / temperature.length;
      const totalOrders = orders.reduce((a, b) => a + b, 0);
      const peakDay = labels[orders.indexOf(Math.max(...orders))];

      document.getElementById("avgTemp").innerText = avgTemp.toFixed(1);
      document.getElementById("totalOrders").innerText = totalOrders;
      document.getElementById("peakDay").innerText = peakDay;

      // chart
      const ctx = document.getElementById("lineChart");

      if (chart) chart.destroy();

      chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            { label: "Temp", data: temperature },
            { label: "Orders", data: orders }
          ]
        }
      });

    });
}
