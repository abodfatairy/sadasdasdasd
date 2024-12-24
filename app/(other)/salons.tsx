import { View, ScrollView } from "react-native";
import React from "react";
import Card from "@/components/Card";

import { SafeAreaView } from "react-native-safe-area-context";
import CustomTitle from "@/components/Custom/CustomTitle";
import { useGlobalSearchParams } from "expo-router";

const salons = () => {
  const { ServId } = useGlobalSearchParams();

  return (
    <SafeAreaView className=' flex-1 items-center'>
      <CustomTitle title='الصالونات' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className=' ml-3 space-y-4 '
      >
        <View>
          <Card id={ServId} />
        </View>
        <View>
          <Card id={ServId} />
        </View>
        <View>
          <Card id={ServId} />
        </View>
        <View>
          <Card id={ServId} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default salons;
