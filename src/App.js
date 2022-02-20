import React, {useEffect, useState} from 'react';

import Header from './components/header';
import List from './components/list';
import Toast from './components/toast';
// import './App.css';

const App = () => {
    // State
    const [items, setItems] = useState([])
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    // UseEffect
    useEffect(() => {
        fetch("https://grocery-monkey.herokuapp.com/items")
        .then(response => response.json())
        .then(data => {
            // Update state for items
            setItems(data)
            // Update toast
            setShowToast(true)
            setToastMessage("Data loaded...")
        })
    }, [])

  return (
    <div className="">
        <Header title="Hello Kitty" />
        <main><List arr={items} /></main>
        <Toast message={toastMessage} show={showToast} onHide={() => setShowToast(false)} />
      </div>
  );
}

export default App;
