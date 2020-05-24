import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.scss";

const PokemonCard = ({ linkTo="/pokedex/pikachu", name="Pikachu", types=["electric", ""], img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} : any) => {

    return (
        <>
            <Link to={linkTo} className={`${styles.PokemonCard}`}>
                <div className={`${styles.PokemonCardName}`}>{name}</div>
                <div className={`${styles.PokemonCardImage}`}><img src={img} alt={name} />
                </div>
                {types.map((type: any, index : any) => {
                    let [ pokeType, pokeName] = stylePokemonType(type)
                    return <div key={index} className={`${styles.PokemonCardType} ${pokeType}`}>{pokeName}</div>;
                })}                 
            </Link>
        </>
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

export default PokemonCard;