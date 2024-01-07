import { useCallback } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ListItem } from './components/ListItem';
import { SortableList } from './components/SortableList';
import type { Positions } from './components/SortableList/types';
import { ITEM_HEIGHT, ITEMS, LINEAR_GRADIENT_COLORS, PADDING } from './constants';
import { BackgroundItem, StyledGradient } from './styled';

export function DragList() {
  const { width: windowWidth } = useWindowDimensions();
  const { top: safeTop } = useSafeAreaInsets();

  const onDragEnd = useCallback((data: Positions) => {
    // Convert the map into an array of [index, height] pairs
    const heightArray = Object.entries(data).map(([index, height]) => [
      parseInt(index, 10),
      height,
    ]);

    // Sort the array based on the height (second element in each pair)
    heightArray.sort((a, b) => a[1] - b[1]);

    const newOrder = heightArray.map(([index]) => index);

    // @TODO Save order to database
    console.log({ newOrder });
  }, []);

  // Shared value for tracking the currently active index (the item that is being dragged)
  // This is used to update the border radius of the active item
  const currentActiveIndex = useSharedValue<number | null>(null);

  return (
    <>
      <StyledGradient
        pointerEvents="none"
        colors={LINEAR_GRADIENT_COLORS}
        height={safeTop * 3}
      />
      <SortableList
        style={{
          paddingTop: safeTop,
        }}
        onAnimatedIndexChange={(index) => {
          currentActiveIndex.value = index;
        }}
        onDragEnd={onDragEnd}
        backgroundItem={
          // Kind of hacky way to make the background item have rounded corners
          <BackgroundItem width={windowWidth - PADDING * 2} />
        }
        showsVerticalScrollIndicator={false}
        data={ITEMS}
        listItemHeight={ITEM_HEIGHT}
        // At the beginning I was thinking about using a FlatList
        // but unfortunately it doesn't work well while dragging
        // (because the zIndex of the items is not updated correctly)
        renderItem={({ item, index }) => {
          return (
            <ListItem
              item={item}
              index={index}
              activeIndex={currentActiveIndex}
            />
          );
        }}
      />
    </>
  );
}
