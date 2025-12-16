if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

// HABIT CHECKBOXES
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Load saved state
checkboxes.forEach(cb => {
  const saved = localStorage.getItem(cb.nextSibling.textContent || cb.parentElement.textContent);
  if (saved === 'true') cb.checked = true;

  // Save on change
  cb.addEventListener('change', () => {
    localStorage.setItem(cb.nextSibling.textContent || cb.parentElement.textContent, cb.checked);
  });
});
