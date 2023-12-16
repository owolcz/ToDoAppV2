// src/components/TaskEdit.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TaskEdit = ({ onSave, onCancel, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');

  // Obsługuje zapisanie zmian i anulowanie
  const handleSave = () => {
    onSave({ title });
  };

  return (
    <View style={styles.container}>
      <Text>Edit Task</Text>

      {/* Pole tekstowe do edycji tytułu zadania */}
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      {/* Przyciski do zapisania zmian lub anulowania */}
      <Button title="Save" onPress={handleSave} />
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

export default TaskEdit;
