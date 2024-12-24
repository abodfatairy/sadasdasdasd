import {
  View,
  Text,
  Modal,
  Alert,
  Pressable,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useAppDispatch } from "@/app/redux/store";
import { setEmployee } from "@/app/redux/orebSlices";
import { noProfile } from "@/assets/icons";
import { mS, RMS, rS, rV } from "@/responsive";
import { secondTextColor, textColor } from "@/Colors";

const Employees = ({
  employees,
  item,
  employee,
}: {
  employees: string[];
  item: {
    id: number;
    name: string;
    time: number;
    price: number;
    employees: string[];
  };
  employee?: string;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const width = Dimensions.get("window").width;
  const dispatch = useAppDispatch();
  return (
    <View className=' '>
      <Modal
        className=' '
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          className=' flex-1 items-center justify-center'
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View
            className='  bg-slate-50'
            style={{ width: width }}
          >
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              className=' items-start'
            >
              <Text
                className=' ml-3 text-2xl text-pink-600'
                style={{ fontSize: mS(20), color: textColor }}
              >
                X
              </Text>
            </Pressable>
            <ScrollView
              className=' flex-row  bg-slate-50'
              horizontal
            >
              {employees &&
                employees.map((employee, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() => {
                        dispatch(setEmployee({ ...item, employee }));
                        setModalVisible(!modalVisible);
                      }}
                      className=' items-center mx-8  '
                    >
                      <View
                        style={{ width: rS(30), height: rV(30) }}
                        className=' rounded-full'
                      >
                        <Image
                          source={noProfile}
                          resizeMode='contain'
                          className=' rounded-full w-full h-full mb-2'
                        />
                      </View>
                      <Text
                        className=' mb-5 mt-2'
                        style={{ fontSize: RMS(20), color: secondTextColor }}
                      >
                        {employee}
                      </Text>
                    </Pressable>
                  );
                })}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
      <Pressable
        className='  items-center '
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{ width: rS(20), height: rV(20) }}
          className=' rounded-full'
        >
          <Image
            source={noProfile}
            resizeMode='contain'
            className=' rounded-full w-full h-full '
          />
        </View>
        <Text
          className='text-black'
          style={{ fontSize: RMS(15), color: secondTextColor }}
        >
          {employee}
        </Text>
      </Pressable>
    </View>
  );
};

export default Employees;
