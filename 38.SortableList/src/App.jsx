import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [sortValue, setSortValue] = useState("");
  const [items, SetItems] = useState(
    [
      { name: "Apples", qty: 5 },
      { name: "Bananas", qty: 8 },
      { name: "Carrots", qty: 12 },
      { name: "Tomatoes", qty: 6 },
      { name: "Potatoes", qty: 15 },
      { name: "Onions", qty: 10 },
      { name: "Garlic", qty: 4 },
      { name: "Broccoli", qty: 3 },
      { name: "Spinach", qty: 7 },
      { name: "Cucumbers", qty: 5 },
      { name: "Peppers", qty: 9 },
      { name: "Lettuce", qty: 2 },
      { name: "Mushrooms", qty: 6 },
      { name: "Zucchini", qty: 4 },
      { name: "Eggplant", qty: 3 },
      { name: "Corn", qty: 11 },
      { name: "Peas", qty: 8 },
      { name: "Green Beans", qty: 6 },
      { name: "Cabbage", qty: 2 },
      { name: "Cauliflower", qty: 3 },
      { name: "Pumpkin", qty: 1 },
      { name: "Sweet Potatoes", qty: 5 },
      { name: "Radishes", qty: 7 },
      { name: "Beetroot", qty: 4 },
      { name: "Asparagus", qty: 3 },
      { name: "Kale", qty: 6 },
      { name: "Leeks", qty: 2 },
      { name: "Celery", qty: 4 },
      { name: "Avocado", qty: 5 },
      { name: "Strawberries", qty: 9 },
      { name: "Blueberries", qty: 6 },
      { name: "Pineapple", qty: 2 }
    ]
  );


  function handleSelect(e) {
    const value = e.target.value;
    setSortValue(value);
    updatedList(value);
  }


  function updatedList(value) {
    const sorted = [...items].sort((a, b) => {
      if (value === "1") return a.name.localeCompare(b.name);
      if (value === "2") return b.name.localeCompare(a.name);
      if (value === "3") return a.qty - b.qty;
      if (value === "4") return b.qty - a.qty;
      return 0;
    });

    SetItems(sorted);
  }

  return (
    <>
      <div className="container">
        <div className="row  | justify-content-center align-items-center">
          <div className="col-md-6">
            <select className="form-select" aria-label="Default select example" value={sortValue} onChange={handleSelect} >
              <option > select an option</option>
              <option value="1">A-Z </option>
              <option value="2">Z-A</option>
              <option value="3">Numerical Ascending</option>
              <option value="4">Numerical Descending</option>
            </select>
          </div>
        </div >
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {items.map((item, index) => (
                <li key={index} class="list-group-item">{item.name}</li>
              ))}
            </ul>
          </div>
        </div>

      </div >
    </>
  )
}

export default App
