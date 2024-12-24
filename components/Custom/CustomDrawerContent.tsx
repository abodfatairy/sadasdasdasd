import { View, Text, Image, Dimensions } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { RMS, rS, rV } from "@/responsive";
import { drawerBorderColor, mainColor } from "@/Colors";

const CustomDrawerContent = (props: any) => {

  const image = {
    uri: "https://st5.depositphotos.com/60604632/65863/i/450/depositphotos_658639928-stock-photo-beautiful-young-girl-wearing-blue.jpg",
  };
  return (
    <View
      className=' flex-1  '
      style={{ backgroundColor: mainColor }}
    >
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
      >
        <View className=' w-full items-center justify-center border-b py-4 mb-6 ' style={{borderColor:drawerBorderColor}}>
          <View
            className='  rounded-full'
            style={{
              width: rS(100),
              height: rV(100),
            }}
          >
            <Image
              source={image}
              resizeMode='cover'
              className=' w-full h-full rounded-full mb-2'
            />
          </View>
          <Text
            className=' text-white text-xl'
            style={{ fontSize: RMS(22) }}
          >
            Maria Meral
          </Text>
        </View>
        {/* <Text className='text-black'>asdasdasd</Text> */}
        <DrawerItemList {...props} />
        {/* <Text
          className='text-white'
          style={{ fontSize: width / 26 }}
        >
          {" "}
          تسجيل الخروج
        </Text> */}
        <DrawerItem
          label={"تسجيل الخروج"}
          labelStyle={{ color: "#fff", fontSize: RMS(20) }}
          onPress={() => console.log()}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
