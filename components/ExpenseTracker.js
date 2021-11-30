import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//components
import AddExpense from './AddExpense'

export default function ExpenseTracker() {

    const initialState = { //needs more values
        expenseName: '', //a string
        expenseAmount: 0, //a number
    }

    const [state, setState] = useState(initialState)

    const handleInputChange = (e) => { //when the input changes
        e.preventDefault()
        console.log(e)
        setState( { ...state, [e.target.name]: e.target.value } )
    }

    return (
        <View>
            <Text>Hello from ExpenseTracker</Text>
            <AddExpense state={state} handleInputChange={handleInputChange} />
        </View>
    )
}
