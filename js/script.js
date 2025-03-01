// Cabeçalho do arquivo

const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon =  async (pokemon) => {
//feach é assincrono, então ele não espera a resposta para continuar o código
//para isso usamos o await
//await só pode ser usado dentro de uma função async
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
     //transforma a resposta em json
    //o await faz com que a função espere a resposta da API
    const data = await APIResponse.json();
    return data;
    }
}
//função que renderiza o pokemon na tela
const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';
    const data = await fetchPokemon(pokemon);

    if(data) {
        //nome do pokemon data é o objeto que contém as informações do pokemon
    pokemonImage.style.display = 'block';    
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']//front_default é a imagem do pokemon
    input.value = '';
    searchPokemon = data.id;
    }else{
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found :(';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    input.value = '';
});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon <= 1) {
        return;
    }
   searchPokemon -= 1
    renderPokemon(searchPokemon);
    
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1
    renderPokemon(searchPokemon);
    
  
});


renderPokemon(searchPokemon);


