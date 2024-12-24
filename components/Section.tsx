import { Dimensions, Pressable, View } from "react-native";
import CustomTitle from "./Custom/CustomTitle";
import { ScrollView } from "react-native-gesture-handler";
import Card from "./Card";

const Section = ({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: any;
  onPress: () => void;
  }) => {
   
  return (
    <View className='mt-10 px-4'>
      <Pressable
        className=' flex-row items-center justify-between mb-2'
        onPress={onPress}
      >
        {icon}
        <CustomTitle title={title} />
      </Pressable>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=''
      >
        <Card className='mx-9' />
        <Card className='mx-9' />
      </ScrollView>
    </View>
  );
};

export default Section;
