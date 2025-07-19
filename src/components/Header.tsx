import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View className="p-4 flex-row gap-2 items-center w-full">
      <Image
        source={require("@/src/assets/images/icon.png")}
        className="w-10 h-10"
      />
      <Text className="text-3xl font-bold tracking-tighter">Tasks</Text>
    </View>
  );
};

export default Header;
