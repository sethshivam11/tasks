import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTasks } from "../context/TaskProvider";
import { router } from "expo-router";

const Add = () => {
  const [task, setTask] = useState({
    id: 0,
    title: "",
    description: "",
    completed: false,
  });

  const { addTask } = useTasks();

  return (
    <SafeAreaView className="flex-1 p-4 gap-4 bg-white">
      <View className="gap-2">
        <Text className="text-xl tracking-tight font-semibold">Title</Text>
        <TextInput
          value={task.title}
          placeholder="Enter task description"
          onChangeText={(value) => setTask({ ...task, title: value })}
          className="bg-white w-full rounded-xl px-4 border border-orange-100"
        />
      </View>
      <View className="gap-2">
        <Text className="text-xl tracking-tight font-semibold">
          Description
        </Text>
        <TextInput
          value={task.description}
          placeholder="Enter task description"
          onChangeText={(value) => setTask({ ...task, description: value })}
          className="bg-white w-full rounded-xl px-4 h-40 border border-orange-100"
          style={{ textAlignVertical: "top" }}
          numberOfLines={10}
          multiline
        />
      </View>
      <TouchableOpacity
        className={
          "w-full bg-orange-500 py-3 px-4 rounded-xl disabled:bg-orange-300"
        }
        activeOpacity={0.8}
        disabled={
          task.title.trim().length < 4 || task.description.trim().length < 10
        }
        onPress={() => {
          addTask(task);
          router.back();
        }}
      >
        <Text className="font-semibold text-white text-lg tracking-tight text-center">
          Add Task
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Add;
