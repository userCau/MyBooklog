const listaFavoritos =
    document.getElementById('lista-favoritos');

const favoritos =
    JSON.parse(localStorage.getItem('favoritos')) || [];

renderizarFavoritos();

function renderizarFavoritos() {

    listaFavoritos.innerHTML = '';

    favoritos.forEach((livro, index) => {

        const card = document.createElement('div');

        card.classList.add('card-livro');

        card.innerHTML = `

            <img src="${livro.capa}">

            <div class="info-livro">

                <h2>${livro.titulo}</h2>

                <p>${livro.autor}</p>

                <button class="btn-remover">
                    Remover dos favoritos
                </button>

            </div>

        `;

        const btnRemover =
            card.querySelector('.btn-remover');

        btnRemover.addEventListener('click', function() {

            favoritos.splice(index, 1);

            localStorage.setItem(
                'favoritos',
                JSON.stringify(favoritos)
            );

            renderizarFavoritos();

        });

        listaFavoritos.appendChild(card);

    });

}