import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Lottie from 'lottie-react-native';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor:"gray",
        }}
      >
        <Text>Test</Text>
        <Lottie 
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
