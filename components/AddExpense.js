import React, { useState } from 'react'

export default function AddExpense() {

    const initialState = {
        expenseName: '',
        expenseAmount: 0,
    }

    const [state, setState] = useState(initialState)

    const handleInputChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <input name="expenseName" value={state.expenseName} onChange={handleInputChange} />
            <input name="expenseAmount" value={state.expenseAmount} onChange={handleInputChange} />
        </div>
    )
}
