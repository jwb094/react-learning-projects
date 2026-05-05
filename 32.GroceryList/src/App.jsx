import { useState } from 'react'
import './App.css'

function App() {
  const [Item, setItemTerm] = useState("");
  const [todoList, setTodoList] = useState([]);

  /** Increase Item Quantity */
  function increaseQty(index) {
    const updatedList = [...todoList];
    updatedList[index].qty += 1;
    setTodoList(updatedList);
  }
  /** Decrease Item Quantity */
  function decreaseQty(index) {
    const updatedList = [...todoList];

    if (updatedList[index].qty > 1) {
      updatedList[index].qty -= 1;
    } else {
      // optional: remove item if qty hits 0
      updatedList.splice(index, 1);
    }

    setTodoList(updatedList);
  }

  /* Add A item from the List */
  function AddItemToList() {
    if (!Item.trim()) return;
    setTodoList([...todoList, { name: Item, qty: 1 }]);
    setItemTerm("");

  }
  /* Delete A item from the List */
  function removeItemFromList(deleteValue) {
    const updatedList = todoList.filter((_, item) => item !== deleteValue);
    setTodoList(updatedList);
  }
  return (
    <>
      <div class="container">
        <div className="pricing-area">
          <div className="row | d-flex flex-column align-items-center justify-content-md-center ">
            <h1>  Add Item Shopping List</h1>
            <div className="d-flex col-md-4">

              <input className="form-control" type="text"
                placeholder="Default input"
                aria-label="default input example"
                value={Item}
                onChange={(e) => (setItemTerm(e.target.value))}></input>
              <button type="button" class="btn btn-primary" onClick={() => AddItemToList()}>Add</button>
            </div>
            <div className="mt-5 col-md-4">
              <ul class="list-group">
                {todoList.map((item, index) =>
                  <li className="d-flex align-items-center justify-content-between list-group-item">
                    <span class="">
                      {item.name} (x {item.qty})
                    </span>
                    <div className="d-flex d-row align-items-center">
                      <button class="btn btn-success me-1" onClick={() => increaseQty(index)}>+</button>
                      <button class="btn btn-warning me-1" onClick={() => decreaseQty(index)}>-</button>
                      <button class="btn btn-primary ms-2" onClick={() => removeItemFromList(item)}>Delete</button>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
