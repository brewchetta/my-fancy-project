const URL = 'http://localhost:3000/pokemons';

fetch(URL)
.then(response => response.json())
.then(data => {
  console.log(data);
  const ul = document.querySelector('#pokemon-table');
  // add pokemon to unsorted list
  data.forEach(pokemon => {
    const interpokemon = `${pokemon.id} ${pokemon.name} ${pokemon.type}`;
    const li = document.createElement('li')
    li.textContent = interpokemon
    ul.append(li);
  })
})
