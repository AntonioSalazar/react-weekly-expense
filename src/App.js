import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ExpenseControl from './components/ExpensesControl';

function App() {

  const [budget, saveBudget] = useState(0);
  const [budgetLeft, saveBudgetLeft] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true);
  const [ expensesArray, setExpensesArray ] = useState([]);
  const [ expense, setExpense ] = useState({});
  const [ createExpense, setCreateExpense ] = useState(false);


  //UseEffect that will update the budget we have left

  useEffect(() => {
    if (createExpense) {

      //add the new budget
      setExpensesArray([
        ...expensesArray,
        expense
      
      ]);

      //extracts the current expense to the budget
      const budgetMinusExpense = budgetLeft - expense.amountExpense;
      saveBudgetLeft(budgetMinusExpense);

      //return serCreateExpense to false
      setCreateExpense(false);
    }
  }, [expense])


  return (
    <div className="container">
      <header>
        <h1>Weekly expense</h1>

        <div className="main-content content">

          { showQuestion ?

            (
              <Question
                saveBudget={saveBudget}
                saveBudgetLeft={saveBudgetLeft}
                updateQuestion={updateQuestion}
              />
            )

            : (
            <div className="row">
              <div className="one-half column">
                <Form 
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List
                  expensesArray={expensesArray}
                />
                <ExpenseControl
                  budget={budget}
                  budgetLeft={budgetLeft}
                />
              </div>
            </div>
            )
          }
        </div>
      </header>
    </div>
  );
}


export default App;
