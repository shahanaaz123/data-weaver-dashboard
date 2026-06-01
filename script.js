document.addEventListener("DOMContentLoaded", function () {
const apiKey = "095ac742e60846f5ff0f1fdb14a6a356";

let chart;

window.getWeather = function() {

  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Enter city");
    return;
  }

  // 🔥 SIMPLE API (NO FORECAST)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      console.log(data); // debug

      if (data.cod != 200) {
        alert("City not found");
        return;
      }

      // 🔥 JUST ONE TEMP
      const temp = data.main.temp;

      // fake data for chart
      const labels = ["Day1", "Day2", "Day3", "Day4", "Day5"];
      const temperature = [temp, temp+1, temp+2, temp-1, temp];
      const orders = temperature.map(t => Math.floor(t * 5));

      // cards
      document.getElementById("avgTemp").innerText = temp + " °C";
      document.getElementById("totalOrders").innerText =
        orders.reduce((a,b)=>a+b,0);
      document.getElementById("peakDay").innerText =
        labels[orders.indexOf(Math.max(...orders))];

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

    })
    .catch(() => {
      alert("Error fetching data");
    });
}
