import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";

import { dataArr } from "@/assets/icons/index";
import { FlatList } from "react-native-gesture-handler";
import CustomCareusel from "@/components/Custom/CustomCareusel";
import CustomTitle from "@/components/Custom/CustomTitle";

import { Entypo } from "@expo/vector-icons";
import Section from "@/components/Section";
import { useRouter } from "expo-router";
import { mS, RMS, rS, rV } from "@/responsive";
import { mainBgColor, secondTextColor, sectionIconColor } from "@/Colors";

const home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      className=' flex-1 '
      style={{ backgroundColor: mainBgColor }}
    >
      <Header />
      <ScrollView>
        <CustomCareusel />
        <View className=' mt-4 px-4  '>
          <CustomTitle title='اختاري الخدمة المناسبة ' />
          <FlatList
            data={dataArr}
            keyExtractor={(item) => item.id?.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className='items-center justify-center  '>
                <TouchableOpacity
                  className='  rounded-full mx-1 '
                  onPress={() =>
                    router.push({
                      pathname: "/salons",
                      params: { ServId: item.id },
                    })
                  }
                >
                  <View className='bg-white border border-pink-50  rounded-full p-3'>
                    <View style={{ width: rS(40), height: rV(40) }}>
                      <Image
                        source={item.image}
                        className=' w-full h-full'
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <Text
                  className=' text-center '
                  style={{ fontSize: RMS(18), color: secondTextColor }}
                >
                  {item.name}
                </Text>
              </View>
            )}
          />
        </View>
        <Section
          title='الصالونات '
          icon={
            <Entypo
              name='location-pin'
              size={mS(20)}
              color={sectionIconColor}
            />
          }
          onPress={() => router.push("/salons")}
        />
        <Section
          title='الأقرب اليكي '
          icon={
            <Entypo
              name='location-pin'
              size={mS(20)}
              color={sectionIconColor}
            />
          }
          onPress={() => router.push("/salons")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
