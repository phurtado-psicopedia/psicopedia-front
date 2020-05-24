import { takeEvery } from 'redux-saga/effects';
import {
  handlePokedexSearchFetch,
  handlePokedexDetailsFetch
} from '../../Client/Pokedex';

import {
    GET_POKEDEX_DETAILS_FETCHING,
    GET_POKEDEX_SEARCH_FETCHING
} from "../A_constants/pokedex";

export function* watchPokedexStart() {
  yield takeEvery(GET_POKEDEX_DETAILS_FETCHING, handlePokedexDetailsFetch);
  yield takeEvery(GET_POKEDEX_SEARCH_FETCHING, handlePokedexSearchFetch);  
}
