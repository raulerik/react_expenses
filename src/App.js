
import './App.css';


import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      date: new Date(2023, 0, 10),
      title:'New book',
      price: 30.99
    },
    {
      date: new Date(2023, 0, 5),
      title:'Ice cream',
      price: 3.99
    }
  ]
    const addExpenseHandler = (expense) => {
      console.log('In App.js')
      console.log(expense)
    }

  return (
      <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
      </div>
  );
}

export default App;