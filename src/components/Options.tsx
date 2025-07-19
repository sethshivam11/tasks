import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useTasks } from "../context/TaskProvider";
import EditTask from "./EditTask";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Options = ({ taskId }: { taskId: number }) => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { deleteTask } = useTasks();

  return (
    <View>
      <EditTask open={isEditing} setOpen={setIsEditing} taskId={taskId} />
      <TouchableOpacity onPress={() => setOpen(!open)} className="p-2">
        <Entypo name="dots-three-vertical" size={15} color="black" />
      </TouchableOpacity>
      <Menu opened={open} onBackdropPress={() => setOpen(false)}>
        <MenuTrigger />
        <MenuOptions
          customStyles={{
            optionsContainer: {
              padding: 10,
              borderRadius: 10,
            },
          }}
        >
          <MenuOption
            customStyles={{
              OptionTouchableComponent: () => (
                <TouchableOpacity
                  className="gap-2 flex-row items-center rounded-xl px-1 py-2"
                  onPress={() => {
                    setIsEditing(true);
                    setOpen(false);
                  }}
                >
                  <MaterialIcons name="edit" size={15} color="black" />
                  <Text>Edit</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <MenuOption
            customStyles={{
              OptionTouchableComponent: () => (
                <TouchableOpacity
                  className="gap-2 flex-row items-center rounded-xl px-1 py-2"
                  onPress={() => {
                    deleteTask(taskId);
                    setOpen(false);
                  }}
                >
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={15}
                    color="#ef4444"
                  />
                  <Text className="text-red-500">Delete</Text>
                </TouchableOpacity>
              ),
            }}
          />
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default Options;
