import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//components
import AddExpense from './AddExpense'

export default function ExpenseTracker() {

    const initialState = { //needs more values
        expenseName: '', //a string
        expenseAmount: '', //a number
    }

    const [state, setState] = useState(initialState)

    const handleInputChange = (e) => { //when the input changes
        //e.preventDefault()
        setState( { ...state, [e.target.name]: e.target.value } ) // e is not being read correctly by the react native component. More research is required
    }

    return (
        <View>
            <Text>Hello from ExpenseTracker</Text>
            <AddExpense state={state} handleInputChange={handleInputChange} />
        </View>
    )
}
