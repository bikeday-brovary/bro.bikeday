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
  textarea.style.pointerEvents = 'none';
  document.body.appendChild(textarea);
  textarea.select();
  const successful = document.execCommand('copy');
  document.body.removeChild(textarea);
  return successful;
}

function setButtonCopiedState(button) {
  const label = button.querySelector('[data-copy-label]');
  const target = label || button;
  const originalText = target.textContent;

  target.textContent = 'Скопійовано ✓';
  window.setTimeout(() => {
    target.textContent = originalText;
  }, 1500);
}

copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.dataset.copy;
    if (!text) return;

    try {
      await copyText(text);
      if (statusNode) {
        statusNode.textContent = `Скопійовано: ${text}`;
      }
      setButtonCopiedState(button);
    } catch (error) {
      if (statusNode) {
        statusNode.textContent = `Скопіюйте вручну: ${text}`;
      }
    }
  });
});
