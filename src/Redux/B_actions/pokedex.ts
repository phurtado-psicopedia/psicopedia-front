import { createAction } from "redux-actions";
import { 
    GET_POKEDEX_DETAILS_FETCHING,
    GET_POKEDEX_DETAILS_SUCCESS,
    GET_POKEDEX_DETAILS_ERROR,

    SET_POKEMON_NAME_DETAILS,

    GET_POKEDEX_SEARCH_FETCHING,
    GET_POKEDEX_SEARCH_SUCCESS,
    GET_POKEDEX_SEARCH_ERROR,

    SET_POKEMON_NAME_SEARCH,
    SET_POKEMON_CONFIG_SEARCH,
    SET_POKEMON_CONFIG_DEFAULT_SEARCH,
    
    CLEAN_POKEDEX
} from "../A_constants/pokedex";

export const onPokedexDetailsFetch = createAction(GET_POKEDEX_DETAILS_FETCHING);
export const onPokedexDetailsSuccess = createAction(GET_POKEDEX_DETAILS_SUCCESS);
export const onPokedexDetailsError = createAction(GET_POKEDEX_DETAILS_ERROR);

export const setPokemonNameDetails = createAction(SET_POKEMON_NAME_DETAILS, (payload : any) => payload );

export const onPokedexSearchFetch = createAction(GET_POKEDEX_SEARCH_FETCHING);
export const onPokedexSearchSuccess = createAction(GET_POKEDEX_SEARCH_SUCCESS);
export const onPokedexSearchError = createAction(GET_POKEDEX_SEARCH_ERROR);

export const setPokemonNameSearch = createAction(SET_POKEMON_NAME_SEARCH, (payload : any) => payload );
export const setPokemonConfigSearch = createAction(SET_POKEMON_CONFIG_SEARCH);
export const setPokemonConfigDefaultSearch = createAction(SET_POKEMON_CONFIG_DEFAULT_SEARCH);

export const cleanPokedex = createAction(CLEAN_POKEDEX);