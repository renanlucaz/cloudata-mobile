import { Stack } from 'expo-router/stack';
import { Provider } from 'react-redux';
import { store } from '../store';

if (__DEV__) {
  require("../../ReactotronConfig")
}

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}