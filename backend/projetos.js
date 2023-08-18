let cards = document.getElementById('cards')

function cardspc(codigo) {

    cards.innerHTML = ''

    for (let i = 0; i < cards.length; i++) {

        if (cards[i].codigo == codigo) {
            cards.innerHTML += `
                <div class="col-lg-4 col-md-6 col-12 p-3">
                    <div class="card text-dark pb-3 w-100 h-100">
                        <img src="${cards[i].url}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${cards[i].titulo}</h5>
                            <p class="card-text">${cards[i].descricao}</p>
                        </div>
                    </div>
                </div>
            `
        }
    }
}