import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";
import { mS, RMS } from "@/responsive";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { secondTextColor } from "@/Colors";
const DetailsButtons = () => {
  const [active, setactive] = useState(false);
  const router = useRouter();
  return (
    <View className=' flex-row my-1'>
      <Pressable
        onPress={() => router.push("/salonDetails")}
        className='items-center justify-center flex-1'
      >
        <View className=' mb-1'>
          <AntDesign
            name='exclamationcircleo'
            size={mS(20)}
            color={secondTextColor}
          />
        </View>
        <Text style={{ fontSize: RMS(18), color: secondTextColor }}>
          تفاصيل
        </Text>
      </Pressable>
      <Pressable
        onPress={() => null}
        className='items-center justify-center flex-1'
      >
        <View className=' mb-1'>
          {active ? (
            <AntDesign
              name='heart'
              size={mS(20)}
              color='red'
              onPress={() => setactive(!active)}
            />
          ) : (
            <AntDesign
              name='hearto'
              size={mS(20)}
              color={secondTextColor}
              onPress={() => setactive(!active)}
            />
          )}
        </View>
        <Text style={{ fontSize: RMS(18), color: secondTextColor }}>اضافة</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/workTime")}
        className='items-center justify-center flex-1'
      >
        <View className=' mb-1'>
          <AntDesign
            name='clockcircleo'
            size={mS(20)}
            color={secondTextColor}
          />
        </View>
        <Text style={{ fontSize: RMS(18), color: secondTextColor }}>
          أوقات العمل
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/userComments")}
        className='items-center justify-center flex-1'
      >
        <View className=' mb-1'>
          <EvilIcons
            name='comment'
            size={mS(28)}
            color={secondTextColor}
          />
        </View>
        <Text style={{ fontSize: RMS(18), color: secondTextColor }}>
          التعليقات
        </Text>
      </Pressable>
    </View>
  );
};

export default DetailsButtons;
