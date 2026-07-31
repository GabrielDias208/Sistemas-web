function mostrarTela(nome){
    const tela = document.querySelectorAll('section')
    tela.forEach(tela => {
        tela.style.display = 'none';
    });

    const telaEscolhida = document.getElementById('tela-' + none)
    telaEscolhida.style.display = "block";
};