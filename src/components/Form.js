import React, {useState} from 'react';

const Form = () => {
    return ( 
        <form>
            <h2>Add the things in which you spend your money in here</h2>
            <div className="field">
                <label>Name of the expense</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder='i.e. Meals'
                />
            </div>

            <div className="field">
                <label>Amount of the expense</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder='i.e. $200'
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