// --- Theme Toggle ---
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// --- Subject Search ---
const searchBox = document.getElementById('searchBox');
const cards = document.querySelectorAll('.card');

if (searchBox) {
  searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase().trim();
    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(query) ? 'inline-flex' : 'none';
    });
  });
}
