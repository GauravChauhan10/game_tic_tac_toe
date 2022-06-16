import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradient1 = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['red', 'yellow', 'green']}
        style={styles.linearGradient}>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3nP187Z_KVrkHii_lO6qRsP1AYDMyN6v_cg&usqp=CAU',
            }}
            style={{
              height: 160,
              width: 310,
            }}
          />
          <View>
            <LinearGradient
              colors={['red', 'yellow', 'green']}
              style={styles.label}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default LinearGradient1;

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  wrapper: {
    position: 'relative',
    lineHeight: 0,
  },
  label: {
    position: 'absolute',
    height: 68,
    width: 60,
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 100,
  },
});
