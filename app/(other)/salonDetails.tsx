import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { salonBack } from "@/assets/icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { isRTL, mS, RMS } from "@/responsive";
import { StatusBar } from "expo-status-bar";
import { mainColor, textColor } from "@/Colors";
const salonDetails = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1 bg-pink-50 p-3  '
      >
        <View className=' space-y-6 '>
          <Text
            className=' text-center  text-pink-600'
            style={{ fontSize: RMS(22) }}
          >
            deala salon
          </Text>
          <Text
            className=' text-center  text-slate-400'
            style={{ fontSize: RMS(22) }}
          >
            كورنيش الميدان خلف جامع المنصور مقابل صيدلية المنصور
          </Text>
          <View className={`${isRTL ? "flex-row" : "flex-row-reverse"} p-5`}>
            <View
              className={`${
                isRTL ? "flex-row" : "flex-row-reverse"
              } flex-1 gap-2 items-center`}
            >
              <MaterialCommunityIcons
                name='hair-dryer-outline'
                size={mS(20)}
                color={mainColor}
              />
              <Text style={{ fontSize: RMS(22), color: textColor }}>
                صالون :
              </Text>
            </View>
            <Text style={{ fontSize: RMS(22), color: textColor }}>نعم</Text>
          </View>

          <View className={`${isRTL ? "flex-row" : "flex-row-reverse"} p-5`}>
            <View
              className={` ${
                isRTL ? "flex-row" : "flex-row-reverse"
              } flex-1 gap-2 items-center`}
            >
              <SimpleLineIcons
                name='home'
                size={mS(20)}
                color={mainColor}
              />
              <Text style={{ fontSize: RMS(22), color: textColor }}>
                منزل :
              </Text>
            </View>
            <Text style={{ fontSize: RMS(22), color: textColor }}>نعم</Text>
          </View>
        </View>
      </ImageBackground>
      <StatusBar
        backgroundColor='#db2777'
        style='light'
      />
    </SafeAreaView>
  );
};

export default salonDetails;
