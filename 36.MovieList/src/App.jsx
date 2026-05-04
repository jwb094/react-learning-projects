import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch('https://api.imdbapi.dev/titles')
      .then(res => res.json())
      .then((data) => setMoviesList(data.titles));
  }, [])

  console.log(moviesList);
  return (
    <>
      <div className="container-fluid">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0">36.Movie List</h3>
            </div>
          </header>
          <div className="row">
            {
              moviesList.map((movie) =>
                <div class="card" style={{ width: "18rem", padding: "1rem" }} key={movie.id}>
                  <img src={movie.primaryImage.url} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{movie.primaryTitle}</h5>
                    <p class="card-text"><i class="bi bi-pencil"></i>{movie.plot}</p>
                    <i class="bi bi-calendar"></i> {movie.startYear}
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default App
