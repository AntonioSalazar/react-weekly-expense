import React, { Fragment } from 'react';
import { reviewBudget } from '../helpers';
import PropTypes from 'prop-types';

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

ExpensesControl.propTypes = {
    budget: PropTypes.number.isRequired,
    budgetLeft: PropTypes.number.isRequired
}

export default ExpensesControl;
