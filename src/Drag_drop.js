import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
} from 'react-native';

const Drag_drop = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [visible, setVisible] = useState(true);
  const scale = new Animated.Value(1);
  const saveButtonHeight = scale.interpolate({
    inputRange: [1, 2],
    outputRange: visible ? [2, 1] : [1, 2],
  });
  useEffect(() => {
    Animated.timing(scale, {
      toValue: 2,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, [visible]);
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
        <TouchableWithoutFeedback
          onPress={() => {
            setVisible(!visible);
          }}>
          <View style={styles.box} />
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};

export default Drag_drop;

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
