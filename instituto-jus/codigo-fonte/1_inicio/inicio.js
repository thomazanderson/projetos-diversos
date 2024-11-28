window.addEventListener('load', function () {
    const columns = document.querySelectorAll('.container div');
    columns.forEach((column, index) => {
      // Adiciona a animação a cada coluna com um atraso gradual
      column.style.animationDelay = `${index * 0.5}s`;
      column.classList.add('animate'); // Pode adicionar mais ações se necessário
    });
  });