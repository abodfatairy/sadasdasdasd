import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Toast, { BaseToast } from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  const router = useRouter();
  const [result, setRseult] = useState(false);

  useEffect(() => {
    // const isSigin = () => {
    //   if (result) {
    //     router.replace("/salon");
    //   } else {
    //     router.replace("/intro");
    //   }
    // };
    // setTimeout(isSigin, 2000)

    router.replace("/intro");
  }, []);
  const toastConfig = {
    seccess: (props: any) => <BaseToast {...props} />,
  };
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(screen)'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(auth)/sign-up'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(auth)/verification'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(auth)/intro'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(other)/profile'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(other)/userComments'
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='(salon)'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(other)/cart'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(other)/workTime'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(other)/salonDetails'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(other)/salons'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(other)/choosoeTime'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(other)/payment'
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar
        backgroundColor='#db2777'
        style='light'
      />
      <Toast
        config={toastConfig}
        position='bottom'
        visibilityTime={2000}
      />
    </Provider>
  );
}
