const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.open-btn');
const navbar = document.querySelector('.navbar');
const expandBtn = document.querySelectorAll('.expand-able');
const featureList = document.querySelector('.feature-list');
const companyList = document.querySelector('.company-list');
const heroImage = document.getElementById('heroImg')
const main = document.querySelector('main');

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

function openMenu() {
  navbar.classList.add('mobile');
}

function closeMenu() {
  navbar.classList.remove('mobile')
}

expandBtn[0].addEventListener('click', () => {
  featureList.classList.toggle('show');
})
expandBtn[1].addEventListener('click', () => {
  companyList.classList.toggle('show')
})

window.onresize = function () {
  menuChanger();
}
window.onload = function () {
  menuChanger();
}

function menuChanger() {
  if (window.innerWidth >= 780) {
    navbar.classList.add('desktop');
    navbar.classList.remove('mobile');
    heroImage.src = 'images/image-hero-desktop.png';
    main.classList.add('desktop');
  } else {
    navbar.classList.remove('desktop')
    heroImage.src = 'images/image-hero-mobile.png';
    main.classList.remove('desktop');
  }
}