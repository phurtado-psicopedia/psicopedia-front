import { all, fork } from 'redux-saga/effects';
import { watchPokedexStart } from './pokedex';

export default function* root() {
    yield all([
      fork(watchPokedexStart)    
    ])
}