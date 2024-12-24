import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { mS, RMS } from "@/responsive";

const search = () => {
  const width = Dimensions.get("window").width;
  const navigation = useNavigation();
  const onToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <SafeAreaView>
      <View className='bg-white flex-row justify-between items-center px-2 py-2'>
        <TextInput
          style={{ fontSize: RMS(22) }}
          className=' text-right flex-1 text-pink-600  mr-2  '
          placeholder='البحث بلاسم'
          maxLength={50}
          autoFocus
          caretHidden
          // onEndEditing={(e) => console.log(e)}

          // value={(e)=>setPhoneNumbe}
        />
        <Ionicons
          name='menu-outline'
          size={mS(20)}
          color='black'
          onPress={onToggle}
        />
      </View>
    </SafeAreaView>
  );
};

export default search;
