import React from "react";
import seriesData from '../../api/thapa_series.json'
import { Seriescard } from "../Styledcomponents/Styledcard";
// import "../Cssmodules/Card.module.css"

import style from "../Styledcomponents/Styled.module.css"

export const Styledcomponentcard = () => {
    return (
        <>
            <section className={style.container}>
            {/* If use use two classes through css module you can use like this  */}
                <h1 className={`${style.textcenter} ${style.m20}` }>List Of Netflix Series</h1>
                <ul className={`${style.grid} ${style.grid3}`}>
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