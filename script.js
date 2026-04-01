// Intercepta o envio do formulário do PASSO 1 (Email)
document.getElementById('form-email').addEventListener('submit', function(event) {
  // Impede que a página recarregue automaticamente ao clicar em "Obter código"
  event.preventDefault(); 
  
  // Esconde a div do Passo 1 (trocando o display para 'none')
  document.getElementById('step-1').style.display = 'none';
  
  // Mostra a div do Passo 2 (trocando o display para 'block')
  document.getElementById('step-2').style.display = 'block';
});

// Intercepta o envio do formulário do PASSO 2 (Código)
document.getElementById('form-codigo').addEventListener('submit', function(event) {
  // Impede que a página recarregue ao clicar em "Verificar código"
  event.preventDefault();
  
  // Simulação da ação de envio para o back-end (Aqui entrará o Fetch/Axios para a API)
  alert('Código enviado para verificação!'); 
});