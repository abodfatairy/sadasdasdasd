import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import { mS, RMS } from "@/responsive";
import { placeHolder, textColor } from "@/Colors";
type FormFiled = {
  title: string;
  value: any;
  handeChangeText: (e: any) => void;
  otherStyles?: string;
  placeholder: string;
};
const CustomFormField = ({
  title,
  value,
  handeChangeText,
  otherStyles,
  placeholder,
}: FormFiled) => {


  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text style={{ fontSize: RMS(22), color: textColor }}>{title}</Text>
      <View
        className={` border-2 border-slate-100 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row`}
      >
        <TextInput
          className=' flex-1  w-full   outline-none '
          style={{ fontSize: RMS(20), color: textColor }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeHolder}
          onChangeText={handeChangeText}
          maxLength={400}

          // style={{}}
        />
      </View>
    </View>
  );
};

export default CustomFormField;
