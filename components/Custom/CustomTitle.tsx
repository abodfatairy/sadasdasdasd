import { textColor } from "@/Colors";
import { mS, RMS } from "@/responsive";
import { Text, View } from "react-native";

const CustomTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <View className=' '>
      <Text
        className={`${className} `}
        style={{ color: textColor, fontSize: RMS(22), marginBottom: mS(10) }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomTitle;
