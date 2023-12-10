// src/components/TaskAdd.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TaskAdd = ({ onAdd, onCancel }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    onAdd({ title });
  };

  return (
    <View style={styles.container}>
      <Text>Add Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button title="Add Task" onPress={handleAdd} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default TaskAdd;
