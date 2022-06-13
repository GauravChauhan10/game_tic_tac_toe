import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const Tic_Tac_Toe = () => {
  const [active_player, setActive_player] = useState('0');
  const [marker, setMarker] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const markPostion = position => {
    if (!marker[position]) {
      let temp = [...marker];
      temp[position] = active_player;
      setMarker(temp);
      if (active_player === 'X') {
        setActive_player('0');
      } else {
        setActive_player('X');
      }
    }
  };
  const resetMarkers = () => {
    setMarker([null, null, null, null, null, null, null, null, null]);
  };
  const calculateWinner = square => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[b] === square[c] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };
  useEffect(() => {
    const winner = calculateWinner(marker);
    if (winner === 'X') {
      alert('Player X wins');
      resetMarkers();
    } else if (winner === '0') {
      alert('player 0 wins');
      resetMarkers();
    }
  }, [marker]);

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.PlayerInfo,
          {backgroundColor: active_player === 'X' ? 'red' : 'green'},
        ]}>
        <Text style={{fontSize: 40}}>Now Player {active_player}'s turn</Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={[
              styles.box,
              {
                borderLeftWidth: 0,
                borderTopWidth: 0,
              },
            ]}
            onPress={() => {
              markPostion(0);
            }}>
            <View style={styles.textView}>
              {marker[0] === 'X' && <Text style={styles.textX}>X</Text>}
              {marker[0] === '0' && <Text style={styles.text0}>0</Text>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, {borderTopWidth: 0}]}
            onPress={() => {
              markPostion(1);
            }}>
            <View style={styles.textView}>
              {marker[1] === 'X' && <Text style={styles.textX}>X</Text>}
              {marker[1] === '0' && <Text style={styles.text0}>0</Text>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, {borderTopWidth: 0, borderRightWidth: 0}]}
            onPress={() => {
              markPostion(2);
            }}>
            <View style={styles.textView}>
              {marker[2] === 'X' && <Text style={styles.textX}>X</Text>}
              {marker[2] === '0' && <Text style={styles.text0}>0</Text>}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, {borderLeftWidth: 0}]}
            onPress={() => {
              markPostion(3);
            }}>
            <View style={styles.textView}>
              {marker[3] === 'X' && <Text style={styles.textX}>X</Text>}
              {marker[3] === '0' && <Text style={styles.text0}>0</Text>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              markPostion(4);
            }}>
            <View style={styles.textView}>
              {marker[4] === 'X' && <Text style={styles.textX}>X</Text>}
              {marker[4] === '0' && <Text style={styles.text0}>0</Text>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, {borderRightWidth: 0}]}
            onPress={() => {
              markPostion(5);
            }}>
            <View style={styles.textView}>
              {marker[5] === 'X' && <Text style={styles.textX}>X</Text>}
              {marker[5] === '0' && <Text style={styles.text0}>0</Text>}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, {borderLeftWidth: 0, borderBottomWidth: 0}]}
            onPress={() => {
              markPostion(6);
            }}>
            <View style={styles.textView}>
              {marker[6] === 'X' && <Text style={styles.textX}>X</Text>}
              {marker[6] === '0' && <Text style={styles.text0}>0</Text>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, {borderBottomWidth: 0}]}
            onPress={() => {
              markPostion(7);
            }}>
            <View style={styles.textView}>
              {marker[7] === 'X' && <Text style={styles.textX}>X</Text>}
              {marker[7] === '0' && <Text style={styles.text0}>0</Text>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, {borderRightWidth: 0, borderBottomWidth: 0}]}
            onPress={() => {
              markPostion(8);
            }}>
            <View style={styles.textView}>
              {marker[8] === 'X' && <Text style={styles.textX}>X</Text>}
              {marker[8] === '0' && <Text style={styles.text0}>0</Text>}
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetMarkers}>
        <Image
          source={{
            uri: 'https://cdn-icons.flaticon.com/png/128/2618/premium/2618245.png?token=exp=1655100997~hmac=13158c45111c7e75f75d450dbc404cc8',
          }}
          style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Tic_Tac_Toe;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'center',
  },
  box: {
    borderWidth: 7,
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  textX: {
    color: 'red',
    fontSize: 70,
    fontWeight: '600',
  },
  textView: {
    alignSelf: 'center',
  },
  text0: {
    color: 'green',
    fontSize: 70,
    fontWeight: '600',
  },
  PlayerInfo: {
    alignItems: 'center',
    marginVertical: 50,
    padding: 5,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  resetButton: {
    flex: 0,
    marginVertical: 20,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    backgroundColor: 'lightblue',
    borderRadius: 50,
    padding: 5,
  },
});
