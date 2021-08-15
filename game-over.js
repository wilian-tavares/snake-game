
let pontos = document.getElementById('pontoFinal');
pontos.innerText = sessionStorage.getItem('ponto');
sessionStorage.setItem('ponto', '0');