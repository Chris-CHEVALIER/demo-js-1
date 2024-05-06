const h1 = document.getElementById('title')
const ul = document.querySelector('ul')

h1.textContent = 'Mon nouveau titre !'
h1.style.color = 'blue'
ul.innerHTML = '<li>Toto</li>'
//document.body.appendChild(h1);

const div = document.createElement('div')
div.innerHTML = '<h2 id="h2">Ma super image !</h2>'

const img = document.createElement('img')
img.src = 'https://i.ebayimg.com/images/g/FIUAAOSwQJlf5okm/s-l1200.jpg'
img.alt = 'Pokédex'
img.width = '220'

div.appendChild(img)
document.body.appendChild(div)

div.style.backgroundColor = 'blue'
div.style.color = 'white'

const h2 = document.getElementById('h2')
div.removeChild(h2)

function addCounter () {
  const counterLabel = document.getElementById('click-counter')
  const counter = parseInt(counterLabel.innerHTML) + 1
  counterLabel.innerText = counter
}

const lessCounter = document.getElementById('less-counter')
lessCounter.addEventListener('click', () => {
  const counterLabel = document.getElementById('click-counter')
  const counter = parseInt(counterLabel.innerHTML) - 1
  counterLabel.innerText = counter
})

const modeButton = document.getElementById('mode-btn')
modeButton.addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'black') {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  } else {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }
})


fetch("https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0")
.then(response => response.json())
.then(data => {
    const pokemons = data.results
    const pokemonList = document.getElementById("pokemon-list")
    pokemons.forEach(pokemon => {
        const li = document.createElement("li")
        li.textContent = pokemon.name
        pokemonList.appendChild(li)
    })
})