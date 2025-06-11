const faqItems = document.querySelectorAll('.item-fraude');

  faqItems.forEach(item => {
    const question = item.querySelector('.titulo-fraude');
    question.addEventListener('click', () => {
      // Si ya está abierta, ciérrala
      const isActive = item.classList.contains('activo');
      faqItems.forEach(i => i.classList.remove('activo'));
      if (!isActive) {
        item.classList.add('activo');
      }
    });
  });