
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const checkoutLinks = {
  '2-3': '#',
  '3-5': '#'
};

document.querySelectorAll('[data-checkout]').forEach(button => {
  button.addEventListener('click', (event) => {
    const key = button.dataset.checkout;
    const url = checkoutLinks[key];

    if (!url || url === '#') {
      event.preventDefault();
      alert('Falta conectar el enlace de pago de este producto.');
      return;
    }
    button.href = url;
  });
});
