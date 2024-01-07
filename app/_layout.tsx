import { useEffect } from 'react';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/inter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import theme from 'styles/theme';
import { ToastProvider } from 'common/interaction';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 60 seconds
      cacheTime: 1000 * 6 * 10, // 10 minutes
      retry: false,
    },
  },
});

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <StatusBar style="dark" />
              <Stack
                initialRouteName="index"
                screenOptions={{ header: () => null }}
              />
            </GestureHandlerRootView>
          </ToastProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
