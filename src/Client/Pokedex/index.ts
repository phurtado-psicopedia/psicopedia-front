import Axios from "axios";
import { call, put, select } from "redux-saga/effects";
// import { Config } from "../../Config/constants/env_variables";
import { 
    onPokedexSearchSuccess,
    onPokedexSearchError,
    onPokedexDetailsSuccess,
    onPokedexDetailsError
} from "../../Redux/B_actions/pokedex";
// import { IPokeResult } from "../../Redux/C_states/IPokedex";
import {
    getOffset,
    getLimit,
    getPokemonNameDetails,
    getPokemonNameSearch
} from "../../Redux/E_selectors/pokedex";

const Config = {
    URL_ENDPOINT_POKEAPI_V2: "https://pokeapi.co/api/v2"
}


const getPokedexDetails = (pokemonName: string = "") => {
    return Axios.get(Config.URL_ENDPOINT_POKEAPI_V2 + "/pokemon/"+pokemonName);
  };
export function* handlePokedexDetailsFetch() {
    try {
        const pokemonName : string = yield select(getPokemonNameDetails);
        const response = yield call(getPokedexDetails, pokemonName);

        if (response) {
            const { data } = response;
            let {
                id,
                name,
                height,
                weight,
                sprites:{
                    front_default,
                },
                moves,
                types
            } = data;
            
            if(Array.isArray(moves)){
                moves = moves.map((item) => { return item.move.name; })
            }else{
                moves = [];
            }            
            
            if(Array.isArray(types)){
                types = types.map((item) => { return item.type.name; })
            }else{
                types = [];
            }

            const Details = {
                id,
                name,
                height,
                weight,
                img: front_default,
                moves,
                types,
            }            
    
            yield put(onPokedexDetailsSuccess(Details));
        } else {
            yield put(onPokedexDetailsError("ERROR FETCHING. Check Backend server status."));
        }
    } catch (e) {
        yield put(onPokedexDetailsError(e.toString()));
    }
}


const getPokedexSearch = (offset: number, limit: number) => {
  return Axios.get(Config.URL_ENDPOINT_POKEAPI_V2 + "/pokemon", {
    params: {
      offset,
      limit
    }
  });
};
export function* handlePokedexSearchFetch() {
  try {
    const offset : number = yield select(getOffset);
    const limit : number = yield select(getLimit);    
    const pokemonName : string = yield select(getPokemonNameSearch);

    const response = yield call(getPokedexSearch, offset, limit);
    let { data:{ results } } = response; 
    
    if (results && Array.isArray(results)) {
        
        results = results.map((item: any, index: any) => { 
            return item.name; 
        });
        
        let Search : any = [];

        if(pokemonName===""){
            Search = results;
        }else {            
            // REGEX search.                
            let regularExpression = new RegExp(`((?:\\w|)${pokemonName.toLowerCase()}(\\w|))`, "g");
            results.forEach((item : string) => {             
                let founded = item.match(regularExpression);                
                if(Array.isArray(founded)){
                    if(founded[0]){
                        Search.push(item);
                    }
                }
            });
        } 

        if(Array.isArray(Search) && Search.length){

            Search = Search.map(async (item : any) => {
                const response : any = await getPokedexDetails(item);
                const { data } = response;
                
                if(data) { 
                    
                    let {
                        id,                        
                        sprites: {
                            front_default,
                        },
                        types
                    } = data;                      
                    
                    if(Array.isArray(types)){
                        types = types = types.map((item) => { return item.type.name; })
                    }else{
                        types = [];
                    }
        
                    return {
                        id,
                        img: front_default,
                        name: item,
                        types,
                    };
                }
        
                return {};                
            })  
            Search = yield Promise.all(Search);
        }  

        yield put(onPokedexSearchSuccess(Search));
    } else {
      yield put(onPokedexSearchError("ERROR FETCHING. Check Backend server status."));
    }
  } catch (e) {
    yield put(onPokedexSearchError(e.toString()));
  }
}