import { View, Text, Image } from "react-native";
import React from "react";
import { mS, RMS, rS, rV } from "@/responsive";
import AntDesign from "@expo/vector-icons/AntDesign";
import { blackColor, mainColor, secondTextColor, whiteColor } from "@/Colors";
const CommentCard = ({ rate, comment }: { rate: number; comment: string }) => {
  const image = {
    uri: "https://st5.depositphotos.com/60604632/65863/i/450/depositphotos_658639928-stock-photo-beautiful-young-girl-wearing-blue.jpg",
  };
  return (
    <View
     
      style={{
        paddingHorizontal: mS(20),
        paddingVertical: mS(5),
        marginVertical: mS(10),
        backgroundColor:whiteColor
      }}
    >
      <View className=' flex-row justify-between'>
        <View
          className='  rounded-full'
          style={{
            width: rS(30),
            height: rV(30),
          }}
        >
          <Image
            source={image}
            resizeMode='cover'
            className=' w-full h-full rounded-full mb-2'
          />
        </View>
        <View
          className=' flex-row items-center  '
          //   style={{ width: rS(50) }}
        >
          <AntDesign
            name='star'
            size={mS(20)}
            color={mainColor}
          />
          <Text style={{ fontSize: RMS(20), color:blackColor}}>{rate}</Text>
        </View>
      </View>
      <View
        className=' items-center flex-row-reverse  justify-between  flex-1'
        // style={{ marginHorizontal: rV(5) }}
      >
        <Text
        
          style={{ fontSize: RMS(15),  color:secondTextColor}}
        >
          {comment}
          الشغل كتير بيجنن يسلم ايديكي
        </Text>
      </View>
    </View>
  );
};

export default CommentCard;
