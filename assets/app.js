const copyButtons = document.querySelectorAll('[data-copy]');
const statusNode = document.querySelector('#copy-status');

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const successful = document.execCommand('copy');
  document.body.removeChild(textarea);
  return successful;
}

copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.dataset.copy;

    try {
      await copyText(text);
      if (statusNode) {
        statusNode.innerHTML = `Скопійовано: <strong>${text}</strong>`;
      }
      const original = button.textContent;
      button.textContent = 'Скопійовано ✓';
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch (error) {
      if (statusNode) {
        statusNode.textContent = `Скопіюй вручну: ${text}`;
      }
    }
  });
});
