import {
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import CustomButton from "@/components/Custom/CustomButton";
console.log(isRTL, "sd");

import { isRTL, mS, RMS } from "@/responsive";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  mainColor,
  secondBgColor,
  secondTransGaryColor,
  transGaryColor,
  whiteColor,
} from "@/Colors";
const SignUp = () => {
  const image = {
    uri: "https://content.jdmagicbox.com/v2/comp/bangalore/53/080p29653/catalogue/shaman-beauty-college-salon-commercial-street-bangalore-beauty-parlours-1j4ow9f.jpg",
  };

  const [phoneNumber, setPhoneNumber] = useState<Number>(0);
  const router = useRouter();
  const submit = () => {
    router.push("/verification");
  };
  return (
    <SafeAreaView
      className=' flex-1'
      style={{ backgroundColor: secondBgColor }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        style={{ flex: 1 }}
      >
        <ImageBackground
          imageStyle={{ opacity: 0.3 }}
          source={image}
          className={` flex-[0.5] rounded-bl-full  mb-7  overflow-hidden   p-2  ${
            isRTL && " items-end"
          } `}
          style={{ backgroundColor: mainColor }}
        >
          <Text
            className='self-center  '
            style={{
              fontSize: RMS(35),
              marginTop: RMS(15),
              color: whiteColor,
            }}
          >
            Salons
          </Text>
          <Text
            className={`  ${isRTL && "text-end"} `}
            style={{
              fontSize: RMS(25),
              marginVertical: RMS(15),
              color: whiteColor,
            }}
          >
            مرحباً بكِ في تطبيق صالونس
          </Text>
          <Text
            className={`  w-1/2 ${!isRTL && "self-end"}`}
            style={{ fontSize: RMS(25), color: transGaryColor }}
          >
            سجلي الان, واحصلي على دليل متكامل للصالونات
          </Text>
        </ImageBackground>
        <View className=' flex-[0.5]  gap-10 '>
          <View className='  flex-row justify-end item-center     mr-4  '>
            <Text
              className=' text-gray-400 mr-1'
              style={{ fontSize: RMS(20), color: secondTransGaryColor }}
            >
              رقم جوالك
            </Text>

            <AntDesign
              name='mobile1'
              size={mS(20)}
              color={mainColor}
            />
          </View>
          <View
            className={` items-center ${
              isRTL ? "flex-row-reverse" : "flex-row"
            } mt-6  justify-center `}
          >
            <Text
              className=' mx-2 border-b pb-1  border-gray-200 '
              style={{ fontSize: RMS(20), color: secondTransGaryColor }}
            >
              +963
            </Text>
            <TextInput
              keyboardType='number-pad'
              onChangeText={(text) => setPhoneNumber(Number(text))}
              // value={}
              // // onPointerDown={()=>console.log('done')
              // // }
              // onTouchEnd={() => "s"}
              // onAccessibilityAction={() => console.log("s")}
              onEndEditing={submit}
              className=' border-b  border-gray-200 w-3/4  text-gray-500 '
              placeholder='9xxxxxxxx'
              maxLength={10}
              style={{ fontSize: RMS(25), color: secondTransGaryColor }}
            />
          </View>
          <View className=' items-center'>
            <CustomButton
              title={"تسجيل الدخول"}
              onPress={submit}
            />
          </View>
        </View>

        <StatusBar
          backgroundColor='transparent'
          style='light'
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
