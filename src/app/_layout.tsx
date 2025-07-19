import { Stack } from "expo-router";
import "../global.css";
import { MenuProvider } from "react-native-popup-menu";
import { TaskProvider } from "../context/TaskProvider";

export default function RootLayout() {
  return (
    <MenuProvider>
      <TaskProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="add"
            options={{ title: "Add Task", headerBackTitle: "Go Back" }}
          />
        </Stack>
      </TaskProvider>
    </MenuProvider>
  );
}
