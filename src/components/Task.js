// src/components/Task.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

const Task = ({ task, onEdit, onDelete, onToggle, onCategoryEdit }) => {
  return (
    <View style={styles.taskContainer}>
      {/* Checkbox do oznaczania zadania jako ukończone */}
      <CheckBox checked={task.completed} onPress={onToggle} />

      {/* Tekst zadania, z przekreśleniem, jeśli ukończone */}
      <Text style={[styles.taskText, task.completed && styles.completedText]}>
        {task.title} {task.category ? `(${task.category})` : ''}
      </Text>

      {/* Ikona edycji zadania */}
      <Icon
        name="edit"
        type="material"
        color="blue"
        onPress={onEdit}
        containerStyle={styles.iconContainer}
      />

      {/* Ikona usuwania zadania */}
      <Icon
        name="delete"
        type="material"
        color="red"
        onPress={onDelete}
        containerStyle={styles.iconContainer}
      />

      {/* Ikona edycji kategorii (jeśli kategoria istnieje) */}
      {task.category && (
        <Icon
          name="edit"
          type="material"
          color="green"
          onPress={() => onCategoryEdit(task.category)}
          containerStyle={styles.iconContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  taskText: {
    marginLeft: 10,
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  iconContainer: {
    marginLeft: 10,
  },
});

export default Task;
