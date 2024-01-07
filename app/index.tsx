import { StatusBar } from 'expo-status-bar';

import { Onboarding } from 'modules/Onboarding';

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <Onboarding />
    </>
  );
}
