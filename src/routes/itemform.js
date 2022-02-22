/**
 *
 */
import React from 'react';
import {useParams} from 'react-router-dom';

const ItemForm = () => {
    let params = useParams();
    return (<div>Item Form {params.id}</div>)
}

export default ItemForm
