import Push from "@/components/Push";
import { RMS, rV } from "@/responsive";
import { usePushNotifications } from "@/usePushNotifications";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {


  const image = {
    uri: "https://content.jdmagicbox.com/v2/comp/bangalore/53/080p29653/catalogue/shaman-beauty-college-salon-commercial-street-bangalore-beauty-parlours-1j4ow9f.jpg",
  };
  return (
    <SafeAreaView className=' flex-1 items-center justify-center bg-pink-600'>
      <ImageBackground
        imageStyle={{ opacity: 0.3 }}
        source={image}
        className='flex-1 w-full  items-center justify-center '
      >
        <View className='items-center justify-center '>
          <Text
            className=' text-white  text-center tracking-widest'
            style={{ fontSize: RMS(35) }}
          >
            Salons
          </Text>
          <ActivityIndicator
            size={"large"}
            style={{
              marginVertical: rV(10),
            }}
          />
          <Text
            className=' text-white my-3'
            style={{ fontSize: RMS(32) }}
          >
            لانكِ تستحقي كل الاهتمام
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;
