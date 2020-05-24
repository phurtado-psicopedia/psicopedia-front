import { AppState } from "../D_reducers/index";

export const getPokedex = (state: AppState) : any => state.pokedex;

export const getOffset = (state: AppState) => {
  const pokedex = getPokedex(state);
  return pokedex.offset;
};

export const getLimit = (state: AppState) => {
  const pokedex = getPokedex(state);
  return pokedex.limit;
};

export const getListOfResults = (state: AppState) => {
  const pokedex = getPokedex(state);
  return pokedex.listOfResults;
};

export const getPokemonNameDetails = (state: AppState) => {
  const pokedex = getPokedex(state);
  return pokedex.pokemonNameDetails;
};

export const getPokemonNameSearch = (state: AppState) => {
  const pokedex = getPokedex(state);
  return pokedex.pokemonNameSearch;
};

export const getPokemonDetails = (state: AppState) => {
  const pokedex = getPokedex(state);
  return pokedex.getPokemonDetails;
};

export const getPokemonSearch = (state: AppState) => {
  const pokedex = getPokedex(state);
  return pokedex.getPokemonSearch;
};