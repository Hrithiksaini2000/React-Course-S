import style from "../Styledcomponents/Styled.module.css"

import styled from "styled-components"

export const Seriescard = (props) => {

    const { id, img_url, name, rating, description, cast, genre, watch_url } = props.current_item

    const ratingclass = rating >= 8.5 ? style.success : style.yellow

    // Styled.button here button is a tag name 
     const ButtonSaini= styled.button({
            padding: "10px",
            backgroundColor: `${rating >= 8.5 ? "#65E165" : "#E1E182"}`
    })

    return (
        <li className={style.listyle} key={id}>
            <div className={style["white-bg"]}>
                <img src={img_url} width={'100%'} height={'60%'} />
                <div className={style.detailpadding}>
                    <h2>Name: {name}</h2>
                    <h4>rating: <span className={`${style.rating} ${ratingclass}`}>{rating}</span></h4>
                    <p>Summary: {description}</p>
                    <p>Cast: {cast}</p>
                    <h4>{genre}</h4>
                    <ButtonSaini><a href={watch_url} target="_blank" className={style.ancher}>Watch Now</a></ButtonSaini>
                </div>
            </div>
        </li>
    )

}