import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { salonBack } from "@/assets/icons";
import {
  CartItem,
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../redux/orebSlices";
import Employees from "@/components/Employees";
import { StatusBar } from "expo-status-bar";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import CustomButton from "@/components/Custom/CustomButton";
import { useRouter } from "expo-router";
import { isRTL, mS, RMS, rV } from "@/responsive";
import {
  fourthTextColor,
  IconColor,
  mainColor,
  secondBgColor,
  textColor,
  thirdTextColor,
} from "@/Colors";
type item = {
  serv: {
    id: number;
    name: string;
    time: number;
    price: number;
    employees: string[];
  };
  qty: number;
  employee: string;
};
const Cart = () => {
  const dispatch = useAppDispatch();
  const height = Dimensions.get("window").height;

  const { productData } = useSelector((state: any) => state.orebi);

  const [totalTime, setTotalTime] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();
  useEffect(() => {
    let amt = 0;
    let price = 0;
    // console.log(productData);
    productData.map((item: CartItem) => {
      amt += item.serv.time * item.qty;
      price += item.serv.price * item.qty;
      return;
    });
    setTotalTime(amt);
    setTotalPrice(price);
  }, [productData]);

  return (
    <SafeAreaView className=' flex-1'>
      <StatusBar
        backgroundColor={mainColor}
        style='dark'
      />
      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1'
        style={{ backgroundColor: secondBgColor }}
      >
        <Text
          className=' text-center mt-2'
          style={{ fontSize: RMS(20), color: thirdTextColor }}
        >
          اضغطي على اسم الموظفة لاختيار الموظف
        </Text>
        <ScrollView
          className=' '
          style={{ maxHeight: height / 2 }}
        >
          <View>
            {productData.map((item: item, index: number) => {
              return (
                <View
                  key={index}
                  className='border-b border-slate-200'
                >
                  <View className=' flex-row items-center justify-center  p-2'>
                    <View className=' items-center justify-center p-2   '>
                      {item.qty && (
                        <AntDesign
                          name='minus'
                          size={mS(30)}
                          color={textColor}
                          onPress={() => dispatch(deleteProduct(item.serv.id))}
                        />
                      )}
                    </View>
                    <View
                      className=' flex-1 border-l '
                      style={{ borderColor: mainColor }}
                    >
                      <Text
                        className='mb-2'
                        style={{
                          fontSize: RMS(19),
                          marginLeft: mS(2),
                          color: textColor,
                        }}
                      >
                        {item.serv.name}
                      </Text>
                      <View
                        className={` ${
                          isRTL ? "flex-row-reverse" : "flex-row"
                        } justify-between   `}
                      >
                        <Text
                          className='ml-2'
                          style={{ fontSize: RMS(19), color: fourthTextColor }}
                        >
                          {item.serv.price * item.qty} ل.س
                        </Text>
                        <Employees
                          employees={item.serv.employees}
                          item={item.serv}
                          employee={item.employee}
                        />
                        <Text
                          style={{ fontSize: RMS(19), color: fourthTextColor }}
                        >
                          {item.serv.time * item.qty} دقيقة
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    className={` ${
                      isRTL ? "flex-row" : "flex-row-reverse"
                    } justify-between p-2 `}
                  >
                    <Text style={{ fontSize: RMS(19), color: fourthTextColor }}>
                      عدد الاشخاص
                    </Text>
                    <View
                      className={` ${
                        isRTL ? "flex-row" : "flex-row-reverse"
                      } justify-between items-center `}
                    >
                      <Pressable
                        onPress={() => {
                          dispatch(increaseQuantity(item.serv.id));
                        }}
                      >
                        <Text style={{ fontSize: RMS(22), color: textColor }}>
                          <AntDesign
                            name='plus'
                            size={mS(25)}
                            color={textColor}
                          />
                        </Text>
                      </Pressable>

                      <Text
                        className=' mx-6'
                        style={{ fontSize: RMS(22), color: fourthTextColor }}
                      >
                        {item.qty}
                      </Text>

                      <Pressable
                        onPress={() => dispatch(decreaseQuantity(item.serv.id))}
                      >
                        <Text
                          className={`${
                            item.qty === 1 ? "text-gray-600" : "text-pink-600"
                          } `}
                        >
                          <AntDesign
                            name='minus'
                            size={mS(25)}
                            color={IconColor}
                          />
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View className=' p-2 border-t border-gray-400 '>
          <View
            className={` ${
              isRTL ? "flex-row-reverse" : "flex-row"
            }  items-center justify-between`}
          >
            <Text style={{ fontSize: RMS(22), color: fourthTextColor }}>
              {(totalTime / 60).toFixed(1)} ساعة
            </Text>
            <Text style={{ fontSize: RMS(22), color: fourthTextColor }}>
              الوقت الكلي :
            </Text>
          </View>
          <View
            className={` ${
              isRTL ? "flex-row-reverse" : "flex-row"
            }  items-center justify-between`}
          >
            <Text
              style={{
                fontSize: RMS(22),
                color: fourthTextColor,
                marginTop: rV(5),
              }}
            >
              {totalPrice} ل.س
            </Text>
            <Text style={{ fontSize: RMS(22), color: fourthTextColor }}>
              التكلفة الكلية :
            </Text>
          </View>
          <View className=' items-center'>
            <CustomButton
              title='التالي'
              onPress={() =>
                router.push({
                  pathname: "/choosoeTime",
                  params: {
                    totalTime: totalTime,
                    totalPrice: totalPrice,
                  },
                })
              }
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Cart;
