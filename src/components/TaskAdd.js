// src/components/TaskAdd.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TaskAdd = ({ onAdd, onCancel }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  // Obsługuje dodawanie nowego zadania
  const handleAdd = () => {
    onAdd({ title, category });
  };

  return (
    <View style={styles.container}>
      <Text>Add Task</Text>

      {/* Pole tekstowe do wprowadzenia tytułu zadania */}
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      {/* Pole tekstowe do wprowadzenia kategorii zadania (opcjonalne) */}
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />

      {/* Przyciski do dodania zadania lub anulowania */}
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
