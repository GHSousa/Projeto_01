// seleciona o elemento do cabeçalho e adiciona um evento de clique
const header = document.querySelector('header');
header.addEventListener('click', function () {
  alert('Cabeçalho clicado!');
});

// seleciona todos os elementos de seção e adiciona um evento de mouseover
const sections = document.querySelectorAll('section');
sections.forEach(function (section) {
  section.addEventListener('mouseover', function () {
    section.style.backgroundColor = '#f0f0f0';
  });
});

// seleciona o elemento de rodapé e atualiza o ano atual
const footer = document.querySelector('footer');
const anoAtual = new Date().getFullYear();
footer.innerHTML = `<p>&copy; ${anoAtual} Minha Empresa. Todos os direitos reservados.</p>`;