// Função para adicionar produtos ao carrinho
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    // Adicionar lógica para adicionar ao carrinho aqui
  });
});
