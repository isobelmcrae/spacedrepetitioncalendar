import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from "./components/header";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import TodoItem from './components/todoItem';


const renderTodos = () => {
  const todos = [{name: 'name', tag: 'tag'}, {name: 'name2', tag: 'tag2'}];
  return todos.map(todo => <TodoItem todo={"todo"} />)
}

export default function App() {
  const [selected, setSelected] = React.useState('');

  return (
    <View style={styles.container}>
      <Header />
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        
        current={moment().format('YYYY-MM-DD')}

        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
      />

      {renderTodos()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },  
});