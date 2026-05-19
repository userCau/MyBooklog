const listaWishlist =
    document.getElementById('lista-wishlist');

const wishlist =
    JSON.parse(localStorage.getItem('wishlist')) || [];

renderizarWishlist();

function renderizarWishlist() {

    listaWishlist.innerHTML = '';

    wishlist.forEach((livro, index) => {

        const card = document.createElement('div');

        card.classList.add('card-livro');

        card.innerHTML = `

            <img src="${livro.capa}">

            <div class="info-livro">

                <h2>${livro.titulo}</h2>

                <p>${livro.autor}</p>

                <button class="btn-remover">
                    Remover da wishlist
                </button>

            </div>

        `;

        const btnRemover =
            card.querySelector('.btn-remover');

        btnRemover.addEventListener('click', function() {

            wishlist.splice(index, 1);

            localStorage.setItem(
                'wishlist',
                JSON.stringify(wishlist)
            );

            renderizarWishlist();

        });

        listaWishlist.appendChild(card);

    });

}