// Função para verificar se o usuário já visitou a página
function verificaVisitaAnterior() {
    return localStorage.getItem('visitouPagina');
  }
  
  // Função para exibir a introdução apenas no primeiro acesso
  function exibirIntroducao() {
    const intro = document.getElementById('intro');
    if (!verificaVisitaAnterior()) {
      intro.classList.remove('hidden');
      // Marcar que o usuário visitou a página
      localStorage.setItem('visitouPagina', 'true');
    }
  }
  
  // Chamar a função para exibir a introdução
  exibirIntroducao();
  