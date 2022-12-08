# NODE
    E un runtime de Javascript. 
    Criado pelo Ryan Dahl 2009
    Utiliza o motor Javascript V8

# NPM

    (Node Package Manager) Gerenciador de pacotes padron de node.

# YARN
    E um regenciador de pacotes para aplicar comandos prontos ao codigo de uma aplicacao.

# REACT
    E uma BIBLIOTECA de JS, para criacion de interfaces de usarios,

## DIFERENCIA ENTRE BIBLIOTECA E FRANWORD

## BIBLIOTECA
 A ideia de biblioteca e compratilhar solocoes por meio de funcoes ou metodos.

 REACT facilita a parte de interfaces, utiliza todo el ecosistema de react o solo una parte.

 ### Otras Bibliotecas
 - Moments.js
 - Chart.js
 - Voca
 - mo.js

## FRAMEWORKS

E uma ferramenta cuyo objetico e focar em desenvolver o projeto, nao em detalhes de configuracoes. Tem uma documentacoe e padrones bem definidos.

- Angular
- Vuex
- Ionic
- Next
- EXpress
- LoopBack

## CRIANDO PROJETO EN REACT

    npm create-react-App nomedoprojecto

## PASTAS EM REACT

### node_modules
    Dependencia e bibliotecas

### public
    Archivos  principales e iniciales de React, ele trabalha  como um arquivo estatico e simplemente renderiza informacao (componenete) do lado de cliente.

    Esa informacao e colocada no arquivo estatico index.html

    React manipula DOM y basicamente todo o projeto fica en ese arquivo y redenderizado na div:
####   <div id="root"></div>

    a informacao e simultanea com aquivo index.js que se encuentra na pasta src.

### package.json
Sao todas as dependencias que se tem em um projetos e las bibliotecas que a medida do projeto seja instaladas

## COMPONENTES DE CLASES X FUNCIONAIS
### SINTESYS CLASES

<img src="./Aula_React/img/clases-em-react.png">

### SINTESYS FUNCIONAL

function App() {
  return (
    <div className="App">Ola React</div>
  );
}

export default App;

## COMPONENTES & PROPIEDADES (PROPS)

COMPONENTES: permite centralizar responsabilizar, pode ser reutizado os componentes. 

EXEMPLO:
export default function Button({title}) {}
  
       return (
    <div>{title}</div>
  )
}

PROPIEDADE: {title} receber propiedades de qualquer lugar.

Ele ten dois sintaxis de fazer
1.
export default function Button({title}) {}
       return (
    <button>{title}</button>
  )
}

2.
export default function Button({props}) {
        const { title } = props; 
       return  <button>{title}</button>;
}
# DICA PARA APP.JS 

- Nao se pode colocar en return dos tag lado a lado
- Em case precisar retornar dos componentes, colocar "<> </>".
# CICLO DE VIDA DE UM COMPONENTE (ESTADO)

1. CONSTRUCTOR: Iniciar a construccao = getDerivedStateFromProps

2. COMPONENTE DID MOUNT: Antes de ser mostrado a usuario ele deve ser montado.

3. SHOULD COMPONENT UPDATE

4. RENDER

5. getSnapshotBeforeUpdate

6. COMPONENT DID UPDATE

7. COMPONENT WILL UNMOOUNT


# REATC CLI (CRA = create=reat-app)

Ambiente para aprender React. (SINGLE-PAGE-APLICATION)

Configura seu ambiente de  desenvolcimientopara utilicar las funcionalidades de javaScript

# ADICIONANDO NAVEGACAO NO PROJETO

### REACT ROUTTER 
Permite a navagacao de um projeto, cada tela vai ser um componente.

PAG: v5.react...

INSTALLATION : yarn add react-router-dom

Ele traze un mecanismo para poder trabalhar

BrowserRouter as Router,
Routes,
Route,

#STYLE COMPONENTES

Ajuda a parte visual do projeto.
E uma biblioteca que possibilita escrever codigos CSS dentro do Javascript.

- Permite pasar propiedades (porps) creando ulgumas regras a traves de a siguente sintaxis:

TEMPLETE STRING ${(props) => { props.Variant}} (receve uma funcao)
o  desestruturado ${({Variant})=> {}}

VALIDAR
${({Variant})=> variant !== "primary" && css'//incluye un codigo css


## INSTALACAO CONFIGURACAO

yarn add styled-components

# HOOKS

Permite o uso de varios recursos de forma simples atraves de funcoes.

Eles ajudam a organizar a logica utilizada dentro dos compomentes.

## TIPOS

## useStates

E uma funcoe que e utilizado para almacenar e lidar com as alteracoes do estados dentro de um componente.

ESTADO: e o estado de algun comportamiento dentro de un componente.

EXEMPLO:
inpunt: carregando. 

### Como funciona
    -Ele receve um estado inical
    -Ele retorna um array : un estado com el valor dele (name) e uma funcoe para alterar ese estado (setName)

            const Teste = () => {
                const[name, setName] = useState('Pablo');

## //como mudar esse estado
                
                const handleChangeName = () => {
                    setName('Jose')
                }                    

                return (
                    <div>
                        {name}
                        <button onClick={handleChangeName}>Alterar</button>
                     </div>
                
)
               } 
#useEffect

ele vai trabalhar com o ciclo de vida de um componente    

Ele vai gerenciar cuando un componente esta rederizando, sofrendo alguna coisa

            const Teste = () => {
                const[name, setName] = useState('Pablo');

                const handleChangeName = () => {
                    setName('Jose')
                }    
###//como utilizarlo
                useEffect(()=>{

                    alert('renderizei')
               },[name]);                

                return (
                    <div>
                        {name}
                        <button onClick={handleChangeName}>Alterar</button>
                     </div>
                
)
               } 


##useMemo

ele e quem memoriza um calculo, variavel, valor que nao precisa ficar renderizando.

salva referencia en variavel, constantes, 


          const Teste = () => {
                const[name, setName] = useState('Pablo');

                const handleChangeName = () => {
                    setName('Jose')
                }    
###//como utilizarlo
                const calculo = useMemo(() =>{
                    return  10 * ago

            })


##use callback

ele memoriza uma funcao.

# FORMULARIOS CON REACT

Con react hook form

        -Instalar no projeto: npm install react-hook-form

### Codigo necesario para  validar formulario, tomados da pg react hook form
    PASTA INPUT
    import {  Controller } from "react-hook-form";
          < Controller  
           name="checkbox"
           control={control}
           rules={{ required: true }}
           render={({ field }) => <InputText {...field} {...rest} /> }
          />  
        


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();



# TYPESCRIPT

E um superset para javascript

## UTILIDADES:

### Intefaces e Types

mejora a interpretacao do linguaje orinetado a objeto

### Enum

## CONVERTENDO PROJETO DE JS A TS

- Instalacao : npm install -g typescript@next
o
yarn add typescript types/node @types/react  @types/react-dom  @types/jest -D

### Como inicia o rodar TS
npx tsc --init 

### Como saber si installo

ARQUIVO tsconfig.json

despues verficar tela con yarn start

#### Mudar todos arquivos jsx a tsx o js a ts parapoder trabajar con TS



