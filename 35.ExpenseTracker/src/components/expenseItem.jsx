


function ExpenseItem({ item, index }) {

    return <>
        <li key={index} className="list-group-item d-flex flex-row justify-content-between  align-items-start ">
            <div>
                <h1>{item.item}</h1>
                <span className="ml-3">{item.itemAmount}</span>
            </div>

        </li></>
}


export default ExpenseItem;