(() => {
  const form = document.getElementById('code-form');
  const input = document.getElementById('code');
  const msg = document.getElementById('code-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = input.value.trim().replace(/^code:\s*/i, '');
    if (!/^[A-Za-z0-9_-]{6,64}$/.test(code)) {
      msg.textContent = 'Type the code exactly as printed after “Code:”, letters and numbers only.';
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }
    input.removeAttribute('aria-invalid');
    msg.textContent = '';
    location.href = 'https://minutenotary.ca/verify/' + encodeURIComponent(code);
  });
})();
