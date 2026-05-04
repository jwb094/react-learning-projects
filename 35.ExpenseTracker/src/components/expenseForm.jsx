
function ExpenseForm({ item, setItem, itemAmount, setitemAmount, addItem }) {

    return <>
        <div className="row">
            <div class="input-group mb-3">
                <span class="input-group-text" id="title">Item</span>
                <input type="text" class="form-control" placeholder="e.g Books" aria-label="Name" aria-describedby="title"
                    value={item}
                    onChange={(e) => (setItem(e.target.value))}></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="email">Amount</span>
                <input type="text" class="form-control" placeholder="10.99" aria-label="Email" aria-describedby="email"
                    value={itemAmount}
                    onChange={(e) => (setitemAmount(e.target.value))}></input>
            </div>

            <div class="input-group">

                <button type="button" class="btn btn-primary" onClick={() => addItem()} >Save</button>
            </div>
        </div></>
}


export default ExpenseForm;