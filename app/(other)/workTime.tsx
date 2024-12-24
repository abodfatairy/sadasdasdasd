import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { salonBack } from "@/assets/icons";
import CustomTitle from "@/components/Custom/CustomTitle";
import { isRTL, RMS } from "@/responsive";
const data = [
  {
    day: "السبت",
    open: "10:00 Am",
    close: "10:00 Pm",
  },
  {
    day: "الاحد",
    open: "10:00 Am",
    close: "10:00 Pm",
  },
  {
    day: "الثلاثاء",
    open: "10:00 Am",
    close: "10:00 Pm",
  },
  {
    day: "الاربعاء",
    open: "10:00 Am",
    close: "10:00 Pm",
  },
  {
    day: "الخميس",
    open: "10:00 Am",
    close: "10:00 Pm",
  },
  {
    day: "الجمعة",
    open: "10:00 Am",
    close: "10:00 Pm",
  },
];
const workTime = () => {
  return (
    <SafeAreaView className=' flex-1'>
      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1 bg-pink-50 p-3 '
      >
        <View>
          <CustomTitle title='اوقات العمل في الصالون' />
          <View
            className='rounded-xl p-2
         bg-white space-y-7 '
          >
            {data.map((item, index) => {
              return (
                <View
                  key={index}
                  className={` ${isRTL ? "flex-row" : "flex-row-reverse"}  `}
                >
                  <Text
                    className=' text-slate-500   flex-1'
                    style={{ fontSize: RMS(15) }}
                  >
                    {item.day}
                  </Text>

                  <View className=' flex-row-reverse'>
                    <Text
                      className='text-slate-500 '
                      style={{ fontSize: RMS(15) }}
                    >
                      {item.open}
                    </Text>
                    <Text
                      className='text-slate-500 '
                      style={{ fontSize: RMS(15) }}
                    >
                      {" "}
                      -{" "}
                    </Text>
                    <Text
                      className='text-slate-500 '
                      style={{ fontSize: RMS(15) }}
                    >
                      {item.close}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View className=' mt-3'>
          <CustomTitle title='اوقات العمل في المنزل' />
          <View
            className='rounded-xl p-2
         bg-white space-y-7 '
          >
            {data.map((item, index) => {
              return (
                <View
                  key={index}
                  className={` ${isRTL ? "flex-row" : "flex-row-reverse"}  `}
                >
                  <Text
                    className=' text-slate-500   flex-1'
                    style={{ fontSize: RMS(15) }}
                  >
                    {item.day}
                  </Text>

                  <View className=' flex-row-reverse'>
                    <Text
                      className='text-slate-500 '
                      style={{ fontSize: RMS(15) }}
                    >
                      {item.open}
                    </Text>
                    <Text
                      className='text-slate-500 '
                      style={{ fontSize: RMS(15) }}
                    >
                      {" "}
                      -{" "}
                    </Text>
                    <Text
                      className='text-slate-500 '
                      style={{ fontSize: RMS(15) }}
                    >
                      {item.close}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default workTime;
