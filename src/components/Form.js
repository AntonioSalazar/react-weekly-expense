import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({setExpense, setCreateExpense}) => {

    const [ nameExpense, saveNameExpense ] = useState('');
    const [ amountExpense, saveAmountExpense ] = useState(0);
    const [ error, setError ] = useState(false);

    //When the user adds an expense
    const addExpense = e => {
        e.preventDefault();


        //validate

        if (amountExpense < 1 || isNaN(amountExpense) || nameExpense.trim() === '' ) {
            setError(true);
            return;
        }
        setError(false);

        //build the expense

        const expenseObject = {
            nameExpense,
            amountExpense,
            id: shortid.generate()
        }
        // console.log(expenseObject);
        //take the expense to the main component

        setExpense(expenseObject);
        setCreateExpense(true);

        //reset the form
        saveNameExpense('');
        saveAmountExpense(0);
    }

    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add the things in which you spend your money in here</h2>

            {
                error ? <Error 
                    message="Both fields are neccesary or the amount is incorrect"
                />
                : null
            }
            <div className="field">
                <label>Name of the expense</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder='i.e. Meals'
                    value={nameExpense}
                    onChange={e => saveNameExpense(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Amount of the expense</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder='i.e. $200'
                    value={amountExpense}
                    onChange={e => saveAmountExpense( parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>
     );
}
 
export default Form;