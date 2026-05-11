import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Content from './components/Content';
import Pagination from './components/Pagination';
import './App.css'

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
      .then(res => {
        const total = res.headers.get("x-total-count");
        setTotalPages(Math.ceil(total / limit));

        return res.json();

      })
      .then(json => {
        setData(json)
        setLoading(false);
      })
  }, [page, limit])

  console.log(data);

  return (
    <>
      <div className="container">
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            data.map((value, index) =>
              <Content content={value} id={index} />
            )

          )}
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-md-1">
            <select className="form-select" onChange={(e) => setLimit(e.target.value)} >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
          </div>

          <Pagination pageNo={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </>
  )
}

export default App
