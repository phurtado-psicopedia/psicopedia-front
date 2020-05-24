import React, { useEffect } from "react";
import useForm from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { 
    onPokedexSearchFetch,
    setPokemonConfigDefaultSearch,
    setPokemonConfigSearch,
    setPokemonNameSearch 
} from "../../../Redux/B_actions/pokedex";
import { AppState } from "../../../Redux/D_reducers";
import { 
    getPokemonSearch,
    getPokemonNameSearch,
    getListOfResults
} from "../../../Redux/E_selectors/pokedex";


import Template from "../../Template";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Pokedex.module.scss";
import PokemonCard from "../../Components/PokemonCard";

const Home = () => {

    const dispatch = useDispatch();

    const { register, watch, errors, triggerValidation, reset, clearError, handleSubmit } = useForm()
    const onSubmit = (data : any) => { 
        dispatch(setPokemonNameSearch(data.search));
        dispatch(setPokemonConfigSearch());
        dispatch(onPokedexSearchFetch());   
        reset();     
    }
    
    const handleClear = () => {
        reset();
        clearError();
        dispatch(setPokemonNameSearch(""));
        dispatch(setPokemonConfigDefaultSearch());
        dispatch(onPokedexSearchFetch());
    };

    const PokemonSearch : any = useSelector((state: AppState) => getPokemonSearch(state));
    const PokemonNameSearch : any = useSelector((state: AppState) => getPokemonNameSearch(state));
    const results : Array<any> = useSelector((state: AppState) => getListOfResults(state));

    useEffect(() => {
        if(PokemonNameSearch !== ""){
            dispatch(setPokemonConfigSearch());
        }else{
            dispatch(setPokemonConfigDefaultSearch());
        }
        dispatch(onPokedexSearchFetch());
    },[dispatch, PokemonNameSearch]);

    return (
        <Template>      
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`input-group ${styles.PokedexSearchBar}`}>                
                    <input 
                        name="search"
                        type="text" 
                        ref={ register({ 
                            required: true, 
                            minLength: 3,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        }) }
                        onChange={async () => triggerValidation({ name: 'search' })}
                        className={`form-control ${styles.PokedexSearchInput} ${ (watch("search") === undefined || watch("search") === "") ? "" : (errors.search === undefined ? "is-valid" : "is-invalid") }`} 
                        placeholder="Search a Pokemon!" 
                        aria-label="Search" 
                        aria-describedby="Search" 
                    />

                    <div className="input-group-append">
                        <button type="submit" className={`${styles.PokedexButton} ${styles.Search}`} id="search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <button type="button" onClick={handleClear} className={`${styles.PokedexButton} ${styles.Clean}`} id="clean-button">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>               
                    { (watch("search") === undefined || watch("search") === "") ? "" : <hr /> }
                    <div className={`valid-feedback ${styles.Feedback}`}>...Click search button to discover new pokemons!</div>
                    <div className={`invalid-feedback ${styles.Feedback}`}>...Minimum 3 letters, only letters are allowed.</div>
                </div>
                
            </form>

            { PokemonSearch.loading ? (
                <div className={styles.PokedexResultsTitle}>Loading!...</div>
            ) : (
                <>
                    { results.length > 0 ? (
                        <>                                
                            <div className="container">
                                <div className="row">
                                    { results.map((pokemon: any, index) => {
                                        return (
                                            <div key={index} className="col-4 col-md-3 col-lg-3 col-xl-3"> 
                                                <PokemonCard linkTo={`/pokedex/${pokemon.name}`} name={pokemon.name} types={pokemon.types} img={pokemon.img} />
                                            </div>
                                        )                           
                                    })}                            
                                </div>                       
                            </div>
                        </>                        
                    ): (
                        <div className={styles.PokedexResultsTitle}>No Results..., search something different and discover the world of pokemons!</div>
                    )} 
                </>
            )}
          
  



        </Template>
    );
};

export default Home;