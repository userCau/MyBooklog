const fantasia =
    document.getElementById('fantasia');

const terror =
    document.getElementById('terror');

const romance =
    document.getElementById('romance');

const ficcao =
    document.getElementById('ficcao');

const livroAleatorio =
    document.getElementById('livro-aleatorio');

const btnAleatorio =
    document.getElementById('btn-aleatorio');

buscarCategoria('fantasy', fantasia);

buscarCategoria('horror', terror);

buscarCategoria('romance', romance);

buscarCategoria('science fiction', ficcao);

function buscarCategoria(genero, container) {

    fetch(
        `https://openlibrary.org/search.json?q=${genero}`
    )

    .then(resposta => resposta.json())

    .then(dados => {

        dados.docs.slice(0, 10).forEach(livro => {

            const capa = livro.cover_i
                ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
                : 'https://via.placeholder.com/200x300?text=Sem+Capa';

            const card =
                document.createElement('div');

            card.classList.add('card-recomendacao');

            card.innerHTML = `

                <img src="${capa}">

                <div class="card-recomendacao-info">

                    <h3>${livro.title}</h3>

                    <p>
                        ${livro.author_name
                            ? livro.author_name[0]
                            : 'Autor desconhecido'}
                    </p>

                </div>

            `;

            container.appendChild(card);

        });

    });

}

btnAleatorio.addEventListener('click', function() {

    fetch(
        'https://openlibrary.org/search.json?q=books'
    )

    .then(resposta => resposta.json())

    .then(dados => {

        livroAleatorio.innerHTML = '';

        const random =
            Math.floor(Math.random() * 20);

        const livro =
            dados.docs[random];

        const capa = livro.cover_i
            ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-L.jpg`
            : 'https://via.placeholder.com/200x300?text=Sem+Capa';

        const card =
            document.createElement('div');

        card.classList.add('card-home');

        card.innerHTML = `

            <img src="${capa}">

            <div class="card-home-info">

                <h3>${livro.title}</h3>

                <p>
                    ${livro.author_name
                        ? livro.author_name[0]
                        : 'Autor desconhecido'}
                </p>

            </div>

        `;

        livroAleatorio.appendChild(card);

    });

});