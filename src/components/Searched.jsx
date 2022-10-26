import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/searched.css';

export const Searched = (props,{state}) => {

    return (

        <div className="flexSearched">
            <img src={props.result.image.url} />
            <p>{props.result.name.length > 30 ? props.result.name.slice(0, 40)+ '...': props.result.name} - {props.result.price} €</p>
        </div>

    )
}
