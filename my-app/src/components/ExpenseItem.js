import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021,2,28)
    const expenseItem = 'Insurance'
    const expenseAmount = 19.99

    return (
    <div className='expense-item'>
      <div>{expenseDate.toUTCString()}</div>
      <div className='expense-item__description'>
        <h2> {expenseItem} </h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
