import { View, Text, Dimensions, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { RMS, rS } from "@/responsive";
import { mainColor, textColor, thirdTextColor, whiteColor } from "@/Colors";

const AppointmentCard = ({
  item,
}: {
  item?: {
    name: string;
    time: number;
    price: number;
  };
}) => {
  const width = Dimensions.get("window").width;
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push("/orderDetails")}
      className=' mx-auto rounded'
      style={{
        width: width - rS(20),
        backgroundColor: whiteColor,
      }}
    >
      <View className=' flex-1 p-2 '>
        <View
          className=' flex-row items-center
               justify-between py-3'
        >
          <Text
            className=' text-white   py-1 px-2 rounded'
            style={{ fontSize: RMS(15), backgroundColor: mainColor }}
          >
            منتهي
          </Text>
          <Text style={{ fontSize: RMS(20), color: textColor }}>
            deala salon
          </Text>
        </View>
        <Text style={{ fontSize: RMS(18), color: thirdTextColor }}>
          30/2/2025
        </Text>
      </View>
    </Pressable>
  );
};

export default AppointmentCard;
