
import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', //flex-end , flex-start, center , space-between, space-around, space-evenly
    alignItems: 'center' // flex-start, flex-end , stretch
  },
  hello: {
    color: 'red',
  }
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
const App = () => {

  return (
    // 위에 탭쪽을 자동으로 비워줌
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.hello}>안녕 세상아~</Text>
      <View style={{ flexDirection: 'row' }}>
        <Love type="one"></Love>
        <Text>2021.02.14 ~</Text>
      </View>
      <Love type="two"></Love> */}
      {/* 상위 flex 속해 있는 하위 flex는 태그 갯수에 따라 차지하는 비율의 최대가 정해지고 
          입력되는 값에 따라 비율을 정할 수 있다.
      */}
      <View style={{ flex: 1, backgroundColor: 'red', width: 50, height: 50 }}></View>
      <View style={{ flex: 2, backgroundColor: 'blue', width: 100, height: 100 }}></View>
      <View style={{ flex: 3, backgroundColor: 'orange', width: 150, height: 150 }}></View>
    </SafeAreaView>
  );
};


export default App;
