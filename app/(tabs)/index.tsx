import { StyleSheet, SafeAreaView, ScrollView, Platform, RefreshControl } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import LottieView from 'lottie-react-native';
import * as React from 'react';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          // paddingTop: Platform.select({android: 10}), 
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {}}
            tintColor={"transparent"}
            />
        }
      >
        <LottieView 
          source={require('../../lottie-animations/thread.json')} 
          autoPlay 
          loop={true}
          style={{ width: 150, height: 150, alignSelf: "center" }}
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
