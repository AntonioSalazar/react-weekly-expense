import React, {useState} from 'react';


const Form = () => {

    const [ nameExpense, saveNameExpense ] = useState('');
    const [ amountExpense, saveAmountExpense ] = useState(0);

    //When the user adds an expense
    const addExpense = e => {
        e.preventDefault();


        //validate

        //build the expense

        //take the expense to the main component

        //reset the form

    }

    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add the things in which you spend your money in here</h2>
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