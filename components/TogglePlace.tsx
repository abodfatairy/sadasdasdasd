import { View, Text, Dimensions, Pressable } from "react-native";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { mS, RMS, rS } from "@/responsive";
import { mainColor } from "@/Colors";
const TogglePlace = ({ item, setitem }: { item: number; setitem: any }) => {
  const width = Dimensions.get("window").width;

  return (
    <View
      style={{ width: width - rS(10) }}
      className=' bg-white  mb-3'
    >
      <View
        className='border border-pink-600 p-1 flex-row rounded-xl'
        style={{ borderColor: mainColor }}
      >
        <Pressable
          onPress={() => setitem(0)}
          className={` flex-row flex-1 rounded-xl items-center justify-around py-2 `}
          style={item === 0 && { backgroundColor: mainColor }}
        >
          <Text
            className={`${item === 0 && "text-white"} text-center `}
            style={{ fontSize: RMS(18) }}
          >
            في المنزل
          </Text>
          <SimpleLineIcons
            name='home'
            size={mS(20)}
            color={item === 0 ? "white" : "black"}
          />
        </Pressable>

        <Pressable
          onPress={() => setitem(1)}
          className={` flex-row flex-1 rounded-xl items-center justify-around py-2 `}
          style={item === 1 && { backgroundColor: mainColor }}
        >
          <Text
            className={`${item === 1 && "text-white"} text-center `}
            style={{ fontSize: RMS(18) }}
          >
            في الصالون
          </Text>
          <MaterialCommunityIcons
            name='hair-dryer-outline'
            size={mS(20)}
            color={item === 1 ? "white" : "black"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default TogglePlace;
