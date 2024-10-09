document.addEventListener("DOMContentLoaded", function() {
    let data = prompt("Give Radius");
    if (data !== null) {
      let radius = parseFloat(data);
      if (!isNaN(radius)) {
        alert("The radius you entered is: " + radius);
      } else {
        alert("Please enter a valid number.");
      }
    }
  });