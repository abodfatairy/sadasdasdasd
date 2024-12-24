import { View, Text, ImageBackground, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalSearchParams } from "expo-router";
import { salonBack } from "@/assets/icons";
import CustomButton from "@/components/Custom/CustomButton";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/ar";
import PushNotifications from "@/components/PushNotifications";
import { isRTL, mS, RMS, rV } from "@/responsive";
import { fourthTextColor, secondBgColor, textColor } from "@/Colors";
import { StatusBar } from "expo-status-bar";

const payment = () => {
  const { productData } = useSelector((state: any) => state.orebi);
  const { totalTime, totalPrice, startdate } = useGlobalSearchParams();

  const width = Dimensions.get("window").width;

  const now = moment(new Date()).locale("ar");
  const date = moment(startdate).locale("ar");
  const dateDayTime = date.diff(now, "days");
  const dateHoursTime = date.diff(now, "hours");

  return (
    <SafeAreaView className=' flex-1'>
      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1  '
        style={{ backgroundColor: secondBgColor }}
      >
        <Text
          className=' text-center '
          style={{ fontSize: RMS(22), color: textColor }}
        >
          الخطوة الاخيرة
        </Text>
        <View style={{ paddingHorizontal: mS(5) }}>
          <View
            className={`${
              isRTL ? "flex-row" : "flex-row-reverse"
            } justify-between`}
            style={{ marginTop: rV(15) }}
          >
            <Text style={{ fontSize: RMS(22), color: fourthTextColor }}>
              عدد الخدمات
            </Text>
            <Text
              style={{ fontSize: RMS(22), color: fourthTextColor }}
              className='text-slate-500'
            >
              {productData ? productData.length : 0}
            </Text>
          </View>
          <View
            className={`${
              isRTL ? "flex-row" : "flex-row-reverse"
            } justify-between`}
            style={{ marginTop: rV(15) }}
          >
            <Text
              style={{ fontSize: RMS(22), color: fourthTextColor }}
              className=' text-slate-600'
            >
              الوقت الكلي
            </Text>
            <Text
              style={{ fontSize: RMS(22), color: fourthTextColor }}
              className='text-slate-500'
            >
              {totalTime ? totalTime : 0} دقيقة
            </Text>
          </View>
          <View
            className={`${
              isRTL ? "flex-row" : "flex-row-reverse"
            } justify-between`}
            style={{ marginTop: rV(15) }}
          >
            <Text
              style={{ fontSize: RMS(22), color: fourthTextColor }}
              className=' text-slate-600'
            >
              التكلفة الكلية
            </Text>
            <Text
              style={{ fontSize: RMS(22), color: fourthTextColor }}
              className='text-slate-500'
            >
              {totalPrice ? totalPrice : 0} ل.س
            </Text>
          </View>
          <View
            className={`${
              isRTL ? "flex-row" : "flex-row-reverse"
            } justify-between`}
            style={{ marginTop: rV(15) }}
          >
            <Text
              style={{ fontSize: RMS(22), color: fourthTextColor }}
              className=' text-slate-600'
            >
              بداية الموعد
            </Text>
            <Text
              style={{ fontSize: RMS(22), color: fourthTextColor }}
              className='text-slate-500'
            >
              {startdate === "undefined"
                ? 0
                : moment(startdate)
                    .locale("ar")
                    .format("dddd, DD MM YYYY hh:mm:ss a")}
            </Text>
          </View>
          <View
            className={`${
              isRTL ? "flex-row" : "flex-row-reverse"
            } justify-between`}
            style={{ marginTop: rV(15) }}
          >
            <Text
              style={{ fontSize: RMS(22), color: fourthTextColor }}
              className=' text-slate-600'
            >
              نهاية الموعد
            </Text>
            <Text
              style={{ fontSize: RMS(22), color: fourthTextColor }}
              className='text-slate-500'
            >
              {startdate === "undefined"
                ? 0
                : moment(startdate)
                    .locale("ar")
                    .add(`${totalTime}`, "minutes")
                    .format("dddd, DD MM YYYY hh:mm:ss a")}
            </Text>
          </View>
        </View>
        <View className=' items-center'>
          <CustomButton
            title='دفع'
            onPress={() => null}
          />
          <PushNotifications
            title='deala'
            body={` تم تاكيد الحجز ,الحجز بعد ${
              dateDayTime == 0 ? dateHoursTime + "ساعة" : dateDayTime + "يوم"
            }`}
            // data={}
          />
        </View>
      </ImageBackground>
      <StatusBar
        backgroundColor='#db2777'
        style='light'
      />
    </SafeAreaView>
  );
};

export default payment;
