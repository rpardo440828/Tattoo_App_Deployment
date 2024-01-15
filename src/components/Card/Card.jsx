import React from 'react'
import "./Card.css";
export const Card = (props) =>
{
    return(
        <div className="Card">
            <div className="Card__body">
            <img src={props.img} className="Card__img" />    {/*Ex. Picture of tattoo*/}
            </div>
        </div>
    );
};

export default Card;