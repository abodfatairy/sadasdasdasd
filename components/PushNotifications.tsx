import { View, Button, Platform } from "react-native";
import { useState, useRef, useEffect } from "react";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import CustomButton from "./Custom/CustomButton";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    // EAS projectId is used here.
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error("Project ID not found");
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(token);
    } catch (e) {
      token = `${e}`;
    }
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

const PushNotifications = ({
  title,
  body,
  data,
}: {
  title: string;
  body: string;
  data?: { data?: string; test?: string };
}) => {
  // const [expoPushToken, setExpoPushToken] = useState("");
  // const [data, setData] = useState("");

  // const [channels, setChannels] = useState<Notifications.NotificationChannel[]>(
  //   []
  // );
  // const [notification, setNotification] = useState<
  //   Notifications.Notification | undefined
  // >(undefined);
  // const notificationListener = useRef<Notifications.Subscription>();
  // const responseListener = useRef<Notifications.Subscription>();
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `${title} 📬`,
        body: `${body}`,
        // data: { data: 'asd', },
      },
      trigger: { seconds: 1 },
    });
  }
  function showAlertOnSpecificDate(
    year: number,
    month: number,
    day: number
  ): void {
    const targetDate = new Date(year, month - 1, day); // Month is 0-based
    const currentDate = new Date();

    if (currentDate >= targetDate) {
      schedulePushNotification();
    } else {
      // @ts-ignore
      const timeDifference = targetDate - currentDate;
      const daysUntilTarget = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      setTimeout(() => {
        console.log("sec");
      }, daysUntilTarget * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    }
  }

  // useEffect(() => {
  //   showAlertOnSpecificDate(2024, 9, 30);
  // }, []);

  return (
    <CustomButton
      title='حجز'
      onPress={schedulePushNotification}
    />
  );
};

export default PushNotifications;
