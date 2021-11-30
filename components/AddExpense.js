import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'


export default function AddExpense({ state, handleInputChange }) {

    const { expenseName, expenseAmount } = state

    return (
        <View>
            <TextInput name="expenseName" placeholder="Name of Expense" value={expenseName} onChangeText={handleInputChange} /><Text>{expenseName}</Text>
            <TextInput name="expenseAmount" placeholder='Amount of Expense' value={expenseAmount} onChangeText={handleInputChange} keyboardType='numeric' /><Text>{expenseAmount}</Text>
        </View>
    )
}
