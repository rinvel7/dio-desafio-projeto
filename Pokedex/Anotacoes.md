## CONFIGURACAO DE AMBIENTE

- Antes de comenzar a trabalhar deve ter instalado Node.js e NPM

- Instalar http-server: 
    npm install -g http-server

   * Ele permite trabalhar nosso projeto e poder ser visualizado desde uma URL http.
   
   * Da a posibilidade dois URL http, uma para web e otra movel.
  
   Para inicializar projeto desde server:
   
   http-server ./
   Ele enviara a informacion de url http, so clicar em url

   Para finalizar:
   ctrl-c

## PROTOCOLO HTTP CLIENTE SERVIDOR

### CLIENTE
    BROWSER

### SERVIDOR
    HTTP

    Um cliente faze um PEDIDO, o Servidor o procesa e ele devolve uma resposta.


# HTML
HyperText Markup Language

HTML é uma linguagem de marcação utilizada na construção de páginas na Web.

Texto e Semantica.

# CSS
Cascading Style Sheets

 é um mecanismo para adicionar estilo a um documento web.

 # JAVASCRIPT

 é uma linguagem de programação interpretada estruturada, de 
 script em alto nível com tipagem dinâmica fraca e 
 multiparadigma.

 ## OBJETOS UTILES PARA MANIPULAR NOSSA TELA

 ### window.
        e um objeto que representa browser.. Nos permite manipular o browser.

### document.
        e documento corriente.
        Nos permite manipular html.

        ex:

        document.getElementById("btnTeste")
           ele devolvera um elemento de html

### addEventListener()

        Quando usuario clicar ele faze alguma coisa;
        Oseja, quando acontece un evento, ele chamara a alguem para que faca esso acontece.


### COMO FACER QUE CSS FIQUE IGUAL EM TODOS OS NAVEGADORES

O projeto e preciso instalar NORMALIZE, CSS uma ferrementa cuja funcoe e, que css fique igual no navegadores

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

Ele pode ser intalado de varias forma: npm


# API

 E un servidor de dados, em formato JSON. ele traze un conjunto de
 dados, como atributos, objetos.

 Ela roda por encima do protocolo http.

## API REST

        Sao un conjunto de padroes de api para projetos


### COMO FUNCIONA UM PROTOCOLO HTTP (REQUISICAO)

Um browser faze uma solicitacao, essa solititacao fue receveda por um servidor e ele devolvio uma informacao.

### EXEMPLO ALGUMAS INFORMACOES DE REQUISICAO

:authority: pokeapi.co
:method: GET
:path: /templates/styles.8d2856b2.js
:scheme: https
accept: */*
accept-encoding: gzip, deflate, br
accept-language: es-ES,es;q=0.9,pt;q=0.8,en;q=0.7
cache-control: no-cache

### COMO MONTAR UMA REQUISICAO HTTP

1. Tenher um PATH ele e um API que import do servidor,
    o enderezo da imformacao que e solicitada:
    URL:"https://pokeapi.co/api/v2/ability/1/"
    ${IP = endereco}/${path = caminho de identificacao do recurso}

    IP DIRECTO: https://pokeapi.co /E UN DOMINIO MAS UN SERVIDOR DNS CONVIERTE ESE DOMINIO PARA UN IP Y FAZER A COMUNICACAO.

    IP LOCAL: http://127.0.0.1:3000

    PATH : api/v2/ability/1/

    ## TIPOS DE SOLICITUDES

        Ele en termino general sao:

    ## Request Method: 

    ### GET
        buscar um recurso
    ### POST
        inserir uma informacao
    ### PUT
        actualizar uma informacao
    ### DELETE
        eliminar  uma imformacao

## TRANSFERENCIA DE DADOS

### Path Paramans
    url e dimanico, ele tem un id(1) que identifica y tranfiere os dados que precisa.

    "https://pokeapi.co/api/v2/ability/1"

### Querys Sring
    uma descripcao de busca (?/&) = ?type=grass&name1

    "https://pokeapi.co/api/v2/ability/1?type=grass&name1  "

### Resquest e Response HEADER (configuracao - autorizacao Api) 
    Sao area de dados, en que se pode trasmitir e receber coisas do servidor

    Sao metadados que describen o complementa a requisicao

## AREA DE DADOS DEPENDE DO TIPO DE REQUISICAO
 
 ### BODY
    O corpo de nossa requisicao ou resposta:

    GET, DELETE ele nao tem body: so com atributos paht, quary, metodo, header de request.

    POST, PUT eles tem body: Request Header

### STATUS CODE
    e un numero que diz o que aconteceo con nossa requisicao:
        200:sucesso, 300, 400:nao sucesso, 500

# COMO FAZER UMA REPETICAO VIA JAVASCRIPT

## FETCH API

E uma funcao que retorna uma promise, que consigue lidar con um asyncronismo dentro de JS.

#### Asyncronismo = a requisicao vai ser devolta en qualquer momento.

##### Promise = promesa de uma resposta.

## MANIPULANDO O RESULTADO DA REQUISICAO A TRAVES DE UMA PROMISE
1. Manipular uma Promise
2. Manipular uma lista de objetos
3. Tranformar essa lista de objetos en otro tipo (.map)
4. Concatenar = juntar elementos

#### Interface de comunicacao de uma estrutura de uma promise

fetch(url)//ele chama a uma promesa
.then(function(response){ // faze alguma coisa
    console.log(response)
})
.catch(function(error){ // quando da erro
    console.log(error)
})
.finally(function(){// quando finalica a promise
    console.log('Requisicao concluida!')
})

### ARROU FUNTCION

e uma sintaxi reducisa da sintaxis de uma funcao

fetch(url)
.then(response) => {
    return response.json()
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log('Requisicao concluida!')
})


## COMO MANIPULAR HTML (DOM)

crear uma funcao que retorne un html.
E necesario traze o codigo para JS.

## COMO FAZER UMA LISTA QUE CONTENGA AS MISMA INFORMACOE

faser un for.

## MANIPULANDO HTML DENTRO DE JS

innerHTML = traze literalmente un elemento de html para JS

## map()
funcoe auxiliar, ele pasa uma funcao trasfomadora que vai tranformar un elemento em outro (transformar una list para html)


//Esse bloco foi trasladado a Poke_api
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` 

//MANIPULACAO DE HTML (DOM)

function convertPokemonToLi(pokemon) {// funcao troco html para li
    return `
        <ol class="pokemons" >
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">'${pokemon.name}'</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="'${pokemon.name}'">
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
 */
pokeApi.getPokemons().then((pokemons = []) => {   
    //formas de fazer un codigo map    
    /* 1. const newlist = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })    
    const newHtml = newlist.join('')
    pokemonList.innerHTML += newHtml
   */
  //2.
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('') 
  
//ESSE BLOCO E SUSTITUIDO POR UM .MAP
// const listItem = []
  
//trazer a lista de Pokemon
//for (let i = 0; i < pokemons.length; i++) {
//const pokemon = pokemons[i];
//listItem.push(convertPokemonToli(pokemon))
//sustituye
//pokemonList.innerHTML += convertPokemonToHtml(pokemon)//a taaves deesa variavel, consigo manipular dentro de a lista + um item        
//}
})

EN CONLUSAO:

O codigo arriba, fizemos un requisicao http, busca a lista de pokemon y recevemos aqui (pokemons = [])

        pokeApi.getPokemons().then((pokemons = []) => {

Transfomamos essos pokemons en una lista de html:
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi)

E concatenamos os string:

        .join('')
