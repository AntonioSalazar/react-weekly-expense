import React, { Fragment } from 'react';
import { reviewBudget } from '../helpers';

const ExpensesControl = ({budget, budgetLeft}) => {
    return(
        <Fragment>
            <div className='alert alert-primary'>
                Weekly Expense: ${budget}
            </div>

            <div className={reviewBudget(budget, budgetLeft)}>
                 You have left: ${budgetLeft}
            </div>
        </Fragment>
    )
}

export default ExpensesControl;
