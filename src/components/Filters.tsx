import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTasks } from "../context/TaskProvider";

const Filters = () => {
  const { filters, currentFilter, setCurrentFilter } = useTasks();

  return (
    <View className="w-full flex-row p-4 gap-2">
      {filters.map((filter, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setCurrentFilter(filter)}
          className={`${currentFilter === filter ? "bg-orange-500" : ""} border border-orange-500 px-4 py-2 rounded-full`}
        >
          <Text
            className={`${currentFilter === filter ? "text-white" : "text-black"}`}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Filters;
