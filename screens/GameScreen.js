import React, {useState} from 'react';

import {View, Image, StyleSheet, Button, Text} from 'react-native';
import {DraxProvider, DraxView} from 'react-native-drax';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FileSystem from 'react-native-fs';
import Sound from 'react-native-sound';

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

  let images_folder_path =
    'file:///storage/emulated/0/Android/data/com.specifi/files/images/';

  let imagePaths = {
    1: images_folder_path + '1.jpg',
    2: images_folder_path + '2.jpg',
    3: images_folder_path + '3.jpg',
    4: images_folder_path + '4.jpg',
    5: images_folder_path + '5.jpg',
    6: images_folder_path + '6.jpg',
    7: images_folder_path + '7.jpg',
    8: images_folder_path + '8.jpg',
    9: images_folder_path + '9.jpg',
    10: images_folder_path + '10.jpg',
    11: images_folder_path + '11.jpg',
    12: images_folder_path + '12.jpg',
    13: images_folder_path + '13.jpg',
    14: images_folder_path + '14.jpg',
    15: images_folder_path + '15.jpg',
    16: images_folder_path + '16.jpg',
    17: images_folder_path + '17.jpg',
    18: images_folder_path + '18.jpg',
    19: images_folder_path + '19.jpg',
    20: images_folder_path + '20.jpg',
    21: images_folder_path + '21.jpg',
    22: images_folder_path + '22.jpg',
    23: images_folder_path + '23.jpg',
    24: images_folder_path + '24.jpg',
    25: images_folder_path + '25.jpg',
    26: images_folder_path + '26.jpg',
    27: images_folder_path + '27.jpg',
    28: images_folder_path + '28.jpg',
    29: images_folder_path + '29.jpg',
    30: images_folder_path + '30.jpg',
    31: images_folder_path + '31.jpg',
    32: images_folder_path + '32.jpg',
    33: images_folder_path + '33.jpg',
    34: images_folder_path + '34.jpg',
    35: images_folder_path + '35.jpg',
    36: images_folder_path + '36.jpg',
    37: images_folder_path + '37.jpg',
    38: images_folder_path + '38.jpg',
    39: images_folder_path + '39.jpg',
    40: images_folder_path + '40.jpg',
    41: images_folder_path + '41.jpg',
    42: images_folder_path + '42.jpg',
    43: images_folder_path + '43.jpg',
    44: images_folder_path + '44.jpg',
    45: images_folder_path + '45.jpg',
    46: images_folder_path + '46.jpg',
    47: images_folder_path + '47.jpg',
    48: images_folder_path + '48.jpg',
    49: images_folder_path + '49.jpg',
    50: images_folder_path + '50.jpg',
    51: images_folder_path + '51.jpg',
    52: images_folder_path + '52.jpg',
    53: images_folder_path + '53.jpg',
    54: images_folder_path + '54.jpg',
    55: images_folder_path + '55.jpg',
    56: images_folder_path + '56.jpg',
    57: images_folder_path + '57.jpg',
    58: images_folder_path + '58.jpg',
    59: images_folder_path + '59.jpg',
    60: images_folder_path + '60.jpg',
    61: images_folder_path + '61.jpg',
    62: images_folder_path + '62.jpg',
    63: images_folder_path + '63.jpg',
    64: images_folder_path + '64.jpg',
    65: images_folder_path + '65.jpg',
    66: images_folder_path + '66.jpg',
    67: images_folder_path + '67.jpg',
    68: images_folder_path + '68.jpg',
    69: images_folder_path + '69.jpg',
    70: images_folder_path + '70.jpg',
    71: images_folder_path + '71.jpg',
    72: images_folder_path + '72.jpg',
    73: images_folder_path + '73.jpg',
    74: images_folder_path + '74.jpg',
    75: images_folder_path + '75.jpg',
    76: images_folder_path + '76.jpg',
    77: images_folder_path + '77.jpg',
    78: images_folder_path + '78.jpg',
    79: images_folder_path + '79.jpg',
    80: images_folder_path + '80.jpg',
    81: images_folder_path + '81.jpg',
    82: images_folder_path + '82.jpg',
    83: images_folder_path + '83.jpg',
    84: images_folder_path + '84.jpg',
    85: images_folder_path + '85.jpg',
    86: images_folder_path + '86.jpg',
    87: images_folder_path + '87.jpg',
    88: images_folder_path + '88.jpg',
    89: images_folder_path + '89.jpg',
    90: images_folder_path + '90.jpg',
    91: images_folder_path + '91.jpg',
    92: images_folder_path + '92.jpg',
    93: images_folder_path + '93.jpg',
    94: images_folder_path + '94.jpg',
    95: images_folder_path + '95.jpg',
    96: images_folder_path + '96.jpg',
    97: images_folder_path + '97.jpg',
    98: images_folder_path + '98.jpg',
    99: images_folder_path + '99.jpg',
    100: images_folder_path + '100.jpg',
  };

  const [images, setimages] = useState([
    imagePaths[1],
    imagePaths[2],
    imagePaths[3],
    imagePaths[4],
  ]);

  const [grid1, setgrid1] = useState('');
  const [grid2, setgrid2] = useState('');
  const [grid3, setgrid3] = useState('');
  const [grid4, setgrid4] = useState('');

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

  function playAudio(name) {
    var sound = new Sound(
      name + '.mp3',
      FileSystem.ExternalDirectoryPath + '/audios',
      error => {
        if (error) {
          return;
        }
        sound.play();
      },
    );
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
                        source={{
                          uri: images[0],
                        }}
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
                        source={{
                          uri: images[1],
                        }}
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
                        source={{
                          uri: images[2],
                        }}
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
                        source={{
                          uri: images[3],
                        }}
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
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.orange,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Orange'}
              longPressDelay={0.5}></DraxView>
            <DraxView
              style={[styles.centeredContent, styles.draggableBox, styles.rose]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Rose'}
              longPressDelay={1}></DraxView>
            <DraxView
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.purple,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Purple'}
              longPressDelay={0.5}></DraxView>
            <DraxView
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.yellow,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Yellow'}
              longPressDelay={0.5}></DraxView>
          </View>

          <View style={styles.palette}>
            <View style={[styles.audioBox, styles.orange]}>
              <Button
                title=""
                color={'#FE6100'}
                onPress={() => {
                  playAudio('orange', 1);
                }}
              />
            </View>
            <View style={[styles.audioBox, styles.rose]}>
              <Button
                title=""
                color={'#DC267F'}
                onPress={() => {
                  playAudio('rose', 1);
                }}
              />
            </View>
            <View style={[styles.audioBox, styles.purple]}>
              <Button
                title=""
                color={'#785EF0'}
                onPress={() => {
                  playAudio('purple', 1);
                }}
              />
            </View>
            <View style={[styles.audioBox, styles.yellow]}>
              <Button
                title=""
                color={'#FFB000'}
                onPress={() => {
                  playAudio('yellow', 1);
                }}
              />
            </View>
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
    width: 160,
    height: 160,
    borderRadius: 5,
  },
  receivingZone: {
    height: 185,
    width: 165,
    borderRadius: 5,
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
    padding: 10,
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
  audioBox: {
    width: 60,
    height: 30,
    borderRadius: 10,
    marginTop: 5,
  },
  rose: {
    color: '#DC267F',
    backgroundColor: '#DC267F',
  },
  purple: {
    color: '#785EF0',
    backgroundColor: '#785EF0',
  },
  orange: {
    color: '#FE6100',
    backgroundColor: '#FE6100',
  },
  yellow: {
    color: '#FFB000',
    backgroundColor: '#FFB000',
  },
  ghostwhite: {
    backgroundColor: '#f7f7f7',
  },
  dragging: {
    opacity: 0.2,
  },
});
