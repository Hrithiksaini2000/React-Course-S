import { use, useEffect, useState } from "react"
import "./pokemon.css"

export const Pokemonapi = () => {
    const [apidata, Setapidata] = useState(null)
    const [loading, Setloading] = useState(true)
    const [error, Seterror] = useState(null)
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const FetchPokemon = () => {
        fetch((API))
            .then((res) => res.json())
            .then((data) => {
                Setapidata(data)
                Setloading(false)
            })
            .catch((error) => {
                console.log(error)
                Seterror(error)
                Setloading(false)
    })
    }
    useEffect(() => {
        FetchPokemon()
    }, [])
    if(loading){
        return(
            <section>
            <h1>Loading</h1>
            </section>
        )
    }
console.log(apidata)
    if(error){
        return(
            <section>
            <h1>Error: {error.message}</h1>
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
                    <div>
                        <h3>{apidata.height}</h3>
                        <h3>{apidata.weight}</h3>
                        <h3>{apidata.stats[5].base_stat}</h3>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}