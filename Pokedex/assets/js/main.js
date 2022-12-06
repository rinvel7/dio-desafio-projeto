const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
    <a href="./pokemon.html?name=${pokemon.name}">   
    <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    </a>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

/*
//MODELO API
//Esse bloco foi trasladado a Poke_api
 const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` 

//MANIPULACAO DE HTML (DOM)

function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}}</li>`)
}

function convertPokemonToLi(pokemon) {// funcao troco html para li
    return `
        <ol class="pokemons" >
            <li class="pokemon">
                <span class="number">'${pokemon.order}</span>
                <span class="name">'${pokemon.name}'</span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>
                    <img src='${pokemon.sprites.other.dream_world.front_default}' alt="${pokemon.name}">
                </div>               
            
            </li>
        </ol>      
    `
}
//Esse codigo, permite renderizar html no brawser, pegando na lista de pokemon, atribuidos a uma variavel
const pokemonList = document.getElementById('pokemonList')
//Esse bloco foi trasladado a Poke_api e sustituido por pokeAPi.getPokemons
/* fetch(url) //fetch devolve uma promise de respponse
.then((response) => response.json())//uma vez a promise e resolvida ele entra en .then(response = body) mas ele e tranformada em response.json
.then((jsonBody) => jsonBody.results)//uma vez tranformada o body en json e traze como resultado a lista de pokemon
.then((pokemons) => {
 
pokeApi.getPokemons().then((pokemons = []) => { 
    const newlist = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newlist  
})
*/