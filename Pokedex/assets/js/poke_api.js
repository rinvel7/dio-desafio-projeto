//MODELO ADAPTADO



const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}


/*
//MODELO DE API

const pokeApi = {}

pokeApi.getPokemonDetail =(pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` 
    
    return fetch(url) //busca lista
        .then((response) => response.json())//recevemos http response e convertimos em json
        .then((jsonBody) => jsonBody.results)//recevemos o resultados em json
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//mapeamos a list em uma lista de requisicao com mas datalle getPokemonDetail
        .then((detailsRequests) => Promise.all(detailsRequests))//esperamos o que todas as requisicoes terminen
        .then((pokemonsDetails) => pokemonsDetails)//recevemos a lista de detalles
        
}

 */