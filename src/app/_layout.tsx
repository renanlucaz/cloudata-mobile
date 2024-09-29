import '../../ReactotronConfig'
import { Stack } from 'expo-router/stack';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from '../store';

if (__DEV__) {
  require("../../ReactotronConfig")
}

export default function Layout() {
  return (
    <>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" />
          <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
        </Stack>
      </Provider>
      <Toast />
    </>
  );
}