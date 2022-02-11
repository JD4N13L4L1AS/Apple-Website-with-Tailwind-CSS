const hamburgerContainerTag = document.querySelector('.hamburgerContainer');

const toggleNavbar = () => {
  const collapseNavbarTag = document.querySelector('#example-collapse-navbar');
  collapseNavbarTag.classList.toggle('hidden');
  collapseNavbarTag.classList.toggle('block');
}

hamburgerContainerTag.addEventListener('click', toggleNavbar);

