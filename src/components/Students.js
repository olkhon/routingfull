import React from 'react';
import {Switch, Route, NavLink, Redirect, Link} from 'react-router-dom';


export default function Students ({
    name,
    id,
    handleClick
}) {




    return (
        <div>
        <span onClick={(e) => {handleClick (id)}}>{name}</span>

        </div>

    )
}