import {
  View,
  Text,
  ScrollView,
  ImageBackground,
 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import AppointmentCard from "@/components/AppointmentCard";
import { ordersData } from "@/data";
import { salonBack } from "@/assets/icons";
import { mainBgColor } from "@/Colors";
const orders = () => {

  return (
    <SafeAreaView className=' flex-1   '>
      <Header />

      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1      '
        style={{backgroundColor:mainBgColor}}
      >
        <ScrollView className=' px-2 mt-1'>
          {/* {ordersData.map((item, index) => ( */}
          <AppointmentCard
          // key={index}
          // item={item}
          />
          {/* ))} */}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default orders;
