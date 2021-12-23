const btnMenu = document.querySelector('.menu-mobile');

function toggleMenu(event) {

    if(event.type === 'touchstart') event.preventDefault();

    const navegacaoSite = document.querySelector('.cabecalho__navegacao');
    navegacaoSite.classList.toggle('ativo');

    const active = navegacaoSite.classList.contains('ativo');
    event.currentTarget.setAttribute('aria-expanded', active);

    if(active){
        event.currentTarget.setAttribute('aria-label', "Fechar menu");
    } else{
        event.currentTarget.setAttribute('aria-label', "Abrir menu");
    }
}

btnMenu.addEventListener('click', toggleMenu)
btnMenu.addEventListener('touchstart', toggleMenu)

