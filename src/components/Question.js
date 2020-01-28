import React, {Fragment, useState} from 'react';
import Error from './Error';

const Question = ({saveBudget, saveBudgetLeft, updateQuestion}) => {

    const [initialBudget, setBudget ] = useState(0);

    //Error state
    const [error, setError] = useState(false);

    //This function will get executed each time a user writes something in the input tag
    const setBudgetState = e => {
        setBudget(parseInt(e.target.value), 10);
    }

    //Submit budget
    const submitBudget = e => {
        e.preventDefault();

        //validate
        if (initialBudget < 1 || isNaN(initialBudget) ) {
            setError(true);
            return;
        }
        //If pass the validation

        setError(false);
        saveBudget(initialBudget);
        saveBudgetLeft(initialBudget);
        updateQuestion(false);
    }

    return (  
        <Fragment>
            <h2>How much money do you have available per week?</h2>

            {error ? <Error message="Weekly expense is incorrect"/> : null}
            <form
                onSubmit={submitBudget}
            >
                <input
                    type="number"
                    placeholder="Enter the money you can spend per week in here"
                    className="u-full-width"
                    onChange={setBudgetState}
                />
                
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Set Budget"
                />
            </form>
        </Fragment>
    );
}
 
export default Question;