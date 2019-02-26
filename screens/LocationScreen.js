import React from 'react';
import {View,Text,StyleSheet} from "react-native";
  
 class LocationScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Location</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  export default LocationScreen;