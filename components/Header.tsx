import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { mS, RMS } from "@/responsive";
import { headerBG, textColor } from "@/Colors";
const Header = () => {
  const navigation = useNavigation();
  const onToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const router = useRouter();
  return (
    <View
      className='w-full flex-row justify-between items-center px-2 py-2 border-b border-slate-300'
      style={{ backgroundColor: headerBG }}
    >
      <FontAwesome
        name='search'
        size={mS(20)}
        color={textColor}
        onPress={() => router.push("/search")}
      />

      <Text
        className=''
        style={{ fontSize: RMS(25) }}
      >
        <Text style={{ color: textColor }}>S</Text>
        alons
      </Text>
      <Ionicons
        name='menu-outline'
        size={mS(20)}
        color='black'
        onPress={onToggle}
      />
    </View>
  );
};

export default Header;
