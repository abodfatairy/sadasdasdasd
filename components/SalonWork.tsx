import { View, Text, Pressable, Image, Dimensions } from "react-native";
import { useState } from "react";
import { salonDetails } from "@/data";
import CustomDropdown from "./Custom/customDropdown/CustomDropdown";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteProduct,
  getEmployee,
  productQty,
  resetCart,
} from "@/app/redux/orebSlices";
import { useAppSelector } from "@/app/redux/store";

import Employees from "./Employees";
import { mS, RMS } from "@/responsive";
import { mainColor, textColor } from "@/Colors";
const SalonWork = ({ ServId }: { ServId: string | string[] }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<number>(Number(ServId));

  return (
    <View>
      <Pressable onPress={() => dispatch(resetCart())}>
        <Text>reset</Text>
      </Pressable>
      {salonDetails.map((item, index) => {
        // console.log(JSON.stringify(item["maria"], null, 2), "asd");
        return item["maria"].map((item, index) => {
          // console.log(item.name);

          return (
            <CustomDropdown
              key={item.id}
              active={item.id === active}
              title={item.name}
              body={item.detils.map((item, index) => {
                const qty = useAppSelector((state) =>
                  productQty(state, item.id)
                );
                const employee = useAppSelector((state) =>
                  getEmployee(state, item.id)
                );
                // console.log(employee, "hey");

                return (
                  <View
                    key={index}
                    className=' flex-row items-center justify-center border-b border-slate-100 p-2'
                  >
                    <View className=' items-center justify-center p-2 '>
                      {qty ? (
                        <FontAwesome5
                          name='minus'
                          size={mS(25)}
                          color={mainColor}
                          onPress={() => dispatch(deleteProduct(item.id))}
                        />
                      ) : (
                        <FontAwesome5
                          name='plus'
                          size={mS(25)}
                          color={mainColor}
                          onPress={() => {
                            dispatch(addToCart(item)),
                              Toast.show({
                                type: "success",
                                text1: `تم اضافة  ${item.name} بنجاح  `,
                              });
                          }}
                        />
                      )}
                    </View>
                    <View className=' flex-1 border-l ' style={{borderColor:mainColor}}>
                      <Text
                        className='  mb-2'
                        style={{ fontSize: RMS(20),color:textColor }}
                      >
                        {item.name}
                      </Text>
                      <View className='  flex-row justify-between  items-center  '>
                        <Text
                          className=' ml-1'
                          style={{ fontSize: RMS(15) }}
                        >
                          {item.price} ل.س
                        </Text>
                        <View>
                          {employee && (
                            <Employees
                              employees={item.employees}
                              item={item}
                              employee={employee}
                            />
                          )}
                        </View>

                        <Text style={{ fontSize: RMS(15) }}>
                          {item.time} دقيقة
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            />
          );
        });
      })}
    </View>
  );
};

export default SalonWork;
