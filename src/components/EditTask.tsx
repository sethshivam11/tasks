import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTasks } from "../context/TaskProvider";

const EditTask = ({
  open,
  setOpen,
  taskId,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  taskId: number;
}) => {
  const [task, setTask] = useState({
    id: 0,
    title: "",
    description: "",
    completed: false,
  });

  const { tasks, updateTask } = useTasks();

  useEffect(() => {
    const currentTask = tasks.find((t) => t.id === taskId);
    if (currentTask) {
      setTask(currentTask);
    }
  }, [taskId]);

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={() => setOpen(false)}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-black/50 justify-center items-center px-4">
          <View className="bg-white p-4 rounded-xl gap-6 py-6 w-full">
            <Text className="text-center font-bold tracking-tighter text-2xl">
              Edit Task
            </Text>
            <View className="gap-4">
              <View className="gap-2">
                <Text className="text-lg tracking-tight font-semibold">
                  Title
                </Text>
                <TextInput
                  value={task.title}
                  placeholder="Enter task title"
                  onChangeText={(value) => setTask({ ...task, title: value })}
                  className="bg-white w-full rounded-xl px-4 border border-orange-100"
                />
              </View>
              <View className="gap-2">
                <Text className="text-lg tracking-tight font-semibold">
                  Description
                </Text>
                <TextInput
                  value={task.description}
                  onChangeText={(value) =>
                    setTask({ ...task, description: value })
                  }
                  placeholder="Enter task description"
                  className="bg-white w-full rounded-xl px-4 border border-orange-100 h-40"
                  style={{ textAlignVertical: "top" }}
                  numberOfLines={10}
                  multiline
                />
              </View>
            </View>
            <View className="gap-2">
              <TouchableOpacity
                className="w-full bg-orange-500 py-3 px-4 rounded-xl"
                activeOpacity={0.8}
                onPress={() => {
                  updateTask(task);
                  setOpen(false);
                }}
              >
                <Text className="font-semibold text-white tracking-tight text-center">
                  Update
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="w-full border border-orange-500 py-3 px-4 rounded-xl"
                onPress={() => setOpen(false)}
                activeOpacity={0.8}
              >
                <Text className="font-semibold tracking-tight text-center">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default EditTask;
