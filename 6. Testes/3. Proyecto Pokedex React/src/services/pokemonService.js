import axios from 'axios';
import API_URL from '../config/api';

export const getPokemon = async (pokemonName) => {
    const response = await axios.get(`${API_URL}/${pokemonName}`);
    return response.data;
};

