import { Dimensions, I18nManager } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
const { fontScale } = Dimensions.get("window");
export const rS = (size: number) => {
  return scale(size);
};
export const rV = (size: number) => {
  return verticalScale(size);
};
export const mS = (size: number) => {
  return moderateScale(size);
};
export const RMS = (size: number) => {
  return moderateScale(size / fontScale);
};

export const isRTL = I18nManager.isRTL;
