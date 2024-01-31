import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    const expenses = [
        { 
          date: new Date(2024, 17, 6),
          title: 'New Book',
          price: 30.99
        },
        {
          date: new Date(2023, 9, 6),
          title: 'New jeans',
          price: 69.99 
        }  
    ] 
    return (
        <Card className="expenses">
          <ExpenseItem expenseData={expenses[0]} />
          <ExpenseItem expenseData={expenses[1]} />
        </Card>

    )
}

export default Expenses