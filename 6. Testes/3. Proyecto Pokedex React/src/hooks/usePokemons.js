import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../app/features/pokemon/pokemonSlice";

export function usePokemons(){
    const { pokemons, status, error } = useSelector( (state) => state.pokemon );
    const dispatch = useDispatch();
    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchPokemons()); 
        }
    }, [dispatch, status]);
    return {
        pokemons,
        status,
        error
    };
}