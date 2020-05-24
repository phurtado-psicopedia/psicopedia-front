import React, { useEffect, useContext } from "react";
import { withRouter, __RouterContext } from "react-router";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { 
    onPokedexDetailsFetch,
    setPokemonNameDetails
} from "../../../Redux/B_actions/pokedex";
import { AppState } from "../../../Redux/D_reducers";
import { getPokemonDetails } from "../../../Redux/E_selectors/pokedex";

import Template from "../../Template";


import { POKEDEX_PATH } from "../../../Config/constants/ROUTER_URLs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFingerprint,
    faArrowLeft, 
    faStarOfLife,
    faAngleDoubleUp,
    faWeight,
    faFire,
    faAngleRight,
    faChartLine } from "@fortawesome/free-solid-svg-icons";

import styles from "./PokemonDetail.module.scss";

const useRouter = () => useContext(__RouterContext);
interface IPokemonDetails {
    id : number;
    name : string;
    height : number;
    weight : number;
    img : string;
    types : Array<string>;
    moves : Array<string>;
}

const PokemonDetail = () => {
    
    const router = useRouter();
    const { match } = router;

    let pokeName = match.url.replace(`${POKEDEX_PATH}/`, "");

    console.log(pokeName)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPokemonNameDetails(pokeName));
        dispatch(onPokedexDetailsFetch());
    },[dispatch, pokeName]);

    const PokemonDetails : any = useSelector((state: AppState) => getPokemonDetails(state));
   
    const { loading, data } = PokemonDetails;

    const {
        id,
        name,
        height,
        weight,
        img,
        types,
        moves,       
    } : IPokemonDetails = data;
    
    return (
        <Template>
            <Link to={POKEDEX_PATH} className={""}><FontAwesomeIcon icon={faArrowLeft} /> Return to pokedex...</Link>

            { loading ? (
                <div className={styles.PokedexDetailsTitle}>Loading!...</div>
            ) : (
                <>
                    <div className={`${styles.PokemonStart}`}>
                        <div className={`${styles.PokemonLeftStart}`}>
                            <div className={`${styles.PokemonDetailID}`}>
                                <p><FontAwesomeIcon icon={faFingerprint} /> ID {id}</p>
                            </div>
                            <div className={`${styles.PokemonDetailHead}`}>
                                <div className={`${styles.PokemonDetailHeadName}`}>{name}</div>
                                <div className={`${styles.PokemonDetailHeadImage}`}><img src={img} alt={name} /></div>
                                <>
                                    {Array.isArray(types) && types.map((type: any, index : any) => {
                                        let [ pokeType, pokeName] = stylePokemonType(type)
                                        return <div key={index} className={`${styles.PokemonDetailHeadType} ${pokeType}`}>{pokeName}</div>;
                                    })}                                                   
                                </>                            
                            </div>
                        </div>
                        
                        <div className={`${styles.PokemonRightStart}`}>
                            <div className={`${styles.PokemonDetailSectionTitle}`} style={{ color: "#5BA85F" }}>
                                <p><FontAwesomeIcon icon={faStarOfLife} /> Specs</p>
                            </div>
                            <div className={`${styles.PokemonDetailSection} ${styles.Specs}`}>
                                <p><FontAwesomeIcon icon={faAngleDoubleUp} />  <b>Height:</b> {height} decimetres</p>
                                <p><FontAwesomeIcon icon={faWeight} />  <b>Weight:</b> {weight} hectograms</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.PokemonDetailSectionTitle}`} style={{ color: "#BF4240" }}>
                        <p><FontAwesomeIcon icon={faFire} /> Movements list</p>
                    </div>
                    <div className={`${styles.PokemonDetailSection} ${styles.MovementsList}`}>
                        <ul className="list-group list-group-flush" style={{ width: "100%" }}>
                            { Array.isArray(moves) && moves.map((move : any, index : any) => {
                                return <li key={index} className="list-group-item"><FontAwesomeIcon icon={faAngleRight} /> {move}</li>
                            })}                                    
                        </ul>
                    </div>

                    <div className={`${styles.PokemonDetailSectionTitle}`} style={{ color: "#993fA9" }}>
                        <p><FontAwesomeIcon icon={faChartLine} /> Evolution <i>(future improvement)</i></p>
                    </div>    
                </>
            )}        
        </Template>
    )
}

const stylePokemonType = (typeName : any) => {
    
    let type = styles.Undetermined;    
    let name = "???";

    switch(typeName){
        case "normal": type = styles.Normal; name="NORMAL"; break;
        case "fire": type = styles.Fire; name="FIRE"; break;
        case "fighting": type = styles.Fighting; name="FIGHTING"; break;
        case "water": type = styles.Water; name="WATER"; break;
        case "flying": type = styles.Flying; name="FLYING"; break;
        case "grass": type = styles.Grass; name="GRASS"; break;
        case "poison": type = styles.Poison; name="POISON"; break;
        case "electric": type = styles.Electric; name="ELECTRIC"; break;
        case "ground": type = styles.Ground; name="GROUND"; break;
        case "psychic": type = styles.Psychic; name="PSYCHIC"; break;
        case "rock": type = styles.Rock; name="ROCK"; break;
        case "ice": type = styles.Ice; name="ICE"; break;
        case "bug": type = styles.Bug; name="BUG"; break;
        case "dragon": type = styles.Dragon; name="DRAGON"; break;
        case "ghost": type = styles.Ghost; name="GHOST"; break;
        case "dark": type = styles.Dark; name="DARK"; break;
        case "steel": type = styles.Steel; name="STEEL"; break;
        case "fairy": type = styles.Fairy; name="FAIRY"; break;
        default:
            type = styles.Undetermined;
    }    

    return [type, name];
}

export default withRouter(PokemonDetail);