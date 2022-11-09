import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>库存管理</Text>
      <Button
        title="人工入库"
        onPress={() => navigation.navigate("ManualIn")}
      ></Button>
      <Button
        title="人工出库"
        onPress={() => navigation.navigate("ManualOut")}
      ></Button>
    </View>
  );
};

export default Home;
