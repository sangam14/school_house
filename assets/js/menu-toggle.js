const menuToggleButton = document.getElementById("menu-toggle-button");

if (menuToggleButton) {
  menuToggleButton.addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  });
}
