const createPokemonCard = (pokemon) =>{
    const card = document.createElement('div');
    card.classList.add("pokemon-card");  

    const infoDiv = document.createElement('div');
    infoDiv.classList.add("pokemon-info");  

    const name = document.createElement('h2');
    name.classList.add('pokemon-name');
    name.textContent = pokemon.name; 

    const typesDiv = document.createElement('div');
    typesDiv.classList.add('pokemon-types'); 
    
    pokemon.types.forEach((type) => {
        const typeSpan = document.createElement('span');
        typeSpan.classList.add("pokemon-type", type.type.name);
        typeSpan.textContent = type.type.name; 
        typesDiv.appendChild(typeSpan); 
    });

    infoDiv.appendChild(name); 
    infoDiv.appendChild(typesDiv); 

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('pokemon-image-container');
    
    const image = document.createElement('img');
    image.classList.add('pokemon-image');
    image.src = pokemon.sprites.front_default; 
    image.alt = pokemon.name; 
    
    imageContainer.appendChild(image);
    
    card.appendChild(infoDiv); 
    card.appendChild(imageContainer);
    
    return card; 
}; 

const loadPokemon = async () => {
    const pokemonGrid = document.getElementById('pokemon_grid'); 
    try{
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon", { params: { limit: 40 } });
        const pokemons = response.data.results;

        pokemonGrid.innerHTML = '';

        for(const pokemon in pokemons){
            const detailResponse = await axios.get(pokemons[pokemon].url);  
            const pokemonCard = createPokemonCard(detailResponse.data);
            pokemonGrid.appendChild(pokemonCard); 
        }

    } catch (error){
        console.log(error);
    }
}; 

document.addEventListener("DOMContentLoaded", loadPokemon);

const searchPorkemon = async () => {
    const searchInput = document.getElementById('pokemon-search').value.toLowerCase();
    if(searchInput){
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchInput}`); 
            const pokemonGrid = document.getElementById('pokemon_grid'); 
            pokemonGrid.innerHTML = '';
            const pokemonCard = createPokemonCard(response.data);
            pokemonGrid.appendChild(pokemonCard);
        }catch(error){
            alert("Pokemon no encontrado. Por favor, verifica el nombre o ID ingresado.");
        }
    }
    else{
        document.addEventListener("DOMContentLoaded", loadPokemon);
    }
}; 

document.getElementById('search-button').addEventListener('click', searchPorkemon);
document.getElementById('pokemon-search').addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        searchPorkemon();
    }
});
/*
document.addEventListener("DOMContentLoaded", () => {
    axios.get("https://pokeapi.co/api/v2/pokemon", { params: { limit: 40 } })
    .then((response) => {
        const pokemonGrid = document.getElementById('pokemon_grid'); 
        const { data } = response;
        data.results.forEach((pokemon) => {
            axios.get(pokemon.url)
            .then((pokemonInfo) => {
                const { data } = pokemonInfo;
                const pokemonCard = createPokemonCard(data);
                pokemonGrid.appendChild(pokemonCard); 
            })
        }); 
    })
    .catch(error => {
        console.log(error); 
    }); 
}); 
*/
