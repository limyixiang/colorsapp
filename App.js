import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlockRGB from './components/BlockRGB';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {

  const [colors, setColors] = useState([
    { red: 255, green: 0, blue: 0, id: "0" },
    { red: 255, green: 255, blue: 0, id: "1" },
    { red: 255, green: 0, blue: 255, id: "2" },
  ]);

  function renderItem({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />
  }

  function addColor() {
    setColors([
      ...colors,
      {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255),
        id: `${colors.length}`.toString(),
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Pressable 
        style={{ height: 40, justifyContent: "center", width: "100%", alignItems: "center"}}
        onPress={addColor}>
        <Text style={{ color: "red", fontWeight: "bold" }}>Add a color</Text>
      </Pressable>
      <FlatList style={styles.list} data={colors} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    width: "100%",
  },
});
