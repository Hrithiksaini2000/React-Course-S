import { use, useEffect, useState } from "react"
import "./pokemon.css"

export const Pokemonapi = () => {
    const [apidata, Setapidata] = useState(null)

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const FetchPokemon = () => {
        fetch((API))
            .then((res) => res.json())
            .then((data) => {
                Setapidata(data)
            })
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        FetchPokemon()
    }, [])
    if(!apidata){
        return(
            <section>
            <h1>Loading</h1>
            </section>
        )
    }
    return (
        <>
        <section>
            <h1>Let Catch Pokemon</h1>
            <div className="pokemon_img">
                <div className="pokemon_name">
                <img src={apidata.sprites.other.dream_world.front_default}/>
                    <h2>{apidata.name}</h2>
                </div>
            </div>
        </section>
        </>
    )
}