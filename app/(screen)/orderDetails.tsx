import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { salonBack } from "@/assets/icons";
import { useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { ordersData } from "@/data";
import { isRTL, mS, RMS, rS, rV } from "@/responsive";
import { mainColor, secondBgColor, textColor, thirdTextColor, whiteColor } from "@/Colors";
console.log(isRTL, "asd");

const orderDetails = () => {

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let amt = 0;
    ordersData.map((item) => {
      amt += item.price;
      return;
    });
    setTotalPrice(amt);
  }, [ordersData]);
  console.log(totalPrice);

  const router = useRouter();
  return (
    <SafeAreaView className=' flex-1'>
      <View
        className=' w-full flex-row justify-between items-center  border-b border-slate-100'
        style={{ backgroundColor: whiteColor, padding:mS(10) }}
      >
        <Text
          className=' flex-1 text-center '
          style={{ fontSize: RMS(20) }}
        >
          deala salon
        </Text>
        <Entypo
          name='arrow-long-right'
          size={mS(20)}
          color={mainColor}
          onPress={() => router.push("/orders")}
        />
      </View>
      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1  '
        style={{backgroundColor:secondBgColor}}
      >
        <View
          className=' mt-2 '
          style={{ backgroundColor: whiteColor , paddingHorizontal:mS(5) }}
        >
          {ordersData.map((item, index) => {
            return (
              <View
                key={index}
                className={` items-center ${
                  isRTL ? "flex-row-reverse" : "flex-row"
                } justify-between border-b border-slate-100 `}
                style={{ height: rV(50) }}
              >
                <Text
                  className=' text-slate-400  '
                  style={{ fontSize: RMS(20), color: thirdTextColor }}
                >
                  {item.price} ل.س
                </Text>
                <Text
                  style={{ fontSize: RMS(20), color: textColor }}
                >
                  {item.name}
                </Text>
              </View>
            );
          })}
          <View className='flex-row items-center justify-between'>
            <Text
              className=' text-slate-400  '
              style={{ fontSize: RMS(20), color: thirdTextColor }}
            >
              {totalPrice} ل.س
            </Text>
            <Text
              style={{ fontSize: RMS(20), color: textColor }}
            >
              السعر الاجمالي
            </Text>
          </View>
          <View className='flex-row items-center justify-between mt-3'>
            <Text
              className=' text-slate-400  '
              style={{ fontSize: RMS(20), color: thirdTextColor }}
            >
              2024/10/25
            </Text>
            <Text
              style={{ fontSize: RMS(20), color: textColor }}
            >
              التاريخ
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default orderDetails;
