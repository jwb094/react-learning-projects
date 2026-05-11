import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Table from './components/Table'
import Pagination from './components/Pagination'
import { getUsers, getLength } from './api/users'
import SelectLimits from './components/selectLimits'

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  let totalPage = Math.ceil(getLength() / limit);

  let pageNo;
  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(pageNo);
    pageNo = page;
  }

  function handlePageChange(value) {
    if (value === "&laquo;" || value === "...") {
      setPage(1);
    } else if (value === "lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;" || value === "") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  return (
    <>
      <div className="container">
        <Table users={getUsers(page, limit)} />
        <div className="pagination-container">
          <SelectLimits onLimitChange={setLimit} />
          <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1}
            onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  )
}

export default App
