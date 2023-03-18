//iframe
function products() {
  var container = document.querySelector(".featured");
  container.style.display = "block";
  container.style.width = "1400px";
  container.style.height = "900px";
  container.style.backgroundColor = "transparent";
  container.style.overflow = "hidden";
  container.style.border = "0";
  container.style.position = "relative";
  container.style.top = "-80px";
  container.style.left = "530px";
}

//button order
const order = document.getElementById("order");

order.addEventListener("click", function () {
  alert("Thank you for your business.");
});

//button cancel
const cancel = document.getElementById("cancel");

cancel.addEventListener("click", function () {
  alert("Sorry for not being able to do business with you.");
});

//input number limit
const inputNumbers = document.querySelectorAll("input[type=number]");

inputNumbers.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");
    if (input.value.length > 3) {
      input.value = input.value.slice(0, 3);
    }
  });
});
