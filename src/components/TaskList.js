// src/components/TaskList.js
import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import Task from './Task';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';

const TaskList = ({ tasks, categories, onTaskEdit, onTaskAdd, onTaskDelete, onCategoryEdit }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    setModalVisible(true);
    setSelectedTask(task);
  };

  const handleSave = (taskData) => {
    onTaskEdit(selectedTask.id, taskData);
    setModalVisible(false);
    setSelectedTask(null);
  };

  const handleAdd = (taskData) => {
    onTaskAdd(taskData);
    setModalVisible(false);
  };

  const handleToggle = (taskId) => {
    onTaskEdit(taskId, { completed: !tasks.find((task) => task.id === taskId).completed });
  };

  const handleDelete = (taskId) => {
    onTaskDelete(taskId);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedTask(null);
  };

  const handleCategoryEdit = (categoryName) => {
    console.log(`Edycja kategorii: ${categoryName}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            task={item}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDelete(item.id)}
            onToggle={() => handleToggle(item.id)}
            onCategoryEdit={handleCategoryEdit}
          />
        )}
      />

      {/* Okrągły przycisk w prawym dolnym rogu ekranu */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {selectedTask ? (
          <TaskEdit onSave={handleSave} onCancel={handleCancel} task={selectedTask} />
        ) : (
          <TaskAdd onAdd={handleAdd} onCancel={handleCancel} />
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default TaskList;
