import React, { Fragment } from 'react';

const ExpensesControl = ({budget, budgetLeft}) => {
    return(
        <Fragment>
            <div className='alert alert-primary'>
                Weekly Expense: ${budget}
            </div>

            <div className='alert'>
                 You have left: ${budgetLeft}
            </div>
        </Fragment>
    )
}

export default ExpensesControl;
