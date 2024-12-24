import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { chair, home } from "@/assets/icons";
import { useRouter } from "expo-router";
import { mS, RMS, rS, rV } from "@/responsive";
import {
  mainColor,
  sectionIconColor,
  thirdTextColor,
  whiteColor,
} from "@/Colors";

const image = {
  uri: "https://c0.wallpaperflare.com/preview/301/821/67/adult-beautiful-beauty-close-up.jpg",
};
const width = Dimensions.get("window").width;
const Card = ({
  className,
  id,
}: {
  className?: string;
  id?: string | string[];
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/salon",
          params: { ServId: id },
        })
      }
      className={`${className} mr-4  `}
    >
      <View className=' relative w-full'>
        <Image
          source={image}
          className='rounded-t-md'
          width={rS(300)}
          height={rV(150)}
          resizeMode='cover'
        />
        <View
          className=' bg-black/70  bottom-0 absolute w-full px-4  '
          style={{ height: rV(20), width: rS(300) }}
        >
          <View className=' flex-row items-center gap-2 absolute bottom-1  justify-center left-1 '>
            <Text
              className=' text-white'
              style={{ fontSize: RMS(15) }}
            >
              5.0
            </Text>
            <FontAwesome
              name='star'
              size={mS(15)}
              color='#db2777'
            />
          </View>
          <Image
            source={image}
            className=' rounded-full absolute right-2 bottom-5'
            width={rS(55)}
            height={rV(55)}
            resizeMode='cover'
          />
        </View>
      </View>

      <View
        className='rounded-b-lg p-2 '
        style={{ width: rS(300), backgroundColor: whiteColor }}
      >
        <View className=' flex items-center justify-between flex-row '>
          <View className=' items-center justify-between flex-row gap-2'>
            <View
              className=' rounded-full p-1 items-center justify-center'
              style={{
                width: rS(24),
                height: rV(24),
                backgroundColor: mainColor,
              }}
            >
              <Image
                source={chair}
                resizeMode='cover'
                className='  w-full h-full'
              />
            </View>
            <View
              className=' rounded-full p-1 items-center justify-center'
              style={{
                width: rS(24),
                height: rV(24),
                backgroundColor: mainColor,
              }}
            >
              <Image
                source={home}
                resizeMode='cover'
                className='  w-full h-full'
              />
            </View>
          </View>
          <Text
            className=' text-pink-600
          '
            style={{ fontSize: RMS(22) }}
          >
            deala salon
          </Text>
        </View>
        <View className=' items-center flex-row justify-between '>
          <Entypo
            name='location-pin'
            size={mS(20)}
            color={sectionIconColor}
          />
          <Text
            className=' mr-2 pb-1 '
            style={{ fontSize: RMS(22), color: thirdTextColor }}
          >
            ميدان
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
