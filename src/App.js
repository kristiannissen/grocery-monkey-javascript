import React, {useEffect, useState} from 'react';

import Header from './components/header';
import List from './components/list';
// import './App.css';

const App = () => {
    // State
    const [items, setItems] = useState([])
    // UseEffect
    useEffect(() => {
        fetch("https://grocery-monkey.herokuapp.com/items")
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

  return (
    <div className="">
        <Header title="Hello Kitty" />
        <main><List arr={items} /></main>
      </div>
  );
}

export default App;
