import React, { createContext } from 'react'

export const ExpenseContext = createContext()

export function ExpenseProvider({ children }) {

    

    return (
        <ExpenseContext.Provider>
            {children}
        </ExpenseContext.Provider>
    )
}
