import React, { useState } from 'react'
import "./styles.css"

function App() {

  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])

  // helper function

  function addItem() {

    if(!newItem) {
      alert("Enter an item.")
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value : newItem
    }

    setItems(oldList => [...oldList, item]);
    setNewItem("")
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id != id)
    setItems(newArray)
  }

  return (
    <div className='container'>
      <h1 className='header-title'>ToDo List App</h1>
      <input
        type="text"
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button className='add-btn' onClick={() => addItem()}>Add</button>
      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button className='delete-btn' onClick={() => deleteItem(item.id)}>❌</button></li>
          )
        })}
      </ul>
    </div>
  )
}



export default App;
