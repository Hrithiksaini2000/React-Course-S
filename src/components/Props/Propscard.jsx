export const Seriescard = (props) => {

    // Destructing Props
    const { id, img_url, name, rating, description, cast, genre, watch_url } = props.current_item
    return (
        <li className="li-style p-6" key={id}>
            <div className="white-bg">
                <img src={img_url} width={'100%'} height={'60%'} />
                <div className="detail-padding">
                                <h2>Name: {name}</h2>
                <h4>rating: {rating}</h4>
                <p>Summary: {description}</p>
                <p>Cast: {cast}</p>
                <h4>{genre}</h4>
                <button className="button-background"><a href={watch_url} target="_blank">Watch Now</a></button>
                </div>
            </div>
        </li>
    )

    // Simple props method 
    //     return (
    //     <li key={props.current_item.id}>
    //         <img src={props.current_item.img_url} width={'40%'} height={'40%'} />
    //         <h2>{props.current_item.name}</h2>
    //         <h4>{props.current_item.rating}</h4>
    //         <p>Summary: {props.current_item.description}</p>
    //         <p>Cast: {props.current_item.cast}</p>
    //         <h4>{props.current_item.genre}</h4>
    //         <button><a href={props.current_item.watch_url} target="_blank">Watch Now</a></button>
    //     </li>
    // )
}