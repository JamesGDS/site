document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove-btn');
    const totalAmount = document.getElementById('total-amount');
  
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.item');
        const price = parseFloat(item.querySelector('p').textContent.split('R$ ')[1]);
        totalAmount.textContent = (parseFloat(totalAmount.textContent) - price).toFixed(2);
        item.remove();
      });
    });
  });
  