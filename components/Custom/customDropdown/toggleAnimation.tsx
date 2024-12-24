import { LayoutAnimation, LayoutAnimationConfig } from "react-native";

/**
 * Generates a layout animation configuration for toggling the visibility of an element.
 *
 *
 * @returns {LayoutAnimationConfig} - The layout animation configuration object.
 */
export const toggleAnimation = ( duration:number ): LayoutAnimationConfig => {
  return {
    duration,
    update: {
      duration,
      property: LayoutAnimation.Properties.scaleXY,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };
};
