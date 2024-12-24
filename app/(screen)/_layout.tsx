import "react-native-gesture-handler";

import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import CustomDrawerContent from "@/components/Custom/CustomDrawerContent";

import { RMS } from "@/responsive";
import {
  drawerActiveBackgroundColor,
  drawerActiveTintColor,
  drawerBorderColor,
  drawerInactiveTintColor,
} from "@/Colors";
const mainLayout = () => {
  return (
    <GestureHandlerRootView className=' flex-1'>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerPosition: "right",
          drawerActiveBackgroundColor: `${drawerActiveBackgroundColor}`,
          drawerActiveTintColor: `${drawerActiveTintColor}`,
          drawerLabelStyle: { fontSize: RMS(20) },
          drawerInactiveTintColor: `${drawerInactiveTintColor}`,
          drawerItemStyle: {
            borderBottomColor: `${drawerBorderColor}`,
            borderBottomWidth: 1,
          },
        }}
      >
        <Drawer.Screen
          name='home'
          options={{
            headerShown: false,
            drawerLabel: "الصفحة الرئيسية",
            drawerIcon: ({ size, color }) => (
              <SimpleLineIcons
                name='home'
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name='favorite'
          options={{
            headerShown: false,
            drawerLabel: "المفضلة",
            drawerIcon: ({ size, color }) => (
              <AntDesign
                name='hearto'
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Drawer.Screen
          name='orders'
          options={{
            headerShown: false,
            drawerLabel: "طلباتي",
            drawerIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name='hair-dryer-outline'
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name='search'
          options={{
            headerShown: false,
            drawerLabel: "بحث",
            drawerIcon: ({ size, color }) => (
              <FontAwesome
                name='search'
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name='orderDetails'
          options={{
            headerShown: false,
            drawerLabel: "hkj",
            drawerItemStyle: { height: 0 },
            drawerIcon: ({ size, color }) => (
              <FontAwesome
                name='search'
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer>
      <StatusBar
        backgroundColor='#db2777'
        style='light'
      />
    </GestureHandlerRootView>
  );
};

export default mainLayout;
