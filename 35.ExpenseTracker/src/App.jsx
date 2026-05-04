import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import ExpenseForm from './components/expenseForm'
import ExpenseList from './components/expenseList';

import './App.css'

function App() {
  const [item, setItem] = useState("");
  const [itemAmount, setitemAmount] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [total, setTotal] = useState(0)


  function addItem() {
    if (!item.trim() || !itemAmount) return;
    setExpenseList([...expenseList, { item: item, itemAmount: Number(itemAmount) }]);
    setItem("");
    setitemAmount(0);


  }

  useEffect(() => {
    const newTotal = expenseList.reduce(
      (sum, item) => sum + Number(item.itemAmount),
      0
    );
    setTotal(newTotal);
  }, [expenseList]);

  return (
    <>
      <div className="container-fluid">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0">35.Expense Tracker</h3>
            </div>
          </header>

          <div className="row">
            <div className="col-md-12">
              <ExpenseForm item={item} setItem={setItem} itemAmount={itemAmount} setitemAmount={setitemAmount} addItem={addItem} />
            </div>
            <div className="col-md-12">
              <ExpenseList expenseList={expenseList} />
            </div>

            <div className="mt-2">
              {total !== 0 &&
                <div class="alert alert-primary" role="alert">
                  Total: £{total.toFixed(2)}
                </div>}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
