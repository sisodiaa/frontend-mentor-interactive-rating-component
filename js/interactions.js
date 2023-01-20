document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var rating = Object.fromEntries(formData).component__rating;
    if (rating) {
      document.getElementById("rating").setAttribute("hidden", "hidden");
      document.getElementById("response").removeAttribute("hidden");
      document.getElementById("feedback").textContent = rating;
    }
  });
});
