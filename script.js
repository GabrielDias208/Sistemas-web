function mostrarTela(nome){
    const telas = document.querySelectorAll('section')
    telas.forEach(telas => {
        telas.style.display = 'none';
    });

    const telaEscolhida = document.getElementById('tela-' + none)
    telaEscolhida.style.display = "block";
};
