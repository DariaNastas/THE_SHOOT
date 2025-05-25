document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("userMenuToggle");
  const dropdown = document.getElementById("userMenuDropdown");

  toggleButton.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  });

  document.addEventListener("click", (e) => {
    if (!toggleButton.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});
