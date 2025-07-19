import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import React from "react";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import Filters from "../components/Filters";
import FloatingAddButton from "../components/FloatingAddButton";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header />
      <Filters />
      <Tasks />
      <FloatingAddButton />
    </SafeAreaView>
  );
};

export default Index;
