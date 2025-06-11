document.getElementById('header-container').innerHTML = `
<header class="t1-header">
    <div class="header-container">
        <div class="logo">
            <img src="assets/img/Logo_T1_score.svg">
        </div>
      <nav class="nav-menu">
        <a href="#que-es-t1-score">T1score</a>
        <a href="#para-quien-es-t1-score">¿Para quién es?</a>
        <a href="#">Producto</a>
        <a href="#como-funciona-t1-score">¿Cómo funciona?</a>
        <a href="#resultados-que-transforman">Resultados</a>
        <button class="demo-button" onclick="openPopUp();">Solicitar demo</button>
      </nav>
      <div class="d-md-none d-flex">
        <div class="hamburger-icon" id="hamburgerToggle">
          <i class="fas fa-bars"></i>
        </div>
        <div class="close-icon d-none" id="menuClose">
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="#que-es-t1-score">T1score</a>
      <a href="#para-quien-es-t1-score">¿Para quién es?</a>
      <a href="#">Producto</a>
      <a href="#como-funciona-t1-score">¿Cómo funciona?</a>
      <a href="#resultados-que-transforman">Resultados</a>
      <button class="demo-button" onclick="openPopUp();">Solicitar demo</button>
    </div>
  </header>
`;


// header.js
document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile menu
 const hamburgerToggle = document.getElementById('hamburgerToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.getElementById('menuClose');

  hamburgerToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    menuClose.classList.remove('d-none');
    hamburgerToggle.classList.add('d-none');
  });

  menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuClose.classList.add('d-none');
    hamburgerToggle.classList.remove('d-none');
  });
  // Cerrar menú al hacer clic en cualquier enlace o botón
  mobileMenu.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuClose.classList.add('d-none');
        hamburgerToggle.classList.remove('d-none');
    });
  });
});
