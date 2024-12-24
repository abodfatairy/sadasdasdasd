import { View, Text, Dimensions } from "react-native";
import React from "react";

const Separator = () => {
  const width = Dimensions.get("window").width;
    return <View className=' bg-pink-600 mx-auto my-2  ' style={{
        width: width/2,
        height:width/1000
  }} />;
};

export default Separator;
