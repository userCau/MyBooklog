const listaLendo =
    document.getElementById('lista-lendo');

const listaFila =
    document.getElementById('lista-fila');

const listaFinalizados =
    document.getElementById('lista-finalizados');

const estante =
    JSON.parse(localStorage.getItem('estante')) || [];

renderizarEstante();

function renderizarEstante() {

    listaLendo.innerHTML = '';

    listaFila.innerHTML = '';

    listaFinalizados.innerHTML = '';

    estante.forEach((livro, index) => {

        const card = document.createElement('div');

        card.classList.add('card-livro');

        card.innerHTML = `

            <img src="${livro.capa}">

            <div class="info-livro">

                <h2>${livro.titulo}</h2>

                <p>${livro.autor}</p>

                <button class="btn-remover-estante">
                    Remover da estante
                </button>

            </div>

        `;

        const btnRemover =
            card.querySelector('.btn-remover-estante');

        btnRemover.addEventListener('click', function() {

            estante.splice(index, 1);

            localStorage.setItem(
                'estante',
                JSON.stringify(estante)
            );

            renderizarEstante();

        });

        if(livro.status === 'lendo') {

            listaLendo.appendChild(card);

        }

        else if(livro.status === 'fila') {

            listaFila.appendChild(card);

        }

        else if(livro.status === 'finalizado') {

            listaFinalizados.appendChild(card);

        }

    });

}