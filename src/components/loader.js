/**
 * Loader
 */
import React, {useState, useEffect} from 'react';

const Loader = () => {
    const [indicator, setIndicator] = useState("")

    useEffect(() => {
    
    }, [])
    return (<span>{indicator}</span>)
}

export default Loader;
