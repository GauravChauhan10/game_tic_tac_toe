import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import React from 'react';
// import LinearGradient1 from './src/linearGradient';
// import Tic_Tac_Toe from './src/Tic_Tac_Toe';
import Drag_drop from './src/Drag_drop';

const App = () => {
  return (
    <View>
      {/* <Tic_Tac_Toe /> */}
      {/* <LinearGradient1 /> */}
      <Drag_drop />
    </View>
  );
};

export default App;
