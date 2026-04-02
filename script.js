const sidebar = document.getElementById('mySidebar');
const openBtn = document.getElementById('openBtn');

let a = 0;

function abrir_menu() {
  if (a === 0) {
    sidebar.classList.add('sidebar_open');
    a = 1;
    
    document.getElementById("openBtn").innerHTML = "<strong> < </strong>";
  } else {
    sidebar.classList.remove('sidebar_open');
    a = 0;
    
    document.getElementById("openBtn").innerHTML = "<strong> > </strong>";
  }
}
