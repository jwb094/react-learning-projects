
import ExpenseItem from "./expenseItem";

function ExpenseList({ expenseList }) {

    return <>
        <ul className="list-group my-4">
            {expenseList.map((item, index) =>
                <ExpenseItem item={item} index={index} />
            )}
        </ul>
    </>
}


export default ExpenseList;