import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TodoItem(todo) {
    return (
      <View style={styles.todoItem}>
        <Text>{todo.name}</Text>
        <Text>{todo.tag}</Text>
      </View>
      
    );
}

const styles = StyleSheet.create({
    todoItem: {
      width: "100%",
      height: "10%",
      alignItems: 'left',
      justifyContent: 'center',
      backgroundColor: 'grey',
      padding: 10,
    },
  });