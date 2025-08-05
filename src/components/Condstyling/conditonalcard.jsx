// How Conditional styling is working using ternary operators and template literals
// second method how condional styling using variables

// First Method 

// export const Seriescard = (props) => {

//     const { id, img_url, name, rating, description, cast, genre, watch_url } = props.current_item
//     return (
//         <li className="li-style" key={id}>
//             <div className="white-bg">
//                 <img src={img_url} width={'100%'} height={'60%'} />
//                 <div className="detail-padding">
//                                 <h2>Name: {name}</h2>
//                 <h4>rating: <span className={`rating ${rating>=8.5 ? "success" : "yellow"}`}>{rating}</span></h4>
//                 <p>Summary: {description}</p>
//                 <p>Cast: {cast}</p>
//                 <h4>{genre}</h4>
//                 <button className={`button-background ${rating>=8.5 ? "success" : "yellow"}`}><a href={watch_url} target="_blank">Watch Now</a></button>
//                 </div>
//             </div>
//         </li>
//     )

// }

// Second method 
export const Seriescard = (props) => {

    const { id, img_url, name, rating, description, cast, genre, watch_url } = props.current_item

    const ratingclass = rating >= 8.5 ? "success" : "yellow"
    
    return (
        <li className="li-style" key={id}>
            <div className="white-bg">
                <img src={img_url} width={'100%'} height={'60%'} />
                <div className="detail-padding">
                    <h2>Name: {name}</h2>
                    <h4>rating: <span className={`rating ${ratingclass}`}>{rating}</span></h4>
                    <p>Summary: {description}</p>
                    <p>Cast: {cast}</p>
                    <h4>{genre}</h4>
                    <button className={`button-background ${ratingclass}`}><a href={watch_url} target="_blank">Watch Now</a></button>
                </div>
            </div>
        </li>
    )

}