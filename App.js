<<<<<<< HEAD
/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from "react-native-maps";
import * as Permissions from "expo-permissions";

export default class App extends React.Component {
  state = {
    latitude: null,
    longitude: null
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status != 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
    navigator.geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => this.setState({ latitude, longitude}, () => console.long('State:' , this.state)),
      (error) == console.log('Error: ', error)
    )
  }

  render() {
    const { latitude, longitude } = this.state

    if (latitude) {
      return (
        <MapView
          style = {{ flex : 1}}
          initialRegion = {{
            latitude,
            longitude,
            latitudeDelta: 0.0992,
            longitudeDelta: 0.0421
          }}
          >
        </MapView>
      );
    }
    return (
      <View style= {{ flex : 1, justifyContent: 'center', alignItems: 'center' }}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
          colors={['#9232db', '#9c4fd6', '#c99aed', '#c7a3e3']}
          style={{flex: 1}}
          >
            <Text style={styles.text}>Hello World</Text>
        </LinearGradient>
    );
  }
}

    
const styles = StyleSheet.create({
  text: {
      fontSize: 56,
      position: 'absolute',
      left: '15%',
      top: '40%',
      color: 'white',
  }
}
)

=======
import React, { useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { decode } from "@mapbox/polyline";

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9"
      }
    ]
  },
  // ...
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#3e73fd"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70"
      }
    ]
  }
];

const getDirections = async (startLoc, destinationLoc) => {
  try {
    const KEY = "AIzaSyAsuesRQJwqZ87KcgBk2izYxW67QGi_mbU";
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    console.log(points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1]
      };
    });
    return coords;
  } catch (error) {
    return error;
  }
};

const CustomMarker = () => (
  <View
    style={{
      paddingVertical: 10,
      paddingHorizontal: 30,
      backgroundColor: "#007bff",
      borderColor: "#eee",
      borderRadius: 5,
      elevation: 10
    }}
  >
    <Text style={{ color: "#ffa" }}>Berlin</Text>
  </View>
);

const App = () => {
  const Berlin = {
    latitude: 52.5200066,
    longitude: 13.404954
  };

  const Frankfurt = {
    latitude: 50.1109221,
    longitude: 8.6821267
  };

  const [region, setRegion] = useState({
    latitude: 52.5200066,
    longitude: 13.404954,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
      customMapStyle={mapStyle}
    >
      <Marker coordinate={{ latitude: 52.5200066, longitude: 13.404954 }} />
      <Marker coordinate={{ latitude: 50.1109221, longitude: 8.6821267 }} />
      <Polyline coordinates={[Berlin, Frankfurt]} />

    </MapView>
  );
};

export default App;


/*</MapView><CustomMarker />
      </Marker> */
// <Polyline coordinates={[Berlin, Frankfurt]} />

/*
import React from "react";
//import App from './components/app.jsx';
import { StyleSheet, Text, View } from "react-native";
//import { MapView } from "expo";
import MapView from "react-native-maps";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
    };
  }
  fetchMarkerData() {
    fetch('https://feeds.citibikenyc.com/stations/stations.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          markers: responseJson.stationBeanList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchMarkerData();
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 40.76727216,
          longitude: -73.99392888,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude,
          };

          const metadata = `Status: ${marker.statusValue}`;

          return (
            <MapView.Marker
              key={index}
              coordinate={coords}
              title={marker.stationName}
              description={metadata}
            />
          );
        })}
      </MapView>
    );
  }
}

*/
>>>>>>> f30beffc423aa4b1d7957c56e9e6f73c7e54f139
