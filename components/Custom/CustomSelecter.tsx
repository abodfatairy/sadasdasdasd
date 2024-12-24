import { blackColor, mainColor, textColor, whiteColor } from "@/Colors";
import { RMS } from "@/responsive";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
const CustomSelecter = ({
  setCityForm,
  setRegionForm,
}: {
  setCityForm: (e: any) => void;
  setRegionForm: (e: any) => void;
}) => {
  const data = [
    { label: "دمشق", value: "1" },
    { label: "حلب", value: "2" },
    { label: "حمص", value: "3" },
    { label: "اللاذقية", value: "4" },
    { label: "حماة", value: "5" },
    { label: "طرطوس", value: "6" },
  ];
  const damascus = [
    { label: "ميدان", value: "1" },
    { label: "الزاهرة", value: "100" },
    { label: "مزة", value: "2" },
    { label: "صحنايا", value: "3" },
    { label: "الكسوة", value: "4" },
    { label: "جرمانا", value: "4" },
    { label: "مشروع دمر", value: "5" },
    { label: "دمر", value: "6" },
    { label: "ضاحية قدسيا", value: "7" },
    { label: "قدسيا", value: "8" },
    { label: "شارع بغداد", value: "9" },
    { label: "المالكي", value: "10" },
    { label: "كفرسوسة ", value: "11" },
    { label: "برامكة", value: "12" },
    { label: "جديدة عرطوز", value: "13" },
    { label: "ركن الدين", value: "14" },
    { label: "شعلان", value: "15" },
    { label: "ابو رمانة", value: "16" },
  ];
  const halp = [{ label: "لايوجد", value: "999999999999999999999999999" }];
  const homs = [
    { label: "الباب الكبير", value: "1" },
    { label: "حمص العدية", value: "2" },
    { label: "مالي سامع", value: "3" },
  ];
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [place, setplace] = useState([
    {
      label: "",
      value: "",
    },
  ]);

  return (
    <View className=' '>
      <View
        style={styles.container}
        className=''
      >
        <Text
          className='font-pmedium mb-2'
          style={{ fontSize: RMS(22), color: textColor }}
        >
          السكن
        </Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          dropdownPosition='auto'
          mode='modal'
          labelField='label'
          valueField='label'
          placeholder='اختاري المحافظة'
          renderItem={(item: any, selected: any) => (
            <View style={selected && { backgroundColor: mainColor }}>
              <Text
                className={`${selected && " text-white"}  py-2  mr-2`}
                style={
                  selected
                    ? { color: whiteColor, fontSize: RMS(20) }
                    : { color: blackColor, fontSize: RMS(20) }
                }
              >
                {item.label}
              </Text>
            </View>
          )}
          searchPlaceholder='بحث'
          value={country}
          onChange={(item) => {
            setCountry(item.label);
            setCityForm(item.label);
            if (item.label === "دمشق") {
              setplace(damascus);
            } else if (item.label === "حمص") {
              setplace(homs);
            } else if (item.label === "حلب") {
              setplace(halp);
            } else {
              setplace([]);
            }
          }}
        />
      </View>
      <View
        style={styles.container}
        className=''
      >
        <Dropdown
          mode='modal'
          containerStyle={{ borderRadius: 4 }}
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={{ backgroundColor: "pink" }}
          dropdownPosition='auto'
          data={place}
          labelField='label'
          valueField='label'
          placeholder='المكان الاقرب اليكي'
          renderItem={(item: any, selected: any) => (
            <View style={selected && { backgroundColor: mainColor }}>
              <Text
                className={`  py-2  mr-2`}
                style={
                  selected
                    ? { color: whiteColor, fontSize: RMS(20) }
                    : { color: blackColor, fontSize: RMS(20) }
                }
              >
                {item.label}
              </Text>
            </View>
          )}
          value={street}
          onChange={(item) => {
            setStreet(item.label);
            setRegionForm(item.label);
            // console.log(street);
          }}
        />
      </View>
    </View>
  );
};

export default CustomSelecter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    width: "100%",
    color: "#db2777",
  },
  dropdown: {
    height: 50,
    width: "100%",
    borderColor: "#f1f5f9",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: "#db2777",
  },
  placeholderStyle: {
    fontSize: RMS(20),
    color: "#db2777",
  },
  selectedTextStyle: {
    fontSize: RMS(20),
    color: "#db2777",
  },

  inputSearchStyle: {
    color: "#db2777",
    textAlign: "right",
  },
});
