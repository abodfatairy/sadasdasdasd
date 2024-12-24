import {
  View,
  Text,
  ScrollView,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Rating } from "@kolking/react-native-rating";
import { useCallback, useState } from "react";
import { mS, RMS, rS, rV } from "@/responsive";
import CommentCard from "@/components/CommentCard";
import { salonBack } from "@/assets/icons";
import { mainColor, secondBgColor, textColor } from "@/Colors";
const userComments = () => {
  const [rating, setRating] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const handleChange = useCallback(
    (value: number) => setRating(value),
    [rating]
  );

  return (
    <SafeAreaView className=' flex-1'>
      <Modal
        className='  items-center justify-center'
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          className=' items-center justify-center flex-1  '
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text
            className=''
            style={{ fontSize: RMS(20), marginBottom: rV(15) }}
          >
            اعطنا التقييم المناسب
          </Text>
          <View
            className=' bg-slate-50 items-center justify-center rounded-md'
            style={{ height: rV(40), backgroundColor: secondBgColor }}
          >
            <Rating
              size={mS(30)}
              rating={rating}
              onChange={handleChange}
              baseColor='#64748b'
              fillColor={mainColor}
              // disabled={rating > 0 && true}
              style={{ padding: 5 }}
            />
          </View>
        </Pressable>
      </Modal>
      <ImageBackground
        imageStyle={{ opacity: 0.03 }}
        source={salonBack}
        className='flex-1  '
        style={{ backgroundColor: secondBgColor }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={{ flex: 1 }}
        >
          <ScrollView className='flex-1 '>
            <CommentCard
              rate={rating}
              comment={comment}
            />
          </ScrollView>

          <View
            className=' flex-row border-b items-center border-t border-slate-400'
            style={{ paddingHorizontal: rS(5), paddingVertical: rV(2) }}
          >
            <AntDesign
              name='staro'
              size={mS(20)}
              color='#ec4899'
              onPress={() => setModalVisible(!modalVisible)}
            />
            <TextInput
              className=' flex-1  w-full  outline-none text-center '
              style={{ fontSize: RMS(20), height: rV(40),color:textColor }}
              value={comment}
              placeholder={" ضعي تعليق مناسب "}
              placeholderTextColor={"#f9a8d4"}
              onChangeText={(e) => setComment(e)}
              onSubmitEditing={(e) => console.log(e.nativeEvent.text)}
              maxLength={400}
              // onChange={(e) => console.log(e)}
            />
          </View>
          {/* <Text className=' text-pink-500'>comments</Text> */}
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default userComments;
