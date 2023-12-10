// src/components/TaskList.js
import React, { useState } from 'react';
import { FlatList, View, Button, StyleSheet, Modal } from 'react-native';
import Task from './Task';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';

const TaskList = ({ tasks, onTaskEdit, onTaskAdd, onTaskDelete }) => {
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

  const handleDelete = (taskId) => {
    onTaskDelete(taskId);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedTask(null);
  };

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            task={item}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
      />
      <Button title="Add Task" onPress={() => setModalVisible(true)} />

      {/* Modal for Editing and Adding Tasks */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        {selectedTask ? (
          <TaskEdit onSave={handleSave} onCancel={handleCancel} task={selectedTask} />
        ) : (
          <TaskAdd onAdd={handleAdd} onCancel={handleCancel} />
        )}
      </Modal>
    </View>
  );
};

export default TaskList;
