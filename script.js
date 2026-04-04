const sidebar = document.getElementById('mySidebar');
/* Sidebar declarada (constante) */
const openBtn = document.getElementById('openBtn'); /* Botão que abre menu lateral (constante) */

let a = 0;
/* Variável de controle pra abrir/fechar a sidebar */

function abrir_menu() {
  if (a === 0) {
    sidebar.classList.add('sidebar_open');
    a = 1;
    
    document.getElementById("openBtn").innerHTML = "<strong> < </strong>";
    console.log('Menu lateral ativado.');
    
    /* Seleciona o botão e atribui a class que empurra a sidebar para a
     * direita, mostrando-a na tela. Altera o valor da variável a para "1",
     * indicando que a sidebar está visível.
     */
  } else {
    sidebar.classList.remove('sidebar_open');
    a = 0;
    
    document.getElementById("openBtn").innerHTML = "<strong> > </strong>";
    console.log('Menu lateral desativado.');
    
    /* Se a sidebar estiver visível, a class sidebar_open é removida
     * do elemento da no html, isso desloca ela para a esquerda, e ela some.
     */
  }
}
