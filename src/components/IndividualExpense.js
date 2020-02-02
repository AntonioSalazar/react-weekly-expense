import React from 'react'

const IndividualExpense = ({individualExpense}) => (
    <li >
        <p>
            {individualExpense.nameExpense}
            <span className="expense">${individualExpense.amountExpense}</span>
        </p>
    </li>
)

export default IndividualExpense;