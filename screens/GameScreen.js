import * as React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {DraxProvider, DraxView} from 'react-native-drax';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import SoundPlayer from 'react-native-sound-player';

export function GameScreen({navigation, route}) {
  const {data, UserID, FolderPath} = route.params;
  console.log('DATA Transferred\n', JSON.stringify(route.params));

  const [image1, setImage1] = React.useState([]);
  const [image2, setImage2] = React.useState([]);
  const [image3, setImage3] = React.useState([]);
  const [image4, setImage4] = React.useState([]);

  let red_mp3 = SoundPlayer.loadSoundFile('red', 'mp3');
  let green_mp3 = SoundPlayer.loadSoundFile('green', 'mp3');
  let blue_mp3 = SoundPlayer.loadSoundFile('blue', 'mp3');
  let yellow_mp3 = SoundPlayer.loadSoundFile('yellow', 'mp3');

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
                  styles.magenta,
                ]}
                receivingStyle={styles.receiving}
                renderContent={({viewState}) => {
                  const receivingDrag = viewState && viewState.receivingDrag;
                  const payload = receivingDrag && receivingDrag.payload;
                  return (
                    <>
                      <Text>Image 1</Text>
                      <Text style={styles.incomingPayload}>
                        {payload || '-'}
                      </Text>
                      <Text style={styles.image1}>{image1.join(' ')}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setImage1([...image1, event.dragged.payload || '?']);
                }}
              />
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.magenta,
                ]}
                receivingStyle={styles.receiving}
                renderContent={({viewState}) => {
                  const receivingDrag = viewState && viewState.receivingDrag;
                  const payload = receivingDrag && receivingDrag.payload;
                  return (
                    <>
                      <Text>Image 2</Text>
                      <Text style={styles.incomingPayload}>
                        {payload || '-'}
                      </Text>
                      <Text style={styles.image2}>{image2.join(' ')}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setImage2([...image2, event.dragged.payload || '?']);
                }}
              />
            </View>

            <View style={styles.imageContainer}>
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.magenta,
                ]}
                receivingStyle={styles.receiving}
                renderContent={({viewState}) => {
                  const receivingDrag = viewState && viewState.receivingDrag;
                  const payload = receivingDrag && receivingDrag.payload;
                  return (
                    <>
                      <Text>Image 3</Text>
                      <Text style={styles.incomingPayload}>
                        {payload || '-'}
                      </Text>
                      <Text style={styles.image3}>{image3.join(' ')}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setImage3([...image3, event.dragged.payload || '?']);
                }}
              />
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.magenta,
                ]}
                receivingStyle={styles.receiving}
                renderContent={({viewState}) => {
                  const receivingDrag = viewState && viewState.receivingDrag;
                  const payload = receivingDrag && receivingDrag.payload;
                  return (
                    <>
                      <Text>Image 4</Text>
                      <Text style={styles.incomingPayload}>
                        {payload || '-'}
                      </Text>
                      <Text style={styles.image4}>{image4.join(' ')}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setImage4([...image4, event.dragged.payload || '?']);
                }}
              />
            </View>
          </View>
          <View style={styles.palette}>
            <DraxView
              style={[styles.centeredContent, styles.draggableBox, styles.red]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              hoverDraggingStyle={styles.hoverDragging}
              dragPayload={'R'}
              longPressDelay={0}>
              <Text>RED</Text>
            </DraxView>
            <DraxView
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.green,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              hoverDraggingStyle={styles.hoverDragging}
              dragPayload={'G'}
              longPressDelay={0}>
              <Text>GREEN</Text>
            </DraxView>
            <DraxView
              style={[styles.centeredContent, styles.draggableBox, styles.blue]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              hoverDraggingStyle={styles.hoverDragging}
              dragPayload={'B'}
              longPressDelay={0}>
              <Text>BLUE</Text>
            </DraxView>
            <DraxView
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.yellow,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              hoverDraggingStyle={styles.hoverDragging}
              dragPayload={'Y'}
              longPressDelay={0}>
              <Text>YELLOW</Text>
            </DraxView>
          </View>
          <View style={styles.Audiopalette}>
            <View style={{width: '10%'}}>
              <Button
                title=""
                color="#ffaaaa"
                onPress={() => SoundPlayer.playSoundFile('red', 'mp3')}
              />
            </View>
            <View style={{width: '10%'}}>
              <Button
                title=""
                color="#aaffaa"
                onPress={() => SoundPlayer.playSoundFile('green', 'mp3')}
              />
            </View>
            <View style={{width: '10%'}}>
              <Button
                title=""
                color="#aaaaff"
                onPress={() => SoundPlayer.playSoundFile('blue', 'mp3')}
              />
            </View>
            <View style={{width: '10%'}}>
              <Button
                title=""
                color="#ffffaa"
                onPress={() => SoundPlayer.playSoundFile('yellow', 'mp3')}
              />
            </View>
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
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
    backgroundColor: '#121212',
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
  receivingZone: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  image1: {
    marginTop: 10,
    fontSize: 18,
  },
  image2: {
    marginTop: 10,
    fontSize: 18,
  },
  image3: {
    marginTop: 10,
    fontSize: 18,
  },
  image4: {
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
    backgroundColor: '#aaffaa',
  },
  blue: {
    backgroundColor: '#aaaaff',
  },
  red: {
    backgroundColor: '#ffaaaa',
  },
  yellow: {
    backgroundColor: '#ffffaa',
  },
  cyan: {
    backgroundColor: '#aaffff',
  },
  magenta: {
    backgroundColor: '#ffaaff',
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
});
