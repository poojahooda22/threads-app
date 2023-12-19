import { StyleSheet, SafeAreaView, ScrollView, Platform, RefreshControl } from 'react-native';
import { useRef } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Lottie from 'lottie-react-native';
import * as React from 'react';
import LottieView from 'lottie-react-native';
import { createRandomUser } from '../../utils/generate-dommy-data';
import { ThreadsContext } from '../../context/thread-context';
import ThreadsItem from '../../components/ThreadsItem';


const user = createRandomUser();

console.log(user);

export default function TabOneScreen() {
  const animationRef = React.useRef<LottieView>(null);
  const threads = React.useContext(ThreadsContext);
  // const animationRef = useRef(null);

  return (
    <SafeAreaView >
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({android: 10}), 
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play();
            }}
            tintColor={"transparent"}
            />
        }
      >
        <LottieView 
          ref={animationRef}
          source={require('../../lottie-animations/thread.json')}   
          loop
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />

        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread} />
        ))}
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
