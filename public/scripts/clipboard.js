document.addEventListener('DOMContentLoaded', () => {
  const headerLinks = document.querySelectorAll('.copy-link');

  headerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const url = link.getAttribute('href');
      const fullUrl = `${window.location.href.split("#")[0]}${url}`;

      navigator.clipboard.writeText(fullUrl).then(() => {
        location.href = `${url}`
        console.log(`Copied to clipboard: ${fullUrl}`);
      }).catch(err => {
        console.error('Failed to copy:', err);
      });
    });
  });
});
