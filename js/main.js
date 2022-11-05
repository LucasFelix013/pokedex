

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

function convertPokemonToHtml(Pokemon) {
  return `
  <li class="nomes">
  <span class="number">#001</span>
  <span class="name">${pokemon.name}</span>
  <div class="detail">
      <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
      alt="${pokemon.name}">
      
  </div>
 
</li>
<li class="nomes">
  <span class="number">#002</span>
  <span class="name">${pokemon.name}</span>
  <div class="detail">
      <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" 
      alt="${pokemon.name}">
      
  </div>
 
  
</li> 
<li class="nomes">
  <span class="number">#003</span>
  <span class="name">${pokemon.name}</span>
  <div class="detail">
      <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg" 
      alt="${pokemon.name}">
      
  </div>
  
</li>
<li class="nomes"> 
  <span class="number">#004</span>
  <span class="name">${pokemon.name}</span>
  <div class="detail">
      <ol class="types">
          <li class="type">Fire</li>
          
      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" 
      alt="${pokemon.name}">
      
  </div>
 
</li>

<li class="nomes"> 
  <span class="number">#005</span>
  <span class="name">${pokemon.name}</span>
  <div class="detail">
      <ol class="types">
          <li class="type">Fire</li>

      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg" 
      alt="${pokemon.name}">
      
  </div>


</li>

<li class="nomes">
  <span class="number">#006</span>
  <span class="name">${pokemon.name}</span>
  <div class="detail">
      <ol class="types">
          <li class="type">Flying</li>
          <li class="type">Fire</li>
      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" 
      alt="${pokemon.name}">
      
  </div>
  
</li> 

  `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
     .then((response) => response.json ())
     .then(( jsonBody) => jsonBody.results)
     .then((pokemons) => {

      for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonList.innerHTML += convertPokemonToLi(pokemon)
        
      }
        
    })

  .catch((error) => console.error(error))

