document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('form').addEventListener('submit',
    function(){
      event.preventDefault()
      let pokemonName = document.getElementById('name-input').value
      let pokemonSprite = document.getElementById('sprite-input').value
      postNewPokemon(pokemonName, pokemonSprite)
    })

  fetchAllPokemon()

});

function render(pokemon){
  let pokemonCard = document.createElement('div')
  pokemonCard.innerHTML +=`<div class='card'
    id='pokemon-${pokemon.id}'><h2>${pokemon.name}</h2>
    <img src="${pokemon.sprite}"/></div>`

  document.getElementById('pokemon-container').appendChild(pokemonCard)

  pokemonCard.addEventListener("click", function(){
    deletePokemon(pokemon.id)
  })
}

function fetchAllPokemon(){
  fetch(`http://localhost:3000/pokemon/`)
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.forEach((pokemon) => render(pokemon))
  })
}

function postNewPokemon(pokemonName, pokemonSprite){
  let data = {
    "name": pokemonName,
    "sprite": pokemonSprite
  }
  fetch(`http://localhost:3000/pokemon/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(pokemon => {
    debugger
    render(pokemon)
  })
}

function deletePokemon(id){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  })
  .then((response) => {
    document.getElementById(`pokemon-${id}`).remove()
  })
}
