import React, {useState} from 'react';

import {View, Image, StyleSheet, Button, Text} from 'react-native';
import {DraxProvider, DraxView} from 'react-native-drax';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import SoundPlayer from 'react-native-sound-player';

export function GameScreen({navigation, route}) {
  const {data, UserID} = route.params;

  const IterationID =
    (100000 + Math.random() * 1000000).toFixed(0).toString() + '_' + UserID;

  const [json, setjson] = useState({
    name: data.Name,
    age: data.Age,
    sex: data.Sex,
    id: UserID,
    iteration: IterationID,
    classifications: {},
  });

  let imagePaths = {
    1: require('../assets/images/1.jpg'),
    2: require('../assets/images/2.jpg'),
    3: require('../assets/images/3.jpg'),
    4: require('../assets/images/4.jpg'),
    5: require('../assets/images/5.jpg'),
    6: require('../assets/images/6.jpg'),
    7: require('../assets/images/7.jpg'),
    8: require('../assets/images/8.jpg'),
    9: require('../assets/images/9.jpg'),
    10: require('../assets/images/10.jpg'),
    11: require('../assets/images/11.jpg'),
    12: require('../assets/images/12.jpg'),
    13: require('../assets/images/13.jpg'),
    14: require('../assets/images/14.jpg'),
    15: require('../assets/images/15.jpg'),
    16: require('../assets/images/16.jpg'),
    17: require('../assets/images/17.jpg'),
    18: require('../assets/images/18.jpg'),
    19: require('../assets/images/19.jpg'),
    20: require('../assets/images/20.jpg'),
    21: require('../assets/images/21.jpg'),
    22: require('../assets/images/22.jpg'),
    23: require('../assets/images/23.jpg'),
    24: require('../assets/images/24.jpg'),
    25: require('../assets/images/25.jpg'),
    26: require('../assets/images/26.jpg'),
    27: require('../assets/images/27.jpg'),
    28: require('../assets/images/28.jpg'),
    29: require('../assets/images/29.jpg'),
    30: require('../assets/images/30.jpg'),
    31: require('../assets/images/31.jpg'),
    32: require('../assets/images/32.jpg'),
    33: require('../assets/images/33.jpg'),
    34: require('../assets/images/34.jpg'),
    35: require('../assets/images/35.jpg'),
    36: require('../assets/images/36.jpg'),
    37: require('../assets/images/37.jpg'),
    38: require('../assets/images/38.jpg'),
    39: require('../assets/images/39.jpg'),
    40: require('../assets/images/40.jpg'),
    41: require('../assets/images/41.jpg'),
    42: require('../assets/images/42.jpg'),
    43: require('../assets/images/43.jpg'),
    44: require('../assets/images/44.jpg'),
    45: require('../assets/images/45.jpg'),
    46: require('../assets/images/46.jpg'),
    47: require('../assets/images/47.jpg'),
    48: require('../assets/images/48.jpg'),
    49: require('../assets/images/49.jpg'),
    50: require('../assets/images/50.jpg'),
    51: require('../assets/images/51.jpg'),
    52: require('../assets/images/52.jpg'),
    53: require('../assets/images/53.jpg'),
    54: require('../assets/images/54.jpg'),
    55: require('../assets/images/55.jpg'),
    56: require('../assets/images/56.jpg'),
    57: require('../assets/images/57.jpg'),
    58: require('../assets/images/58.jpg'),
    59: require('../assets/images/59.jpg'),
    60: require('../assets/images/60.jpg'),
    61: require('../assets/images/61.jpg'),
    62: require('../assets/images/62.jpg'),
    63: require('../assets/images/63.jpg'),
    64: require('../assets/images/64.jpg'),
    65: require('../assets/images/65.jpg'),
    66: require('../assets/images/66.jpg'),
    67: require('../assets/images/67.jpg'),
    68: require('../assets/images/68.jpg'),
    69: require('../assets/images/69.jpg'),
    70: require('../assets/images/70.jpg'),
    71: require('../assets/images/71.jpg'),
    72: require('../assets/images/72.jpg'),
    73: require('../assets/images/73.jpg'),
    74: require('../assets/images/74.jpg'),
    75: require('../assets/images/75.jpg'),
    76: require('../assets/images/76.jpg'),
    77: require('../assets/images/77.jpg'),
    78: require('../assets/images/78.jpg'),
    79: require('../assets/images/79.jpg'),
    80: require('../assets/images/80.jpg'),
    81: require('../assets/images/81.jpg'),
    82: require('../assets/images/82.jpg'),
    83: require('../assets/images/83.jpg'),
    84: require('../assets/images/84.jpg'),
    85: require('../assets/images/85.jpg'),
    86: require('../assets/images/86.jpg'),
    87: require('../assets/images/87.jpg'),
    88: require('../assets/images/88.jpg'),
    89: require('../assets/images/89.jpg'),
    90: require('../assets/images/90.jpg'),
    91: require('../assets/images/91.jpg'),
    92: require('../assets/images/92.jpg'),
    93: require('../assets/images/93.jpg'),
    94: require('../assets/images/94.jpg'),
    95: require('../assets/images/95.jpg'),
    96: require('../assets/images/96.jpg'),
    97: require('../assets/images/97.jpg'),
    98: require('../assets/images/98.jpg'),
    99: require('../assets/images/99.jpg'),
    100: require('../assets/images/100.jpg'),
  };

  const [images, setimages] = useState([
    imagePaths[1],
    imagePaths[2],
    imagePaths[3],
    imagePaths[4],
  ]);

  const [grid1, setgrid1] = React.useState('');
  const [grid2, setgrid2] = React.useState('');
  const [grid3, setgrid3] = React.useState('');
  const [grid4, setgrid4] = React.useState('');

  const [score, setScore] = useState(4);

  function updateGrid() {
    json.classifications[score - 3] = grid1;
    json.classifications[score - 2] = grid2;
    json.classifications[score - 1] = grid3;
    json.classifications[score - 0] = grid4;

    if (score == 100) {
      navigation.navigate('Results', {json, IterationID});
      return;
    }

    setimages([
      imagePaths[score + 1],
      imagePaths[score + 2],
      imagePaths[score + 3],
      imagePaths[score + 4],
    ]);

    setScore(score + 4);

    setgrid1('');
    setgrid2('');
    setgrid3('');
    setgrid4('');
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DraxProvider>
        <View style={styles.container}>
          <View style={styles.allImages}>
            <View style={styles.imageContainer}>
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.ghostwhite,
                ]}
                receivingStyle={styles.receiving}
                renderContent={() => {
                  return (
                    <>
                      <Image
                        style={styles.image}
                        source={images[0]}
                        resizeMode="cover"
                      />
                      <Text style={{color: '#292b2c'}}>{grid1}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid1(event.dragged.payload);
                }}
              />
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.ghostwhite,
                ]}
                receivingStyle={styles.receiving}
                renderContent={() => {
                  return (
                    <>
                      <Image
                        style={styles.image}
                        source={images[1]}
                        resizeMode="cover"
                      />
                      <Text style={{color: '#292b2c'}}>{grid2}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid2(event.dragged.payload);
                }}
              />
            </View>

            <View style={styles.imageContainer}>
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.ghostwhite,
                ]}
                receivingStyle={styles.receiving}
                renderContent={() => {
                  return (
                    <>
                      <Image
                        style={styles.image}
                        source={images[2]}
                        resizeMode="cover"
                      />
                      <Text style={{color: '#292b2c'}}>{grid3}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid3(event.dragged.payload);
                }}
              />
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.ghostwhite,
                ]}
                receivingStyle={styles.receiving}
                renderContent={() => {
                  return (
                    <>
                      <Image
                        style={styles.image}
                        source={images[3]}
                        resizeMode="cover"
                      />
                      <Text style={{color: '#292b2c'}}>{grid4}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid4(event.dragged.payload);
                }}
              />
            </View>
          </View>

          <View style={styles.palette}>
            <DraxView
              style={[styles.centeredContent, styles.draggableBox, styles.red]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Red'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('red', 'mp3')
              }></DraxView>
            <DraxView
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.green,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Green'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('green', 'mp3')
              }></DraxView>
            <DraxView
              style={[styles.centeredContent, styles.draggableBox, styles.blue]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Blue'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('blue', 'mp3')
              }></DraxView>
            <DraxView
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.yellow,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Yellow'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('yellow', 'mp3')
              }></DraxView>
          </View>

          <View style={{margin: 20, padding: 20}}>
            <Button onPress={() => updateGrid()} title="Next" color="#292b2c" />
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 140,
    borderRadius: 10,
  },
  receivingZone: {
    height: 170,
    width: 170,
    borderRadius: 15,
  },
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  allImages: {
    flex: 1,
    padding: 15,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receiving: {
    borderColor: '#292b2c',
    borderWidth: 4,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  grid1: {
    color: '#292b2c',
    marginTop: 10,
    fontSize: 18,
  },
  grid2: {
    color: '#292b2c',
    marginTop: 10,
    fontSize: 18,
  },
  grid3: {
    color: '#292b2c',
    marginTop: 10,
    fontSize: 18,
  },
  grid4: {
    color: '#292b2c',
    marginTop: 10,
    fontSize: 18,
  },
  palette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Audiopalette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  draggableBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  audioButton: {
    width: '25%',
    borderRadius: 10,
  },
  green: {
    color: '#5cb85c',
    backgroundColor: '#5cb85c',
  },
  blue: {
    color: '#5bc0de',
    backgroundColor: '#5bc0de',
  },
  red: {
    color: '#d9534f',
    backgroundColor: '#d9534f',
  },
  yellow: {
    color: '#f0ad4e',
    backgroundColor: '#f0ad4e',
  },
  ghostwhite: {
    backgroundColor: '#f7f7f7',
  },
  dragging: {
    opacity: 0.2,
  },
});
