import { use, useEffect, useState } from "react"
import "./pokemon.css"

export const Pokemonapi = () => {
    const [apidata, Setapidata] = useState(null)
    const [loading, Setloading] = useState(true)
    const [error, Seterror] = useState(null)
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    // Using Promises for fetch api in react js 
    // const FetchPokemon = () => {
    //     fetch(API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             Setapidata(data)
    //             Setloading(false)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             Seterror(error)
    //             Setloading(false)
    // })
    // }

    // Async Await For fetch api in react js 
    const FetchPokemon = async () => {
        try {
            const res = await fetch(API)
            const data = await res.json()
            Setapidata(data)
            Setloading(false)
        } catch (error) {
            console.log(error)
            Seterror(error)
            Setloading(false)
        }
    }
    useEffect(() => {
        FetchPokemon()
    }, [])
    if (loading) {
        return (
            <section>
                <h1>Loading</h1>
            </section>
        )
    }
    console.log(apidata)
    if (error) {
        return (
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
                        <img src={apidata.sprites.other.dream_world.front_default} />
                        <h2>{apidata.name}</h2>
                        <div className="pokemon_flex">
                            <div>
                                <h3>Height: {apidata.height}</h3>
                            </div>
                            <div>
                                <h3>Weight: {apidata.weight}</h3>
                            </div>
                            <div>
                                <h3>Speed: {apidata.stats[5].base_stat}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}