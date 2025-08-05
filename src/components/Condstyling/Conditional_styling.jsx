import React from "react";
import seriesData from '../../api/thapa_series.json'
import { Seriescard } from "./conditonalcard";
import "../Condstyling/conditional_styling.css"

export const Conditionalcard = () => {
    return (
        <>
            <section className="container">
                <h1 className="text-center m-20">List Of Netflix Series</h1>
                <ul className="grid grid-3">
                    {
                        seriesData.map((current_item) => {
                            return (
                                <Seriescard key={current_item.id} current_item={current_item} />
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}