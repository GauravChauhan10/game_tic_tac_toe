import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const New = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const scale = new Animated.Value(1);
  const onPress = () => {
    Animated.timing(scale, {
      toValue: 2,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };
  const saveButtonHeight = scale.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 2],
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {translateX: pan.x},
            {translateY: pan.y},
            {
              scale: saveButtonHeight,
            },
          ],
        }}
        {...panResponder.panHandlers}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.box} />
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
    borderWidth: 5,
    borderStyle: 'dotted',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
