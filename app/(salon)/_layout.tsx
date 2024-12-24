import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs, useGlobalSearchParams } from "expo-router";
import Fontisto from "@expo/vector-icons/Fontisto";
import { StatusBar } from "expo-status-bar";
import { mS, RMS } from "@/responsive";
import { mainColor, secondBgColor } from "@/Colors";

export default function TabLayout() {
  const { id } = useGlobalSearchParams();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: `${mainColor}`,
          tabBarStyle: { backgroundColor: `${secondBgColor}` },
          tabBarLabelStyle: { fontSize: RMS(15) },
        }}
      >
        <Tabs.Screen
          name='salon'
          options={{
            headerShown: false,
            title: "الصالون",

            //   tabBarActiveTintColor: " #db2777",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='hair-dryer-outline'
                size={mS(20)}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='gallery'
          options={{
            // href: {
            //   pathname: "/gallery",
            //   params: {
            //     id: id,
            //   },
            // },

            title: "معرض الصور",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Fontisto
                name='nav-icon-grid'
                size={mS(20)}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar
        backgroundColor='#db2777'
        style='light'
      />
    </>
  );
}
