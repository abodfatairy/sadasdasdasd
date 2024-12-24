import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  LayoutAnimation,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { toggleAnimation } from "./toggleAnimation";
import { isRTL, mS, RMS } from "@/responsive";
import { dropDownOffBgColor, mainColor, secondBgColor, whiteColor } from "@/Colors";

const Render = ({
  title,
  body,
  active,
}: {
  title: string;
  body: string[] | React.JSX.Element[];
  active: boolean;
}) => {
  const width = Dimensions.get("window").width;
  const [show, setShow] = useState(active);
  const animateC = useRef(new Animated.Value(0)).current;
  const toggleList = () => {
    const config = {
      duration: 300,
      toValue: show ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animateC, config).start();
    LayoutAnimation.configureNext(toggleAnimation(400));
    setShow(!show);
  };
  const arrowTransform = animateC.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });
  return (
    <View className={`   overflow-hidden`}>
      <TouchableOpacity
        onPress={() => toggleList()}
        className=' '
      >
        <View
          className={` border-b border-slate-100 py-1  ${
            isRTL ? "flex-row-reverse" : "flex-row"
          }  items-center  justify-between`}
          style={
            show
              ? { backgroundColor: mainColor }
              : { backgroundColor: dropDownOffBgColor }
          }
        >
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            <MaterialIcons
              name='keyboard-arrow-right'
              size={mS(27)}
              color={whiteColor}
            />
          </Animated.View>
          <Text
            className={` ${show && " text-white"}  ml-2 py-4 mr-2 text-white`}
            style={{ fontSize: RMS(20),color:whiteColor }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
      {show && (
        <>
          <View className=' bg-white' >
            {typeof body === "string" && (
              <Text
                className=' leading-5'
                style={{ fontSize: width / 20 }}
              >
                {" "}
                {body}
              </Text>
            )}
          </View>
          <ScrollView className=' bg-white'>
            {typeof body === "object" && body}
          </ScrollView>
        </>
      )}
    </View>
  );
};
export default Render;
