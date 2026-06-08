import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);

  // useEffect(() => {
  //   // fetch(`https://zenquotes.io/api/quotes`)
  //   //   .then((res) => res.json())

  //   //   .then(data => {
  //   //     setData(data[0])
  //   //   })
  //   //   .catch((err) => {
  //   //     console.error(err);
  //   //   });
  //   fetch("https://zenquotes.io/api/quotes")
  //     .then((res) => res.json())
  //     .then((data) => setQuotes(data));
  // }, [])
  //console.log(data);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random?limit=5")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  console.log(quotes);

  return (
    <>
      <section className="container">
        <div class="row ">
          <div class="d-flex  flex-column  align-items-center">
            {
              quotes.map(quote =>
                <div class="card" style={{ width: '18rem' }}>
                  <div class="card-body">
                    <h5 class="card-title">{quote.author}</h5>
                    <p class="card-text">{quote.content}</p>
                    {quote.tags?.length > 0 && (
                      <>
                        <h6>Tags</h6>
                        <ul style={{ listStyleType: 'none' }}>
                          {
                            quote.tags.map(tag =>
                              <li>{tag}</li>
                            )
                          }
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              )
            }
          </div>
        </div>




      </section >
    </>
  )
}

export default App
