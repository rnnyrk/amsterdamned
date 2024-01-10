import { View } from 'react-native';

export function Marker({ zoom }: MarkerProps) {
  let width = 12;
  let height = 12;

  if (zoom > 12) {
    width = 20;
    height = 20;
  }

  return (
    <View
      style={{
        width,
        height,
        borderRadius: 20,
        backgroundColor: 'blue',
      }}
    />
  );
}

type MarkerProps = {
  zoom: number;
};
