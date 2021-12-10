


(() => {
    fetch('data.json')
        .then(d => d.json())
        console.log(d)
        .then(d => init(d))
})();

let cardsData;
 

function init(data) {
    cardsData = data;
    const btnAdd = document.querySelector('.add-btn');
    console.log(btnAdd)
    const cards = document.querySelector('.cards');
    const form = document.querySelector('.big-container form');

    drawCards(cardsData, cards);

    btnAdd.addEventListener('click' , e => {
        console.log('1')
        e.preventDefault()

        const formData = new FormData(form);
        const newCard = {};
        ['name', 'descr', 'image', 'price'].forEach(name => {
            
            const value = formData.get(name);
            const input = form.querySelector(`[name=${name}]`);
            if (value) {
                newCard[name] = value;
                input.classList.remove('no-valid');
            } else if(name !== 'price') {
                input.classList.add('no-valid');
                return;
            }
        });
        cardsData.push(newCard);
        const card = getCard(newCard, cards.length);
        cards.append(card);
    });
}

function drawCards(data, cards) {
    data.forEach((d, i) => {
        const card = getCard(d, i);
        cards.append(card);
    })
}

function getCard(data, index){
    const cardHTML = `<div class="inner"><img class="image"><img src="img/deleted.svg" class="delete"><div class="text"><h4></h4><p class="descr"></p><p class="price"></p></div></div>`;
    const card = document.createElement('section');
    card.setAttribute('class', 'card');
    card.innerHTML = cardHTML;
    card.querySelector('.image').setAttribute('src', data.image);
    card.querySelector('.descr').innerHTML = data.descr;
    card.querySelector('.price').innerHTML = `${data.price.toLocaleString('ru-RU')} руб`;

    card.querySelector('.delete')
        .addEventListener('click', () => {
            cardsData.splice(index, 1);
            card.remove();
        });

    return card;
}