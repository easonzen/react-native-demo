import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const ManualIn = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <Text>这是人工入库页面</Text>
      <TextInput
        style={{ height: 40, border: "1px solid #000000" }}
        placeholder="请扫描入库位置二维码"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

export default ManualIn;
