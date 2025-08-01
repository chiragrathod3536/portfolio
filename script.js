function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  
  // Change icon based on mode
  const icon = document.getElementById('modeIcon');
  icon.textContent = isDark ? '🌞' : '🌙';

  // Save preference
  localStorage.setItem('darkMode', isDark);
}

// Apply saved theme on load
window.onload = () => {
  const isDarkSaved = localStorage.getItem('darkMode');
  const icon = document.getElementById('modeIcon');

  if (isDarkSaved==='true') {
    document.body.classList.add('dark');
    icon.textContent = '🌞';
  } else {
    icon.textContent = '🌙';
  }
};

// Apply saved theme
window.onload = () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }
};

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 50);

  const products = document.querySelectorAll('.product');
  const triggerPoint = window.innerHeight * 0.8;

  products.forEach(prod => {
    if (prod.getBoundingClientRect().top < triggerPoint) {
      prod.classList.add('scroll');
    }
  });
});