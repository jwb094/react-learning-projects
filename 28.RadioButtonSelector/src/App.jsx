import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
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


  const [selectedRadioButton, setselectedRadioButton] = useState("");


  // const [selectedList, setSelectedList] = useState([]);

  function handleSelect(e) {
    // e.preventDefault();
    // const value = e.target.value;
    // const isChecked = e.target.checked;
    // console.log(e)
    // if (isChecked) {
    //   setselectedRadioButton(value);
    // } else {
    //   //const newList = selectedList.filter((item) => item !== value);
    //   setselectedRadioButton("");
    // }
    setselectedRadioButton(e.target.value);

  }
  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>28.Radio Button Selector</h1>
        </div>

        {selectedRadioButton !== "" ? <span> {selectedRadioButton} was selected    </span> : <span> No button was selected   </span>}
        <div onChange={handleSelect}>
          {programmeList.map((item) => (
            <li key={item.id} class="d-flex justify-content-between">
              <input className="form-check-input mt-0 me-2"
                type="radio"
                id={item.id}
                name="programmingLanguage"
                value={item.name}
                checked={selectedRadioButton === item.name}
                aria-label="Checkbox for following text input"

              />
              <span class="ms-2 badge text-bg-secondary">{item.name}</span>
            </li>
          ))}
        </div>

      </section >


    </>
  )
}

export default App
