import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { salonBack } from "@/assets/icons";
import CustomFormField from "@/components/Custom/CustomFormField";
import CustomDataPicker from "@/components/Custom/CustomDataPicker";
import CustomSelecter from "@/components/Custom/CustomSelecter";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import CustomButton from "@/components/Custom/CustomButton";
import { mS, RMS, rS, rV } from "@/responsive";
import { useSelector } from "react-redux";
import {
  blackColor,
  profileImageBg,
  profileImageContainer,
  textColor,
  whiteColor,
} from "@/Colors";
type FromFiled = {
  image?: string;
  FirstName?: string;
  LastName?: string;
  DOB?: Date;
  city?: string;
  Region?: string;
};

const profile = () => {
  const router = useRouter();
  // const [image, setImage] = useState<string | null>(null);
  const [form, setForm] = useState<FromFiled>({
    image: "",
    FirstName: "",
    LastName: "",
    // DOB: new Date(),
    city: "",
    Region: "",
  });

  const onSubmit = () => {
    console.log(JSON.stringify(form, null, 2));
    router.replace("/home");
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setForm({ ...form, image: result.assets[0].uri });
    }
  };

  return (
    <SafeAreaView
      className=' flex-1 bg-white'
      style={{ backgroundColor: whiteColor }}
    >
      <StatusBar
        backgroundColor={whiteColor}
        style='dark'
      />
      <ScrollView className=' px-2 '>
        <ImageBackground
          imageStyle={{ opacity: 0.03 }}
          source={salonBack}
          className='flex-1 px-4      '
          style={{ backgroundColor: profileImageBg }}
        >
          <View
            className=' mt-2 space-y-2 '
            style={{}}
          >
            <Text style={{ fontSize: RMS(20), color: textColor }}>
              اختاري صورتك الشخصية (اختياري)
            </Text>
            <TouchableOpacity
              className=''
              onPress={() => pickImage()}
            >
              {form?.image ? (
                <Image
                  source={{ uri: form.image }}
                  className=' rounded-full mx-auto'
                  resizeMode={"cover"}
                  style={{
                    width: rS(150),
                    height: rV(150),
                  }}
                />
              ) : (
                <View
                  className='    px-4 justify-center items-center mx-auto rounded-full'
                  style={{
                    width: rS(150),
                    height: rV(150),
                    backgroundColor: profileImageContainer,
                  }}
                >
                  <Feather
                    name='upload'
                    size={mS(25)}
                    color={blackColor}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
          <CustomFormField
            title={"الاسم"}
            value={form?.FirstName}
            placeholder={"سارة "}
            handeChangeText={(e) => setForm({ ...form, FirstName: e })}
            otherStyles={"mt-1"}
          />
          <CustomFormField
            title={"الكنية"}
            value={form?.LastName}
            placeholder={"توتي"}
            handeChangeText={(e) => setForm({ ...form, LastName: e })}
            otherStyles={" mt-2"}
          />
          <CustomDataPicker
            title='تاريخ الميلاد'
            adate={form.DOB}
            setaDate={(e: Date) => setForm({ ...form, DOB: e })}
            time={false}
            DOB={true}
          />

          <CustomSelecter
            setCityForm={(e) => setForm({ ...form, city: e })}
            setRegionForm={(e) => setForm({ ...form, Region: e })}
          />
          <View className=' items-center justify-center mb-2'>
            <CustomButton
              title='حفظ'
              onPress={onSubmit}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
  ``;
};

export default profile;
