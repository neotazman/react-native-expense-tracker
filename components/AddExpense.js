import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'


export default function AddExpense({ state, handleInputChange }) { //it's not reading the handleInputChange event properly. need to research more about react-native

    const { expenseName, expenseAmount } = state
    

    return (
        <View>
            <TextInput name="expenseName" placeholder="Name of Expense" value={expenseName} onChangeText={handleInputChange} />{expenseName && <Text>{expenseName}</Text>}
            <TextInput name="expenseAmount" placeholder='Amount of Expense' value={expenseAmount} onChangeText={handleInputChange} keyboardType='numeric' />{expenseAmount && <Text>{expenseAmount}</Text>}
        </View>
    )
}
