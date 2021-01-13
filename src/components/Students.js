import React from 'react';
import {Switch, Route, NavLink, Redirect, Link, useParams} from 'react-router-dom';


export default function Students ({
    name,
    id,
}) {




    return (
        <div>
        <Link to={`/student/${id}`}>{name}</Link>

        </div>

    )
}