export interface IDataDetails {
  id: number;
  name : string;
  height : number;
  weight : number;
  img : string;
  types : Array<string>;
  moves : Array<string>;
}

export interface IGetPokemonDetails {
  loading : boolean;
  data : IDataDetails;
  error ?: any;
}

export interface IGetPokemonSearch {
  loading : boolean;
  data : Array<IPokeResult>;
  error ?: any;
}

export interface IPokeResult {
    id: number;
    img: string;
    name: string;
    types: Array<string>;
}

export interface IPokedexState {
    offset: number;
    limit: number;
    listOfResults: Array<IPokeResult>;
    pokemonNameDetails: string;
    pokemonNameSearch: string;
    getPokemonDetails: IGetPokemonDetails;    
    getPokemonSearch: IGetPokemonSearch;    
  }
  
  export const defaultPokedexState: IPokedexState = {
    offset: 0,
    limit: 50,
    listOfResults: [],
    pokemonNameDetails: "",
    pokemonNameSearch: "",
    getPokemonDetails: {
      loading: false,
      data: {
        id: -1,
        name : "",
        height : -1,
        weight : -1,
        img : "",
        types : [],
        moves : []
      }
    },
    getPokemonSearch: {
      loading : false,
      data : []
    }
  };
  