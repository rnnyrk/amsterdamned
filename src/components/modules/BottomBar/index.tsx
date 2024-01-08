import { useCallback } from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router/tabs';

import { BottomTabBar } from './components/bottom-tab-bar';

export function BottomBar() {
  const tabBar = useCallback((props: BottomTabBarProps) => {
    return <BottomTabBar {...props} />;
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={tabBar}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          href: '/dashboard',
        }}
      />
    </Tabs>
    // <BottomTab.Navigator
    //   initialRouteName="Home"
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    //   tabBar={tabBar}
    // >
    //   {ScreenNamesArray.map((key) => {
    //     return (
    //       <BottomTab.Screen
    //         key={key}
    //         name={key}
    //         component={ScreenMap[key]}
    //         options={{
    //           freezeOnBlur: true,
    //         }}
    //       />
    //     );
    //   })}
    // </BottomTab.Navigator>
  );
}
