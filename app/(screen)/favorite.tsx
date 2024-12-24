import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Card from "@/components/Card";
import { salonBack } from "@/assets/icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { mS, rS } from "@/responsive";
const favorite = () => {
  const [fav, setFav] = useState(true);
  const width = Dimensions.get("window").width;
  return (
    <SafeAreaView className=' flex-1  items-center '>
      <Header />

      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1 bg-pink-50     '
      >
        <ScrollView>
          <View className=' my-3'>
            <View
              className='  items-end mb-2'
              style={{ width: width - rS(30) }}
            >
              {fav ? (
                <AntDesign
                  name='heart'
                  size={mS(20)}
                  color='#db2777'
                  onPress={() => setFav(!fav)}
                />
              ) : (
                <AntDesign
                  name='hearto'
                  size={mS(20)}
                  color='#db2777'
                  onPress={() => setFav(!fav)}
                />
              )}
            </View>
            <Card />
          </View>
          {/* <View className=' my-3'>
            <View
              className='  items-end mb-2'
              style={{ width: width - 30 }}
            >
              {fav ? (
                <AntDesign
                  name='heart'
                  size={24}
                  color='#db2777'
                />
              ) : (
                <AntDesign
                  name='hearto'
                  size={24}
                  color='#db2777'
                />
              )}
            </View>
            <Card />
          </View>
          <View className=' my-3'>
            <View
              className='  items-end mb-2'
              style={{ width: width - 30 }}
            >
              {fav ? (
                <AntDesign
                  name='heart'
                  size={24}
                  color='#db2777'
                />
              ) : (
                <AntDesign
                  name='hearto'
                  size={24}
                  color='#db2777'
                />
              )}
            </View>
            <Card />
          </View>
          <View className=' my-3'>
            <View
              className='  items-end mb-2'
              style={{ width: width - 30 }}
            >
              {fav ? (
                <AntDesign
                  name='heart'
                  size={24}
                  color='#db2777'
                />
              ) : (
                <AntDesign
                  name='hearto'
                  size={24}
                  color='#db2777'
                />
              )}
            </View>
            <Card />
          </View> */}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default favorite;
