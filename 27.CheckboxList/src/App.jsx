import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const programmeList = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Python" },
    { id: 3, name: "Java" },
    { id: 4, name: "C" },
    { id: 5, name: "C++" },
    { id: 6, name: "C#" },
    { id: 7, name: "Go" },
    { id: 8, name: "Rust" },
    { id: 9, name: "TypeScript" },
    { id: 10, name: "Ruby" }
  ];


  const [selectedList, setSelectedList] = useState([]);

  function handleSelect(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedList([...selectedList, value]);
    } else {
      const newList = selectedList.filter((item) => item !== value);
      setSelectedList(newList);
    }

  }
  return (
    <>
      <section id="center">
        <div>
          <h1>27.Checkbox List</h1>
        </div>
        {selectedList.length === 0 ? "NO items have been selected" :
          <div className="d-flex">
            Selected Programme Languages:
            <ul className="d-flex flex-row column-gap-3">

              {selectedList.map((item) => (
                <li class="d-flex justify-content-between">{item}</li>
              ))}
            </ul>
          </div>}


        <div>
          {programmeList.map((item, index) => (
            <li key={item.id} class="d-flex justify-content-between">
              <input class="form-check-input mt-0 me-2"
                type="checkbox"
                id={item.id}
                value={item.name}
                checked={selectedList.includes(item.name)}
                aria-label="Checkbox for following text input"
                onChange={handleSelect} />
              <span class="ms-2 badge text-bg-secondary">{item.name}</span>
            </li>
          ))}
        </div>
      </section>


    </>
  )
}

export default App
