const formBusca = document.getElementById('form-busca');
const inputBusca = document.getElementById('input-busca');
const resultadoLivros = document.getElementById('resultado-livros');

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
                    </div>
                `;

                resultadoLivros.appendChild(card);

            });

        });

}