const weatherData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  temperatures: [32, 30, 28, 27, 26]
};

const orderData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  orders: [120, 150, 180, 200, 230]
};

new Chart(document.getElementById("weatherChart"), {
  type: "line",
  data: {
    labels: weatherData.labels,
    datasets: [{
      label: "Temperature (°C)",
      data: weatherData.temperatures
    }]
  }
});

new Chart(document.getElementById("orderChart"), {
  type: "bar",
  data: {
    labels: orderData.labels,
    datasets: [{
      label: "Food Orders",
      data: orderData.orders
    }]
  }
});
