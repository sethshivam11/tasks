import { TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const FloatingAddButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push("/add")}
      className="absolute bottom-8 right-8 p-4 items-center justify-center bg-orange-500 rounded-full"
    >
      <AntDesign name="plus" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default FloatingAddButton;
