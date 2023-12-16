// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaskList from './src/components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },

    // Dodaj więcej zadań według potrzeb
  ]);

  const handleTaskEdit = (taskId, taskData) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...taskData } : task
      )
    );
  };

  const handleTaskAdd = (taskData) => {
    setTasks((prevTasks) => [...prevTasks, { id: prevTasks.length + 1, ...taskData }]);
  };

  const handleTaskDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskList
        tasks={tasks}
        onTaskEdit={handleTaskEdit}
        onTaskAdd={handleTaskAdd}
        onTaskDelete={handleTaskDelete}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;
