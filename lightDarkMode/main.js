const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', e => {
  document.documentElement.classList.toggle('dark');
});