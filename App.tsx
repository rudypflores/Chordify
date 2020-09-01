import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MusicalNote from './components/MusicalNote';
import AppTitle from './components/AppTitle';

const App = () => {

  const handleClick = () => {
    console.log('Start button pressed.');
  };

  return (
    <View style={styles.main}>
      <StatusBar translucent backgroundColor={'#07529E'} barStyle={'light-content'}/>
      <View style={styles.titleContainer}>
        <AppTitle />
      </View>
      <LinearGradient colors={['#008CFF', '#07399E']} style={styles.drawer}>
        <MusicalNote />
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
        <Text style={styles.copyright}>RUDY FLORES 2020</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor:'#F7F7F7',
    flexDirection:'column',
  },
  titleContainer: {
    flex: 3,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    
  },
  drawer: {
    flex: 7,
    paddingHorizontal:30,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    flexDirection:'column',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  box: {
    backgroundColor: '#07529E',
    width:'70%',
    height:40,
    borderRadius:8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
    marginVertical:8
  },
  buttonContainer: {
    marginVertical:40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
    width:'40%'
  },
  buttonText: {
    color: '#F7F7F7',
    fontSize: 24,
    paddingVertical:5,
    backgroundColor:'#008CFF',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    borderRadius: 1
  },
  copyright: {
    color: '#F7F7F7',
    fontFamily: 'Lato-Light'
  }
});

export default App;