const formBusca = document.getElementById('form-busca');

const inputBusca = document.getElementById('input-busca');

const resultadoLivros =
    document.getElementById('resultado-livros');

formBusca.addEventListener('submit', function(evento) {

    evento.preventDefault();

    const valorBusca = inputBusca.value;

    buscarLivros(valorBusca);

});

function buscarLivros(nomeLivro) {

    resultadoLivros.innerHTML = '';

    fetch(`https://openlibrary.org/search.json?q=${nomeLivro}`)

        .then(resposta => resposta.json())

        .then(dados => {

            dados.docs.slice(0, 20).forEach(livro => {

                const capa = livro.cover_i
                    ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
                    : 'https://via.placeholder.com/200x300?text=Sem+Capa';

                const card = document.createElement('div');

                card.classList.add('card-livro');

                card.innerHTML = `

                    <img src="${capa}">

                    <div class="info-livro">

                        <h2>${livro.title}</h2>

                        <p>
                            ${livro.author_name
                                ? livro.author_name[0]
                                : 'Autor desconhecido'}
                        </p>

                        <button class="btn-favorito">
                            ❤️ Favoritar
                        </button>

                        <select class="select-estante">

                            <option value="">
                                Adicionar à estante
                            </option>

                            <option value="lendo">
                                Em leitura
                            </option>

                            <option value="fila">
                                Na fila de leitura
                            </option>

                            <option value="finalizado">
                                Finalizados
                            </option>

                        </select>

                    </div>

                `;

                const btnFavorito =
                    card.querySelector('.btn-favorito');

                const selectEstante =
                    card.querySelector('.select-estante');

                btnFavorito.addEventListener('click', function() {

                    const favoritos =
                        JSON.parse(
                            localStorage.getItem('favoritos')
                        ) || [];

                    favoritos.push({
                        id: livro.key,
                        titulo: livro.title,
                        autor: livro.author_name
                            ? livro.author_name[0]
                            : 'Autor desconhecido',
                        capa: capa
                    });

                    localStorage.setItem(
                        'favoritos',
                        JSON.stringify(favoritos)
                    );

                    alert('Livro favoritado');

                });

                selectEstante.addEventListener('change', function() {

                    if(this.value === '') {
                        return;
                    }

                    const estante =
                        JSON.parse(
                            localStorage.getItem('estante')
                        ) || [];

                    estante.push({
                        id: livro.key,
                        titulo: livro.title,
                        autor: livro.author_name
                            ? livro.author_name[0]
                            : 'Autor desconhecido',
                        capa: capa,
                        status: this.value
                    });

                    localStorage.setItem(
                        'estante',
                        JSON.stringify(estante)
                    );

                    alert('Livro adicionado à estante');

                });

                resultadoLivros.appendChild(card);

            });

        });

}