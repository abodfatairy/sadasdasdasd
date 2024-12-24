import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Alert,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageView from "react-native-image-viewing";
import { salonBack } from "@/assets/icons";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useGlobalSearchParams } from "expo-router";
import { mS, RMS, rS, rV } from "@/responsive";
import { IconColor, secondBgColor, textColor, thirdTextColor } from "@/Colors";
const gallery = () => {
  const { id } = useGlobalSearchParams();

  const [visible, setIsVisible] = useState(false);
  const onLongPress = () => {
    // Alert.alert("Long Pressed");
  };

  const [index, setIsIndex] = useState(0);
  const toggle = (index: number) => {
    setIsVisible(true);
    setIsIndex(index);
  };
  const width = Dimensions.get("window").width;
  const images = [
    {
      uri: "https://timelinecovers.pro/facebook-cover/download/pretty-girl-facebook-cover.jpg",
    },

    {
      uri: "https://us.123rf.com/450wm/eugenepartyzan/eugenepartyzan1912/eugenepartyzan191200015/136515432-beautiful-arab-woman-cover-her-face-with-hijab-fashionable-arabian-style-girl-beauty-portrait.jpg",
    },
    {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <SafeAreaView className=' flex-1'>
      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1 mt-2'
        style={{backgroundColor:secondBgColor}}
      >
        <View className=' items-center border-b border-slate-300 '>
          <Image
            source={{
              uri: "https://timelinecovers.pro/facebook-cover/download/pretty-girl-facebook-cover.jpg",
            }}
            width={rS(100)}
            height={rV(100)}
            className=' rounded-full '
          />
          <Text
            className='my-2'
            style={{ fontSize: RMS(30), color: textColor }}
          >
            deala salon
          </Text>
          <View className=' items-center flex-row  justify-between'>
            <Entypo
              name='location-pin'
              size={mS(20)}
              color={IconColor}
            />
            <Text style={{ fontSize: RMS(18), color: thirdTextColor }}>
              ميدان
            </Text>
          </View>
        </View>
        <ScrollView className='flex-[2]'>
          <View className=' flex-row flex-wrap'>
            {images.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index + 1}
                  onPress={() => toggle(index)}
                >
                  <Image
                    source={item}
                    width={width / 3}
                    height={width / 2}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <ImageView
          images={images}
          imageIndex={index}
          visible={visible}
          onLongPress={onLongPress}
          onRequestClose={() => setIsVisible(false)}
        />
      </ImageBackground>
      <StatusBar
        backgroundColor='#fdf2f8'
        style='light'
      />
    </SafeAreaView>
  );
};

export default gallery;
