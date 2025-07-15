document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmation").textContent = "🎉 Your table has been booked!";
});
