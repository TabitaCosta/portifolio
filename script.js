document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = e.target.getAttribute('data-section');

    // Remove 'active' de todos os links
    document.querySelectorAll('[data-section]').forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');

    // Esconde todas as seções
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('d-none'));

    // Mostra a seção correspondente
    document.getElementById('section-' + section).classList.remove('d-none');
  });
});
