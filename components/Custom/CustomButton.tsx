import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { mS, RMS } from "@/responsive";
import { mainColor, whiteColor } from "@/Colors";

const CustomButton = ({
  title,
  onPress,
  className,
}: {
  title: string;
  onPress: () => void;
  className?: string;
}) => {
  return (
    <TouchableOpacity
      className={`  w-1/2 mt-6  `}
      onPress={onPress}
    >
      <LinearGradient
        colors={["transparent", `${mainColor}`]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex  justify-center items-center rounded-xl'
      >
        <Text
          style={{
            fontSize: RMS(20),
            paddingVertical: mS(15),
            color: whiteColor,
          }}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
