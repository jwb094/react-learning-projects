import { useState } from 'react'
import './App.css'

function App() {
  const [Item, setItemTerm] = useState("");
  const [todoList, setTodoList] = useState([])
  const [todoListChecked, settodoListChecked] = useState([])
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  function startEdit(index) {
    setEditIndex(index);
    setEditValue(todoList[index]);
  }

  function saveEdit() {
    const updatedList = [...todoList];
    updatedList[editIndex] = editValue;
    setTodoList(updatedList);

    setEditIndex(null);
    setEditValue("");
  }

  function AddItemToList() {
    setTodoList([...todoList, Item]);
    //setTodoList([...todoList, { "name": Item, "checked": false }]);
  }

  function removeItemFromList(deleteValue) {
    const updatedList = todoList.filter((item) => item !== deleteValue);
    //const updatedList = todoList.filter((item) => item.name !== deleteValue);
    setTodoList(updatedList);
  }

  // function handleSelect(e) {
  //   console.log(e)
  //   const value = e.target.value;
  //   const isChecked = e.target.checked;
  //   if (isChecked) {
  //     settodoListChecked([...todoListChecked, value]);
  //   } else {
  //     const newList = todoListChecked.filter((item) => item !== value);
  //     settodoListChecked(newList);
  //   }

  // }
  console.log(todoList);
  return (
    <>
      <div class="container">
        <div className="pricing-area">
          <div className="row | d-flex flex-column align-items-center justify-content-md-center ">
            <h1>   Add Item to DO List</h1>
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
                {/* {todoList.map((item, index) =>
                  <li class="d-flex align-items-center justify-content-between list-group-item" >
                    <span class={todoListChecked.includes(item) && "text-decoration-line-through"}>{item}</span>
                    <div className="d-flex d-row align-items-center">
                      <input class="form-check-input mt-0 me-2"
                        type="checkbox"
                        id={index}
                        value={item}
                        checked={todoListChecked.includes(item)}
                        aria-label="Checkbox for following text input"
                        onChange={handleSelect} />
                      <button type="button" class="btn btn-primary" onClick={() => removeItemFromList(item)}>Delete</button>
                    </div>
                  </li>)}*/}
                {todoList.map((item, index) =>
                  <li key={index} class="d-flex align-items-center justify-content-between list-group-item">

                    {editIndex === index ? (
                      <input
                        className="form-control"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />
                    ) : (
                      <span class={todoListChecked.includes(item) && "text-decoration-line-through"}>
                        {item}
                      </span>
                    )}

                    <div className="d-flex d-row align-items-center">
                      {/* <input
                        class="form-check-input mt-0 me-2"
                        type="checkbox"
                        value={item}
                        checked={todoListChecked.includes(item)}
                        onChange={handleSelect}
                      /> */}

                      {editIndex === index ? (
                        <button class="btn btn-success" onClick={saveEdit}>Save</button>
                      ) : (
                        <button class="btn btn-secondary" onClick={() => startEdit(index)}>Edit</button>
                      )}

                      <button
                        class="btn btn-primary ms-2"
                        onClick={() => removeItemFromList(item)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div >
      </div>
    </>
  )
}

export default App
