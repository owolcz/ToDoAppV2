// src/components/Task.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <CheckBox checked={task.completed} />
      <Text style={styles.taskText}>{task.title}</Text>
      <Icon
        name="edit"
        type="material"
        color="blue"
        onPress={onEdit}
        containerStyle={styles.iconContainer}
      />
      <Icon
        name="delete"
        type="material"
        color="red"
        onPress={onDelete}
        containerStyle={styles.iconContainer}
      />
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
  iconContainer: {
    marginLeft: 10,
  },
});

export default Task;
