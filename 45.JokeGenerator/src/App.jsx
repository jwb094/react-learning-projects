import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokeData = async () => {
      try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/Any?type=twopart&amount=5`);
        const result = await response.json()
        setJokes(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchJokeData();
  }, [])
  return (
    <>
      <section className="container">
        <div class="row ">
          <div class="d-flex  flex-column  align-items-center">
            {jokes.jokes.map((joke, index) =>

              <div class="card">
                <div class="card-body">
                  <b>{joke.setup}</b>
                  <p>{joke.delivery}</p>
                </div>
              </div>
            )

            }
          </div>
        </div>
      </section>
    </>
  )
}

export default App
