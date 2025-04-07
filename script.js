document.addEventListener('DOMContentLoaded', function() {
    let tamanhoAtualFonte=1;
    const aumentaFonteBotao=document.getElementById('aumentar-fonte');
    const diminuiFonteBotao=document.getElementById('diminuir-fonte');
aumentaFonteBotao.addEventListener('click', function(){;
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize=`${tamanhoAtualFonte}rem`
    })
diminuiFonteBotao.addEventListener('click', function(){;
        tamanhoAtualFonte += -0.1;
        document.body.style.fontSize=`${tamanhoAtualFonte}rem`
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    })
    //Código fonte seguinte ocultado no slide
})


function toggleAltoContraste() {
  const body = document.body;
  body.classList.toggle('alto-contraste');

  // Opcional: Salvar a preferência do usuário no armazenamento local
  const altoContrasteAtivo = body.classList.contains('alto-contraste');
  localStorage.setItem('altoContraste', altoContrasteAtivo);
}

// Verificar a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  const altoContrasteSalvo = localStorage.getItem('altoContraste');
  if (altoContrasteSalvo === 'true') {
    document.body.classList.add('alto-contraste');
  }
});

// Adicionar um ouvinte de evento a um botão ou controle para ativar/desativar
const botaoAltoContraste = document.getElementById('meuBotao'); // Certifique-se de ter um elemento com este ID
if (botaoAltoContraste) {
  botaoAltoContraste.addEventListener('click', toggleAltoContraste);
}
