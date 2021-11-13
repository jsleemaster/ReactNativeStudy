
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HookScreen from './Components/Hook'

const Stack = createNativeStackNavigator();
// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center', //flex-end , flex-start, center , space-between, space-around, space-evenly
    alignItems: 'center' // flex-start, flex-end , stretch
  },
  // hello: {
  //   color: 'red',
  // }
});
class Love extends Component {
  render() {

    let image;
    if (this.props.type === "one") {
      image = require("./assets/love.jpg");
    } else {
      image = require("./assets/love2.jpg");
    }
    return (
      <View>
        <Image source={image} style={{ width: 100, height: 100 }}></Image>
      </View>
    )
  }

}

// const HomeScreen = ({ navigation }) => { //home
//   return (
//     <View style={styles.container}>
//       <Text>Home</Text>
//       <Button title="프로필 페이지로 이동" onPress={() => {
//         navigation.navigate('Profile', {
//           name: 'Sunmyoung Lee',
//         })
//       }} />
//       <Button title="Hook 을 이용하는 방법" onPress={() => {
//         navigation.navigate('Hook')
//       }} />
//       {/* navigate('name') Stack.Screen 에 name 으로 지정한 값을 넣으면 그 페이지로 이동한다. */}
//       {/* props로 navigation 을 보내줘야한다. */}
//     </View>
//   )
// }
const ProfileScreen = ({ navigation, route }) => { //Profile, route를 받아오는 방법

  const { name } = route.params
  const { itemId } = route.params

  return (
    <View style={styles.container}>
      <Text>This is {route.params.name}</Text>
      {/* <Text>JSON 형태 변환 -> {JSON.stringify(name)}</Text> */}
      <Text>{name}</Text>
      <Text> 원하는 페이지의 초기값을 건네 줄 수 있다.{itemId}</Text>
      <Button title="디테일 페이지.." onPress={() => { navigation.push('Profile', { name: name }) }}></Button>
      <Button title="Go back" onPress={() => navigation.goBack()}></Button>
      <Button title="Pop To Top" onPress={() => navigation.popToTop()}></Button>
      {/* 계속 새로운 페이지를 쌓으면서 이동*/}
    </View>
  )
}
function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}
const App = () => {
  return (
    // SafeAreaView : 위에 탭쪽을 자동으로 비워줌
    // <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{ itemId: 1000 }}  //초기 값을 정해서 넘겨줄수있다
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="Hook"
          component={HookScreen}
          options={{ title: 'Hook' }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // {/* <Text style={styles.hello}>안녕 세상아~</Text>
    // <View style={{ flexDirection: 'row' }}>
    //   <Love type="one"></Love>
    //   <Text>2021.02.14 ~</Text>
    // </View>
    // <Love type="two"></Love> */}
    // {/* 상위 flex 속해 있는 하위 flex는 태그 갯수에 따라 차지하는 비율의 최대가 정해지고 
    //     입력되는 값에 따라 비율을 정할 수 있다.
    // */}
    // {/* <View style={{ flex: 1, backgroundColor: 'red', width: 50, height: 50 }}></View>
    // <View style={{ flex: 2, backgroundColor: 'blue', width: 100, height: 100 }}></View>
    // <View style={{ flex: 3, backgroundColor: 'orange', width: 150, height: 150 }}></View> */}
    // </SafeAreaView>
  );
};


export default App;
