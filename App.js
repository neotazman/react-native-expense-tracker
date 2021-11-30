import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ExpenseTracker from './components/ExpenseTracker'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Tristan</Text>
      <StatusBar style="auto" />
      <ExpenseTracker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
