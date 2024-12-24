import {
  Text,
  ScrollView,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomCareusel from "@/components/Custom/CustomCareusel";
import TogglePlace from "@/components/TogglePlace";
import DetailsButtons from "@/components/DetailsButtons";
import SalonWork from "@/components/SalonWork";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { useSelector } from "react-redux";

import { useGlobalSearchParams, useRouter } from "expo-router";
import { salonBack } from "@/assets/icons";
import { mS, RMS, rS, rV } from "@/responsive";
import { secondBgColor, IconColor, textColor, whiteColor } from "@/Colors";

const salon = () => {
  const router = useRouter();
  const [item, setitem] = useState(1);
  const { productData } = useSelector((state: any) => state.orebi);
  const { ServId } = useGlobalSearchParams();

  return (
    <SafeAreaView className='flex-1 '>
      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1 p-2    '
        style={{ backgroundColor: secondBgColor }}
      >
        <View className=' items-center flex-row'>
          {productData.length > 0 && (
            <Pressable onPress={() => router.push("/cart")}>
              <MaterialCommunityIcons
                name='face-woman-outline'
                size={mS(20)}
                color={IconColor}
                style={{ marginLeft: rS(5) }}
              />
              <Text
                className='absolute  left-0  text-white bg-red-600  rounded-full px-1 text-center'
                style={{ fontSize: RMS(14), top: rV(-10) }}
              >
                {productData.length}
              </Text>
            </Pressable>
          )}

          <Text
            className=' text-center   mb-3 flex-1'
            style={{ fontSize: RMS(22), color: textColor }}
          >
            deala salon
          </Text>
        </View>
        <TogglePlace
          item={item}
          setitem={(e: any) => setitem(e)}
        />
        <ScrollView>
          <DetailsButtons />
          <CustomCareusel />
          <SalonWork ServId={ServId} />
        </ScrollView>
        {productData.length > 0 && (
          <Pressable
            className=''
            onPress={() => router.push("/cart")}
          >
            <Text
              className=' bg-blue-400 w-full text-center '
              style={{
                fontSize: RMS(20),
                paddingVertical: rV(4),
                color: whiteColor,
              }}
            >
              تم حجز {productData.length} خدمة
            </Text>
          </Pressable>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default salon;
