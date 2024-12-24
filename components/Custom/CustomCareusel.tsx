import * as React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export const dataa = [
  {
    name: "asd",
    uri: "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "asdasd",
    uri: "https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "asdassrd",
    uri: "https://plus.unsplash.com/premium_photo-1695339147223-45c4218c9986?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "asdasdasdasdasdasd",
    uri: "https://plus.unsplash.com/premium_photo-1724411829653-965d18691383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const CustomCareusel = ({
  data,
}: {
  data?: { name: string; uri: string }[];
}) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={{height:width/2}}>
      <Carousel
        width={width}
        height={width/2}
        autoPlay={true}
        data={dataa}
        scrollAnimationDuration={5000}
        renderItem={({ item,index }) => (
          <Pressable onPress={() => console.log('4')}>
          
            <Image
              source={{
                uri: item.uri,
              }}
              resizeMode='cover'
              className=' w-full h-full'
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default CustomCareusel;
