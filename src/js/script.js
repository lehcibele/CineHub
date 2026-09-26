const abrirModal = document.querySelector('#open-modal');
const fecharModal = document.querySelector('#close-modal');
const modal = document.querySelector('#filme-modal');
const filmesContainer = document.querySelector('#filmes-container');

const filmes = [
    {
        titulo: "Teste",
        categoria: "Aventura",
        ano: 2007,
        imagem: "src/img/harry.png"
    },
    {
        titulo: "Interestelar",
        categoria: "Ficção Científica",
        ano: 2014,
        imagem: "src/img/harry.png"
    },
    {
        titulo: "Harry Potter",
        categoria: "Ficção Científica",
        ano: 2014,
        imagem: "src/img/harry.png"
    },
];

function abrir() {
    modal.classList.add('ativo');
}

function fechar() {
    modal.classList.remove('ativo');
}

abrirModal.addEventListener('click', abrir);
fecharModal.addEventListener('click', fechar);

// ao cliar no modal sera fechado
modal.addEventListener('click', function(event){
    if(event.target === modal) {
        fechar();
    }
});

function mostrarFilmes() {
    filmes.forEach(function(filme) {
        const card = document.createElement("article");
        
        card.classList.add("filme-card");

        card.innerHTML = `
            <img src="${filme.imagem}" alt="${filme.titulo}" class="filme-imagem" style="width:200"/>

            <div class="filme-info">
                <h2 class="filme-titulo">${filme.titulo}</h2>
                <span class="filme-categoria">${filme.categoria}</span>
                <span class="filme-ano">${filme.ano}</span>
            </div>
        `;

        filmesContainer.appendChild(card);
    });
}

mostrarFilmes();