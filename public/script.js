const hamburgerContainerTag = document.querySelector('.hamburgerContainer');

const toggleNavbar = (collapseId) => {
  const collapseNavbar = document.querySelector(collapseId);
  collapseNavbar.classList.toggle('hidden');
  collapseNavbar.classList.toggle('block');
}

hamburgerContainerTag.addEventListener('click', toggleNavbar('#example-collapse-navbar'));

