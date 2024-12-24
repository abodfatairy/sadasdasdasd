import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { salonBack } from "@/assets/icons";
import CustomDataPicker from "@/components/Custom/CustomDataPicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useGlobalSearchParams, useRouter } from "expo-router";
import CustomButton from "@/components/Custom/CustomButton";
import moment from "moment";
import "moment/locale/ar";
import { RMS, rS, rV } from "@/responsive";
import CustomTitle from "@/components/Custom/CustomTitle";
import Tesst from "@/components/Tesst";
import {
  blackColor,
  mainColor,
  textColor,
  thirdTextColor,
  whiteColor,
} from "@/Colors";
const days_of_week = [
  "السبت",
  "الأحد",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
];
const times = [
  "10:00 Am",
  "12:00 pm",
  "1:00 Pm",
  "2:00 Pm",
  "5:00 Pm",
  "7:00 Pm",
];
const choosoeTime = () => {
  const { totalTime, totalPrice } = useGlobalSearchParams();

  const [currentDay, setCurrentDay] = useState(days_of_week[0]);
  const [currentTime, setCurrentTime] = useState(times[0]);
  const [startDate, setStartDate] = useState<Date>();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const router = useRouter();
  return (
    <SafeAreaView className='flex-1'>
      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1 bg-pink-50 p-2'
      >
        <Tesst />
        <Text
          className=' text-center mt-1'
          style={{ fontSize: RMS(22), color: textColor }}
        >
          اختاري اقرب وقت
        </Text>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {days_of_week.map((day, index) => {
              const isActive = currentDay === day;
              return (
                <Pressable
                  onPress={() => setCurrentDay(day)}
                  key={index}
                  className={` items-center justify-center rounded-xl mx-2 my-3`}
                  style={
                    isActive
                      ? {
                          backgroundColor: mainColor,
                          width: rS(70),
                          height: rV(70),
                        }
                      : {
                          backgroundColor: whiteColor,
                          borderColor: thirdTextColor,
                          width: rS(70),
                          height: rV(70),
                        }
                  }
                >
                  <Text
                    className={` text-center`}
                    style={
                      isActive
                        ? { color: whiteColor, fontSize: RMS(18) }
                        : { color: blackColor, fontSize: RMS(18) }
                    }
                  >
                    {day}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
          <View className=''>
            <CustomTitle title='الاوقات المتاحة' />

            <View className=' flex-row flex-wrap items-center justify-center '>
              {times.map((time, index) => {
                const isActive = currentTime === time;
                return (
                  <Pressable
                    key={index}
                    className={` m-2  rounded-xl`}
                    style={
                      isActive
                        ? {
                            backgroundColor: mainColor,
                            width: width / 4,
                          }
                        : {
                            backgroundColor: whiteColor,
                            borderColor: thirdTextColor,
                            width: width / 4,
                          }
                    }
                    onPress={() => setCurrentTime(time)}
                  >
                    <Text
                      className={`${
                        isActive ? "text-white" : "text-black"
                      } p-3`}
                      style={{ fontSize: RMS(15) }}
                    >
                      {time}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View>
              <CustomDataPicker
                title='او اختاري التاريخ والوقت (مخصص)'
                adate={startDate}
                setaDate={(e: any) => setStartDate(e)}
                time={true}
              />
            </View>
          </View>
        </View>
        <View className=' items-center justify-center'>
          <CustomButton
            title='التالي'
            onPress={() =>
              router.push({
                pathname: "/payment",
                params: {
                  totalTime: totalTime,
                  totalPrice: totalPrice,
                  startdate: `${startDate}`,
                },
              })
            }
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default choosoeTime;
