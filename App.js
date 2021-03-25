import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location";
import { Alert } from 'react-native';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("We can't find you", "so sad");
    }
    
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading} = isLoading;
    return isLoading ? <Loading /> : null;
  }
}