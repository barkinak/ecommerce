import React from "react"

// All ratings with decimal point will be evaluated to half star
const Stars = (props) => {
    const starsArray = []
    let rating = props.rating;
    let count = 5;
    let index = 0;
    for (let i = 1; i <= Math.floor(rating); i++) {
        index++;
        starsArray.push(<i key={index} className="star-rating-icon ci-star-filled active"></i>);
        count--;
    }
    if (rating % Math.floor(rating) !== 0){
        index++;
        count--;
        starsArray.push(<i key={index} className="star-rating-icon ci-star-half active"></i>);
    }
    for (let i = 0; i < count; i++) {
        index++;
        starsArray.push(<i key={index} className="star-rating-icon ci-star"></i>);
    }
    return <div className={props.className}>{starsArray}</div>
}

export default Stars