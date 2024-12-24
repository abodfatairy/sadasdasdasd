import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";
console.log(isRTL, "sss");

import { useRouter } from "expo-router";
import CustomButton from "@/components/Custom/CustomButton";
import { StatusBar } from "expo-status-bar";
import { isRTL, mS, RMS } from "@/responsive";
import {
  activeColor,
  mainColor,
  secondBgColor,
  secondTextColor,
  textColor,
  whiteColor,
} from "@/Colors";
const Verification = () => {
  const [reg, seReg] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [active, setActive] = useState(false);
  const [otp, setOtp] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(intervalId);
        setActive(true);
        // Handle timer expiration here (e.g., show a message or perform an action)
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);
  const formattedTime = seconds.toString().padStart(2, "0");
  const submit = () => {
    if (reg) {
      router.replace("/home");
    } else {
      router.replace("/profile");
    }
  };

  const image = {
    uri: "https://content.jdmagicbox.com/v2/comp/bangalore/53/080p29653/catalogue/shaman-beauty-college-salon-commercial-street-bangalore-beauty-parlours-1j4ow9f.jpg",
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        className=' flex-1 '
        style={{ backgroundColor: secondBgColor }}
      >
        <ImageBackground
          imageStyle={{ opacity: 0.3 }}
          source={image}
          className={`flex-[0.5]  rounded-bl-full   mb-7  overflow-hidden ${
            isRTL && " items-end"
          } `}
          style={{ backgroundColor: mainColor }}
        >
          <Text
            className='self-center'
            style={{
              fontSize: RMS(45),
              marginTop: mS(15),
              color: whiteColor,
            }}
          >
            Salons
          </Text>
          <Text
            className={`flex-wrap  ${isRTL && "self-end"} `}
            style={{
              fontSize: RMS(20),
              marginTop: mS(15),
              marginRight: mS(10),
              color: whiteColor,
            }}
          >
            ادخلي رمز التحقق المرسل الى جوالك
          </Text>
        </ImageBackground>

        <View
          className=' flex-[0.5]   items-center '
          style={{ gap: mS(15) }}
        >
          <View className=' flex-row items-center gap-2'>
            {active ? (
              <Text
                style={{ fontSize: RMS(20), color: textColor }}
                onPress={() => console.log("re")}
              >
                إعادة ارسال
              </Text>
            ) : (
              <Text style={{ fontSize: RMS(20), color: secondTextColor }}>
                إعادة ارسال الرمز {formattedTime}
              </Text>
            )}
          </View>

          <View>
            <OtpInput
              numberOfDigits={4}
              focusStickBlinkingDuration={500}
              onTextChange={(text) => console.log(text)}
              onFilled={(text) => setOtp(Number(text))}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
              }}
              theme={{
                containerStyle: { width: "auto", gap: 30 },
                pinCodeContainerStyle: { borderColor: whiteColor, width: 60 },
                pinCodeTextStyle: {
                  borderColor: whiteColor,
                  fontSize: RMS(20),
                },
                focusStickStyle: { backgroundColor: activeColor },
                focusedPinCodeContainerStyle: { borderColor: activeColor },
              }}
            />
          </View>
          <View className=' items-center w-full'>
            <CustomButton
              title='تحقق'
              onPress={submit}
            />
          </View>
        </View>
        <StatusBar
          backgroundColor={mainColor}
          style='light'
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Verification;
