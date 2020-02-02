import React, {useState} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ExpenseControl from './components/ExpensesControl';

function App() {

  const [budget, saveBudget] = useState(0);
  const [budgetLeft, saveBudgetLeft] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true);
  const [ expensesArray, setExpensesArray ] = useState([]);

  //This function will get executed whenever we add a new expense
  const addNewExpense = expense => {
    setExpensesArray([
      ...expensesArray,
      expense
    ])
  }


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
                  addNewExpense={addNewExpense}
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
