import style from "../Cssmodules/Card.module.css"
export const Seriescard = (props) => {

    const { id, img_url, name, rating, description, cast, genre, watch_url } = props.current_item

    const ratingclass = rating >= 8.5 ? style.success : style.yellow
    
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
                    <button className={`${style.buttonbackground} ${ratingclass}`}><a href={watch_url} target="_blank">Watch Now</a></button>
                </div>
            </div>
        </li>
    )

}