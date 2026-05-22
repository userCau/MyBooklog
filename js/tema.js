const botaoTema =
    document.getElementById('toggle-tema');

const temaSalvo =
    localStorage.getItem('tema');

if(temaSalvo === 'claro') {

    document.body.classList.add('tema-claro');

    botaoTema.textContent = '☀️';

}

botaoTema.addEventListener('click', function() {

    document.body.classList.toggle('tema-claro');

    if(document.body.classList.contains('tema-claro')) {

        localStorage.setItem('tema', 'claro');

        botaoTema.textContent = '☀️';

    }

    else {

        localStorage.setItem('tema', 'escuro');

        botaoTema.textContent = '🌙';

    }

});