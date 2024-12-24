import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import Swiper from "react-native-swiper";
import { useRouter } from "expo-router";
import { isRTL, RMS } from "@/responsive";

const IntroComponent = () => {
  const [indexx, setIndex] = useState<number>(isRTL ? 2 : 0);
  const router = useRouter();
  const last = isRTL ? 0 : 2;
  // console.log(index == last, index, last);
  const PaginationComponent = ({ index }: { index: number }) => {
    return (
      <View
        className={` items-center justify-between ${
          isRTL ? "flex-row" : "flex-row-reverse"
        } w-full px-2`}
      >
        {index == last ? (
          <Text
            style={{ fontSize: RMS(20) }}
            className='text-slate-600'
            onPress={() => {
              router.push("/sign-up");
            }}
          >
            تم
          </Text>
        ) : (
          <Text
            style={{ fontSize: RMS(20) }}
            className='text-slate-600'
            onPress={() => {
              setIndex((prev) => (isRTL ? prev - 1 : prev + 1));
              console.log(indexx);
            }}
          >
            التالي
          </Text>
        )}

        {/* <Pressable> */}
        <Text
          style={{ fontSize: RMS(20) }}
          className='text-slate-600'
          onPress={() => {
            router.push("/sign-up");
          }}
        >
          تخطي
        </Text>
        {/* </Pressable> */}
      </View>
    );
  };
  const height = Dimensions.get("window").height;

  return (
    <Swiper
      nextButton={true}
      className=''
      loop={false}
      activeDotColor='#ec4899'
      index={indexx}
      showsPagination={false}
    >
      <View className=' flex-1 items-center justify-center'>
        <Text className=' border p-10'>الخطوة الاولى</Text>
        <View className=' absolute  bottom-3'>
          <PaginationComponent index={isRTL ? 2 : 0} />
        </View>
      </View>
      <View className=' flex-1 items-center justify-center'>
        <Text className=' border p-10'>الخطوة الثانية</Text>
        <View className=' absolute  bottom-3'>
          <PaginationComponent index={isRTL ? 2 : 1} />
        </View>
      </View>
      <View className=' flex-1 items-center justify-center'>
        <Text className=' border p-10'>الخطوة الثالثة</Text>
        <View className=' absolute  bottom-3'>
          <PaginationComponent index={isRTL ? 0 : 2} />
        </View>
      </View>
    </Swiper>
  );
};

export default IntroComponent;
