/**
 * List
 */
import React from 'react';

const List = ({arr}) => {
    let items = arr.map((i) => {
        return <li key={i.Key}>{i.Name} <span>{i.Store}</span></li>
    })
    return (<ul>{items}</ul>)
}

export default List;
