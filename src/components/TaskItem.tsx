import { View, Text } from "react-native";
import React from "react";
import { Task } from "../lib/types";
import Checkbox from "expo-checkbox";
import Options from "./Options";
import { useTasks } from "../context/TaskProvider";

const TaskItem = ({ task }: { task: Task }) => {
  const { toggleComplete } = useTasks();

  return (
    <View className="p-4 border border-orange-100 rounded-xl flex-row gap-2 bg-white">
      <View>
        <Checkbox
          style={{ borderRadius: 5, padding: 2, borderWidth: 1, marginTop: 5 }}
          color="#f97316"
          value={task.completed}
          onValueChange={() => toggleComplete(task.id)}
        />
      </View>
      <View className="flex-1">
        <Text
          className={`text-xl tracking-tight font-bold ${task.completed ? "text-stone-500 line-through" : "text-black"}`}
        >
          {task.title}
        </Text>
        <Text
          className={
            task.completed ? "text-stone-400 line-through" : "text-stone-500"
          }
        >
          {task.description}
        </Text>
      </View>
      <Options taskId={task.id} />
    </View>
  );
};

export default TaskItem;
