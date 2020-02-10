import React from 'react';
import PropTypes from 'prop-types';

const IndividualExpense = ({individualExpense}) => (
    <li >
        <p>
            {individualExpense.nameExpense}
            <span className="expense">${individualExpense.amountExpense}</span>
        </p>
    </li>
)

IndividualExpense.propTypes = {
    individualExpense: PropTypes.object.isRequired
}

export default IndividualExpense;