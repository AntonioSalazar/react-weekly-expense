import React from 'react';
import IndividualExpense from './IndividualExpense';

const List = ({expensesArray}) => 
    (
       <div className='expenses'>
           <h2>List of your expenses</h2>
            {
                expensesArray.map(individualExpense => (
                    <IndividualExpense
                        key={individualExpense.id}
                        individualExpense={individualExpense}
                    />
                ))
            }
       </div> 
    )


export default List;