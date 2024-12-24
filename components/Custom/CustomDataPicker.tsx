import { View, Text, Alert, Pressable, Dimensions } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import "moment/locale/ar";
import { mS, RMS } from "@/responsive";
import { mainColor, textColor, thirdTextColor } from "@/Colors";
const CustomDataPicker = ({
  adate,
  setaDate,
  time,
  title,
  DOB,
}: {
  adate?: Date;
  setaDate?: any;
  time?: boolean;
  title: string;
  DOB?: boolean;
}) => {
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = moment(selectedDate);

    if (currentDate.format("dddd") === "الإثنين" && !DOB) {
      Alert.alert(" نأسف للحجز في هذا اليوم لانه لا يوجد دوام");
    } else {
      setaDate(currentDate.toDate());
    }
  };
  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: adate ? adate : new Date(),
      onChange,
      mode: currentMode,
      is24Hour: false,
      display: "default",
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View>
      <Text
        className='  mt-2'
        style={{ fontSize: RMS(20), color: textColor }}
      >
        {title}
      </Text>
      <Pressable
        className=' flex-row py-3 border-2 border-pink-100 w-full h-16 px-4  rounded-2xl  items-center my-2 justify-between'
        onPress={showDatepicker}
      >
        <Fontisto
          name='date'
          size={mS(18)}
          color={mainColor}
        />
        {adate ? (
          <View className='flex-1 items-center justify-center'>
            <Text
              className='  text-center'
              style={{ fontSize: RMS(18), color: mainColor }}
            >
              {moment(adate).locale("ar").format("dddd, DD MM YYYY")}
            </Text>
          </View>
        ) : (
          <Text
            className=' text-slate-300 mx-auto'
            style={{ fontSize: RMS(18), color: thirdTextColor }}
          >
            {" "}
            12/12/2012
          </Text>
        )}
      </Pressable>

      {time && (
        <Pressable
          className='flex-row py-3 border-2 border-pink-100 w-full h-16 px-4  rounded-2xl  items-center my-2 '
          onPress={showTimepicker}
        >
          <AntDesign
            name='clockcircleo'
            size={mS(18)}
            color={mainColor}
          />
          <Text
            className=' flex-1 text-center  '
            style={{ fontSize: RMS(18), color: textColor }}
          >
            {adate ? (
              moment(adate).format("h:mm a")
            ) : (
              <Text style={{ color: thirdTextColor }}>00:00:00</Text>
            )}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default CustomDataPicker;
