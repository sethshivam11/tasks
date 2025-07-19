import { View, Text, FlatList } from "react-native";
import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskProvider";
import Octicons from "@expo/vector-icons/Octicons";

const Tasks = () => {
  const { tasks, currentFilter } = useTasks();
  return (
    <View className="flex-1 p-4 gap-4">
      <FlatList
        data={tasks.filter((task) => {
          if (currentFilter === "Completed") return task.completed;
          else if (currentFilter === "Pending") return !task.completed;
          else return true;
        })}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, paddingBottom: 16, flexGrow: 1 }}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center gap-4">
            <Octicons name="history" size={50} color="black" />
            <View>
              <Text className="font-semibold text-2xl tracking-tight">
                No tasks yet
              </Text>
              <Text className="text-center text-sm text-stone-500">
                Why not create one!
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Tasks;
