const favoritos =
    JSON.parse(localStorage.getItem('favoritos')) || [];

const wishlist =
    JSON.parse(localStorage.getItem('wishlist')) || [];

const estante =
    JSON.parse(localStorage.getItem('estante')) || [];

const totalFavoritos =
    document.getElementById('total-favoritos');

const totalWishlist =
    document.getElementById('total-wishlist');

const totalLendo =
    document.getElementById('total-lendo');

const totalFinalizados =
    document.getElementById('total-finalizados');

const livroAtual =
    document.getElementById('livro-atual');

const ultimosLivros =
    document.getElementById('ultimos-livros');

totalFavoritos.textContent = favoritos.length;

totalWishlist.textContent = wishlist.length;

const livrosLendo =
    estante.filter(livro => livro.status === 'lendo');

const livrosFinalizados =
    estante.filter(livro => livro.status === 'finalizado');

totalLendo.textContent = livrosLendo.length;

totalFinalizados.textContent =
    livrosFinalizados.length;

if(livrosLendo.length > 0) {

    const livro = livrosLendo[0];

    const card = document.createElement('div');

    card.classList.add('card-home');

    card.innerHTML = `

        <img src="${livro.capa}">

        <div class="card-home-info">

            <h3>${livro.titulo}</h3>

            <p>${livro.autor}</p>

        </div>

    `;

    livroAtual.appendChild(card);

}

const ultimos =
    estante.slice(-4).reverse();

ultimos.forEach(livro => {

    const card = document.createElement('div');

    card.classList.add('card-home');

    card.innerHTML = `

        <img src="${livro.capa}">

        <div class="card-home-info">

            <h3>${livro.titulo}</h3>

            <p>${livro.autor}</p>

        </div>

    `;

    ultimosLivros.appendChild(card);

}); 