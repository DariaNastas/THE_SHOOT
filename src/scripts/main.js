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

  // dialog
const dialog = document.getElementById('tabletOverlay');
const showButton = document.getElementById('show');
const closeButton = document.getElementById('close');
const links = document.querySelectorAll('.mobile-overlay__link');

const closeDialog = () => {
  dialog.style.display = 'none';
  document.body.classList.remove('hide');
  dialog.close();
};

showButton.addEventListener('click', () => {
    dialog.style.display = 'block';
    document.body.classList.add('hide');
    dialog.showModal();
  });

  closeButton.addEventListener('click', () => closeDialog());

links.forEach((link) => link.addEventListener('click', () => closeDialog()));