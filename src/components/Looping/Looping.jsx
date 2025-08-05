import React from "react";
import seriesData from '../../api/thapa_series.json'

export const Netflixcard = () => {
    return (
        <>
            <ul>
                {
                    seriesData.map((current_item) => {
                        return (
                            <li key={current_item.id}>
                                <img src={current_item.img_url} width={'40%'} height={'40%'} />
                                <h2>{current_item.name}</h2>
                                <h4>{current_item.rating}</h4>
                                <p>Summary: {current_item.description}</p>
                                <p>Cast: {current_item.cast}</p>
                                <h4>{current_item.genre}</h4>
                                <button><a href={current_item.watch_url} target="_blank">Watch Now</a></button>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}