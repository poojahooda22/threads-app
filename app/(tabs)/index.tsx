import { StyleSheet, SafeAreaView, ScrollView, Platform, RefreshControl } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Lottie from 'lottie-react-native';
import * as React from 'react';
import LottieView from 'lottie-react-native';

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null)
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({android: 10}), 
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {}}
            tintColor={"transparent"}
            />
        }
      >
        <Lottie 
          // ref={animationRef}
          source={require('../../lottie-animations/thread2.json')} 
          autoPlay 
          loop={true}
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
