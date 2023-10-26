// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('hader nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((link) => {
        link.classList.remove('active');
        // Check if the href attribute partially matches the id
        if (link.getAttribute('href').includes(id)) {
          link.classList.add('active');
        }
      });
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  let footer = document.querySelector('footer');

  footer.classList.toggle(
    'show-animate',
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};
