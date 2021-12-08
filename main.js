
let btn = document.querySelector('.add-btn')
let cards = document.querySelector('.cards')
let deleted = document.querySelector('.deleted')


btn.addEventListener('click' , () => {
    cards.style.display = 'block'
})

deleted.addEventListener('click', () => {
    console.log(deleted)

})