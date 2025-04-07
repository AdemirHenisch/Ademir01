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
document.addEventListener('DOMContentLoaded', function () {
const botao = document.getElementById('meuBotao');

  botao.addEventListener('click', function() {
    botao.classList.toggle('botao-alto-contraste');
    alert('Botão de alto contraste clicado!');
  });
}
