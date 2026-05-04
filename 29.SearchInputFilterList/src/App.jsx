import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState("")

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
    { id: 10, name: "Ruby" },
    { id: 11, name: "Swift" },
    { id: 12, name: "Kotlin" },
    { id: 13, name: "PHP" },
    { id: 14, name: "R" },
    { id: 15, name: "MATLAB" },
    { id: 16, name: "Dart" },
    { id: 17, name: "Scala" },
    { id: 18, name: "Haskell" },
    { id: 19, name: "Elixir" },
    { id: 20, name: "Julia" },
    { id: 21, name: "Perl" },
    { id: 22, name: "Objective-C" },
    { id: 23, name: "Groovy" },
    { id: 24, name: "Assembly" },
    { id: 25, name: "Visual Basic" }
  ];



  const filterData = programmeList.filter((name) => {
    return name.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
  })


  return (
    <>
      <div className="pricing-area">
        <div className="row | justify-content-md-center ">
          <div className="">
            Search
            <input className="form-control" type="text"
              placeholder="Default input"
              aria-label="default input example"
              value={searchTerm}
              onChange={(e) => (setSearchTerm(e.target.value))}></input>
          </div>
          <div className="col-md-4">
            {/* {<ul>
              {filterData.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>} */}
            <ul>
              {programmeList.filter((item) => searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
